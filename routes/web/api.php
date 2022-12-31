<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;

Route::middleware(['auth', 'verified'])->prefix("dashboard/api")->name("api.")->group(function () {
    Route::get('/', [ApiController::class, "index"])->name('index');
    Route::post("/", [ApiController::class, "store"])->name("store");
    Route::put('/{api}', [ApiController::class, "update"])->name('update');
    Route::delete('/{api}', [ApiController::class, "delete"])->name('delete');

});