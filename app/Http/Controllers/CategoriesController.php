<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoriesController extends Controller
{
    public function index()
    {
        $categories = Category::query()->latest()->paginate(10);
        return view('admin.categories.index',compact('categories'));
    }

    public function create()
    {
        return view('admin.categories.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'image' => 'required',
        ]);

        $data = $request->only([
            'name'
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->getClientOriginalName();
            $request->image->move(public_path('categories-images/'), $imageName);
            $data['image'] = $imageName;
        }
        $category = Category::query()->create($data);
        if ($category){
            return redirect()->route('categories.index')->with('category created successfully','');
        }else{
            return redirect()->back();
        }

    }

    public function show($id)
    {
    }

    public function edit(Category $category)
    {
        return view('admin.categories.edit',compact('category'));
    }

    public function update(Request $request, Category $category)
    {
        $request->validate([
            'name' => 'required',
        ]);

        $data = $request->only([
            'name'
        ]);

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = $image->getClientOriginalName();
            $request->image->move(public_path('categories-images/'), $imageName);
            $data['image'] = $imageName;
        }
        $category = $category->update($data);
        if ($category){
            return redirect()->route('categories.index')->with('category updated successfully','');
        }else{
            return redirect()->back();
        }
    }

    public function destroy(Request $request)
    {
        $category = Category::destroy($request->id);
        if ($category){
            return redirect()->route('categories.index')->with('category-deleted','');
        }else{
            return redirect()->back();
        }
    }
}
