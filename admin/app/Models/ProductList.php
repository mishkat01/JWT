<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductList extends Model
{ 
    use HasFactory;
    protected $guarded = [];

    protected $with = ['addedBy'];
    public function addedBy(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
