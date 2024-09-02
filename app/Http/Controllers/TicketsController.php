<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\Request;

class TicketsController extends Controller
{
    public function index()
    {
        $tickets = Ticket::query()->latest()->paginate(10);
        return view('admin.tickets.index',compact('tickets'));
    }

    public function create()
    {
        $events = Event::query()->get(['id','title']);
        return view('admin.tickets.create',compact('events'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'event_id' => 'required'
        ]);

        $data = $request->only([
            'name','price','event_id','seat','row'
        ]);

        $data['status'] = $request->status ? 'active' : 'inactive';
        $ticket = Ticket::query()->create($data);
        if ($ticket){
            return redirect()->route('tickets.index')->with('ticket-created','');
        }else{
            return redirect()->back();
        }

    }

    public function show($id)
    {
    }

    public function edit(Ticket $ticket)
    {
        $events = Event::query()->get(['id','title']);
        return view('admin.tickets.edit',compact('ticket','events'));
    }

    public function update(Request $request,Ticket $ticket)
    {
        $request->validate([
            'name' => 'required',
            'price' => 'required',
            'event_id' => 'required'
        ]);

        $data = $request->only([
            'name','price','event_id','seat','row'
        ]);

        $data['status'] = $request->status ? 'active' : 'inactive';
        $ticket = $ticket->update($data);
        if ($ticket){
            return redirect()->route('tickets.index')->with('ticket-updated','');
        }else{
            return redirect()->back();
        }
    }

    public function destroy(Request $request)
    {
        $ticket = Ticket::destroy($request->id);
        if ($ticket){
            return redirect()->route('tickets.index')->with('ticket-deleted','');
        }else{
            return redirect()->back();
        }
    }
}
