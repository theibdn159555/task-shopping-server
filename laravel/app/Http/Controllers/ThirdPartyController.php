<?php

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginFacebookRequest;
use App\Http\Requests\Auth\LoginGoogleRequest;
use App\Services\ThirdParty;
use Illuminate\Http\Request;

class ThirdPartyController extends Controller
{
    public function loginFacebook(LoginFacebookRequest $request)
    {
        // Sync account
        // dd(111);
        $user = (new ThirdParty())->syncAccountFacebook();

        // gen access token
        //   $token = auth()->login($user);

        // return $this->respondWithToken($token);
    }

    public function loginGoogle(LoginGoogleRequest $request)
    {
        // Sync account
        dd(222);
        // $user = (new ThirdParty())->syncAccountFacebook();

        // gen access token
        //   $token = auth()->login($user);

        // return $this->respondWithToken($token);
    }
}
