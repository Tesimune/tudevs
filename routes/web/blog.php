<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BlogController;

Route::middleware(['auth', 'verified'])->prefix("blogs")->name("blog.")->group(function () {
    Route::get('/', [BlogController::class, "blog"])->name('index');
    Route::get('/show/{blog}', [BlogController::class, "show"])->name('show');
    Route::get('/create', [BlogController::class, "create"])->name('create');
    Route::post("/", [BlogController::class, "store"])->name("store");
    Route::get('/edit/{blog}', [BlogController::class, "edit"])->name('edit');
    Route::put('/{blog}', [BlogController::class, "update"])->name('update');
    Route::delete('/{blog}', [BlogController::class, "destroy"])->name('delete');
});