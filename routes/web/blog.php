<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::middleware('auth')->group(function () {
    
    Route::get('blog', [BlogController::class, 'blog'])->name('blog');
    
});