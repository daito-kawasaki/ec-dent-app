<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiNewsController;
use PHPUnit\Framework\MockObject\ReturnValueNotConfiguredException;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
// Route::apiResource('news', ApiNewsController::class);

Route::get('test', static function () {
    return array('sample test');
});

Route::get('news', [ApiNewsController::class, 'index']);
