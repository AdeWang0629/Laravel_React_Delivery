<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\AuthenticateRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
class AuthController extends Controller
{
    public function authenticate(AuthenticateRequest $request)
    {
        $data = [
            'email' => $request['email'],
            'password' => $request['password']
        ];

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($data)) {
                return response()->json([
                    "error" => "invalid_credentials",
                    "message" => "The user credentials were incorrect. "
                ], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json([
                "error" => "could_not_create_token",
                "message" => "Enable to process request."
            ], 422);
        }

        // $request->session()->regenerate();

        // all good so return the token
        $user =  User::where('email', $request->get('email'))->get();
        return response()->json([
            'user'  => $user,
            'token' => $token,
        ],200);
    }

    public function register(RegisterRequest $request)
    {
        $request->validated();

        $data = [
            "email" => $request->email,
            "name" => $request->email,
            "password" => Hash::make($request->password)
        ];

        $user = User::create($data);

        // $request->session()->regenerate();

        $token = JWTAuth::fromUser($user);

        return response()->json([
            'user'  => $user,
            'token' => $token,
        ],200);
    }

    public function logout(Request $request): JsonResponse
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return response()->json(["message" => "User successfully logged out"], 204);
    }
}