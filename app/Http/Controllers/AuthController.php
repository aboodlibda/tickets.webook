<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login()
    {
        return view('auth.login');
    }
    public function loginPost(Request $request)
    {
        $credentials = [
            'email' => $request->email,
            'password' => $request->password,
        ];
        if (Auth::attempt($credentials)) {
            return redirect('/admin')->with('success', 'Login berhasil');
        }
        return back()->with('error', 'Email or Password Wrong');
    }

    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}
