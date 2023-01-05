<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Inertia\Inertia;



class SocialController extends Controller
{
    
    public function googleredirect(Request $request)
    {
        return Socialite::driver('google')->redirect();
    }

    public function googlecallback(Request $request)
    {

        $userdata = Socialite::driver('google')->user();
        $user = User::where('email', $userdata->email)->whereNotNull('gmail_token')->first();
        $userNull = User::where('email', $userdata->email)->where('gmail_token', null)->first();
        
        if($user){
            
            Auth::login($user);
            return redirect()->route("dashboard");

        }elseif($userNull){
  
            echo '<script>';
            echo 'alert("The email address associating with your gmail is already in use!!!")';
            echo '</script>';
            // return redirect()->route("home");
              
        }else{
            // $user->token
            $pass = Str::random(15);

            $user = new User();
            $user->name = $userdata->name;
            $user->email = $userdata->email;
            $user->gmail_token = $userdata->token;
            $user->username = Str::random(33);
            $user->password = Hash::make($pass);
            $user->save();

            Auth::login($user);
            return redirect()->route("dashboard");
        }


    }

    public function githubredirect(Request $request)
    {
        return Socialite::driver('github')->redirect();
    }

    public function githubcallback(Request $request)
    {

        $userdata = Socialite::driver('github')->user();
        $user = User::where('email', $userdata->email)->whereNotNull('github_token')->first();
        $guthubNull = User::where('email', $userdata->email)->where('github_token', null )->first();

        if($user){
            
            Auth::login($user);
            return redirect()->route("dashboard");

      
        }elseif($guthubNull){
  
            echo '<script>';
            echo 'alert("The email address associating with your github is already in use!!!")';
            echo '</script>';
            // return redirect()->route("home");
              
        }else{
            // $user->token
            $pass = Str::random(15);
            
            $user = new User();
            $user->name = $userdata->nickname;
            $user->email = $userdata->email;
            $user->github_token = $userdata->token;
            $user->username = Str::random(33);
            $user->password = Hash::make($pass);
            $user->save();
    
            Auth::login($user);
            return redirect()->route("dashboard");
        }

    }
    
}
