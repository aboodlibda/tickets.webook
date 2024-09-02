<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Event;
use Carbon\Carbon;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    public function index()
    {
        $events = Event::query()->with('tickets')->latest()->paginate(10);
        return view('admin.events.index',compact('events'));
    }

    public function create()
    {
        $categories = Category::query()->get(['id','name']);
        return view('admin.events.create',compact('categories'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'category_id' => 'required',
            'image' => 'required',
            'date' => 'required',
            'about' => 'required',
            'location' => 'required',
        ]);

        $data = $request->only([
           'title','category_id','date','about','location','lat','long'
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->getClientOriginalName();
            $request->image->move(public_path('events-images/'), $imageName);
            $data['image'] = $imageName;
        }
        $data['status'] = $request->status ? 'active' : 'inactive';
        $event = Event::query()->create($data);
        if ($event){
            return redirect()->route('events.index')->with('event-created','');
        }else{
            return redirect()->back();
        }


    }

    public function show(Event $event)
    {
        return view('admin.events.show',compact('event'));
    }

    public function edit(Event $event)
    {
        $categories = Category::query()->get(['id','name']);
        return view('admin.events.edit',compact('event','categories'));
    }

    public function update(Request $request,Event $event)
    {
//        dd($event);

        $request->validate([
            'title' => 'required',
            'category_id' => 'required',
//            'image' => 'required',
            'date' => 'required',
            'about' => 'required',
            'location' => 'required',
        ]);

        $data = $request->only([
            'title','category_id','date','about','location','lat','long'
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->getClientOriginalName();
            $request->image->move(public_path('events-images/'), $imageName);
            $data['image'] = $imageName;
        }
        $data['status'] = $request->status ? 'active' : 'inactive';
        $event = $event->update($data);
        if ($event){
            return redirect()->route('events.index')->with('event-updated','');
        }else{
            return redirect()->back();
        }

    }

    public function destroy(Request $request)
    {
        $event = Event::destroy($request->id);
        if ($event){
            return redirect()->route('events.index')->with('event-deleted','');
        }else{
            return redirect()->back();
        }
    }
}
