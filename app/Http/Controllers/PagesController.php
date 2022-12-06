<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class PagesController extends Controller
{
    public function about()
    {
        return Inertia::render('About');
    }

    public function api()
    {
        return Inertia::render('Api');
    }

    public function docs()
    {
        return Inertia::render('Docs');
    }

    public function pricing()
    {
        return Inertia::render('Pricing');
    }
}
