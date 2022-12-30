<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Blog;
use Inertia\Inertia;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function blog()
    {
        return Inertia::render('Blog/Index', [
            "blogs" => Blog::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (auth()->user()->type == "admin"){
            return Inertia::render('Blog/Create');
        }
        return redirect()->route("blog.index");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (auth()->user()->type == "admin"){
            $validated = $request->validate([
                "title" => ['required', 'string', 'min:10', 'max:255', "unique:blogs"],
                "publish" => ['required', 'boolean'],
                "content" => ['required', 'string', 'min:50'],
            ]);

            Blog::create([...$validated, "user_id" => auth()->user()->id, "slug" => str_replace(" ", "_", $validated["title"])]);

            return redirect()->route("blog.index");
        }
        return redirect()->route("blog.index");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Blog $blog)
    {
        return Inertia::render("Blog/Show", [
            "blog" => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Blog $blog)
    {
        if (auth()->user()->type == "admin"){
            return Inertia::render('Blog/Edit', [
                'blog' => $blog,
            ]);
        }
        return redirect()->route("blog.index");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Blog $blog)
    {
        if (auth()->user()->type == "admin"){
            $validated = $request->validate([
                "title" => ['required', 'string', 'min:10', 'max:255', "unique:blogs"],
                "publish" => ['required', 'boolean'],
                "content" => ['required', 'string', 'min:50'],
            ]);

            $blog->title = $validated['title'];
            $blog->slug = str_replace(" ", "_", $validated["title"]);
            $blog->publish = $validated['publish'];
            $blog->content = $validated['content'];
            $blog->save();

            return redirect()->route("blog.index");
        }
        return redirect()->route("blog.index");

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Blog $blog)
    {
        if (auth()->user()->type == "admin"){
            $blog->delete();
        }
        return redirect()->route("blog.index");
    }
}
