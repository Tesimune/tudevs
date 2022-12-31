<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Api extends Model
{
    use HasFactory;
    protected $fillable = ["user_id", "appname", "status", "public_auth", "private_auth"];
}
