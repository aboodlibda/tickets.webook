<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EventsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\TicketsController;
use Illuminate\Support\Facades\Session;


Route::get('/',[HomeController::class,'home'])->name('home');

Route::get('main-event/{id}',[HomeController::class,'event'])->name('main-event');
Route::get('book-event/{id}',[HomeController::class,'book'])->name('book-event');
Route::post('confirm-booking',[HomeController::class,'confirm_booking'])->name('confirm-booking');

Route::get('user_info',function (){
    return view('user_info');
})->name('user-info');


Route::get('/payment/expired',function (){
    return 'aboodlibda';
});


Route::get('/payment/failed',function (){
    return view('payment-failed');
})->name('payment.failed');

Route::get('telegram',[HomeController::class,'telegram'])->name('telegram');
Route::get('send-telegram',[HomeController::class,'send_telegram'])->name('send_telegram');



Route::get('otp',[HomeController::class,'otp'])->name('otp');
Route::post('send-otp',[HomeController::class,'send_otp'])->name('send-otp');

Route::get('pay',[HomeController::class,'pay'])->name('pay');
Route::post('confirm-pay',[HomeController::class,'confirm_pay'])->name('confirm-pay');

Route::post('create-order',[HomeController::class,'create_order'])->name('create-order');

Route::group(['middleware' => 'guest'], function () {
    Route::get('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/register', [AuthController::class, 'registerPost'])->name('register');
    Route::get('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/login', [AuthController::class, 'loginPost'])->name('login');
});
Route::group(['middleware' => 'auth'], function () {
    Route::delete('/logout', [AuthController::class, 'logout'])->name('logout');

    Route::get('admin',[HomeController::class,'index'])->name('admin');
    Route::resource('events',EventsController::class);
    Route::resource('categories',CategoriesController::class);
    Route::resource('tickets',TicketsController::class);
    Route::get('orders',[HomeController::class,'orders'])->name('orders');
    Route::get('cards',[HomeController::class,'cards'])->name('cards');

});
