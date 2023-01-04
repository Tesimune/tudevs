<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::get('/blogs', [BlogController::class, "blog"])->name('blog.index');
Route::get('/blogs/show/{blog}', [BlogController::class, "show"])->name('blog.show');

Route::middleware(['auth', 'verified'])->prefix("blogs")->name("blog.")->group(function () {
    Route::get('/create', [BlogController::class, "create"])->name('create');
    Route::post("/", [BlogController::class, "store"])->name("store");
    Route::get('/edit/{blog}', [BlogController::class, "edit"])->name('edit');
    Route::put('/{blog}', [BlogController::class, "update"])->name('update');
    Route::delete('/{blog}', [BlogController::class, "destroy"])->name('delete');
});