<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Role;

/**
* @group Auth
*
* APIs for managing users
*/
class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login','register','me']]);
    }


/**
  * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['username', 'password']);

        if (!auth()->attempt($credentials)) {
            return response()->json(['errors' => 'Invalid username and Password'], 401);
        }

        $user = auth('api')->user(); // Get the authenticated user
       
        $token = auth('api')->attempt($credentials);

        return $this->respondWithToken($token, $user);
    }


    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => 'required',
            'password' => 'required|string|min:4',
            'email' => 'string',
            'phone' => 'string',
            'role'=> 'string',
        ]);

        if($validator->fails()){
            return response()->json($validator->errors()->toJson(),400);
        }

        $user = User::create(array_merge(
            $validator->validate(),
            ['password' => bcrypt($request->password),]
        ));

        // $role = Role::create([
        //     'privilege' => 'user',
        //     'ref_id' => 2001,
        //     'user_id' => $user->id,
        // ]);

    
        return response()->json([
            'message' => '¡Successfully registered user!',
            'user' => $user,
            // 'privilege' => $role->privilege,
        ], 201);
    }

     /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }



/**
    * Get the token array structure.
     *
     * @param  string $token
     * @param  \App\Models\User $user
    
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token, $user)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => $user, // Include user details in the response
            
        ]);
    }
}
