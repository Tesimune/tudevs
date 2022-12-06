<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PagesController;

Route::middleware('auth')->group(function () {
    
    Route::get('about', [PagesController::class, 'about'])->name('about');
    Route::get('api', [PagesController::class, 'api'])->name('api');
    Route::get('docs', [PagesController::class, 'docs'])->name('docs');
    Route::get('pricing', [PagesController::class, 'pricing'])->name('pricing');

});