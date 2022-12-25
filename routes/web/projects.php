<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectsController;

Route::middleware('auth')->group(function () {
    
    Route::get('/projects', [ProjectsController::class, 'index'])->name('projects');
    Route::get('/opensource', [ProjectsController::class, 'open'])->name('open');

});