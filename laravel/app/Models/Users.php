<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;

    protected $fillable = [
        "id",
        "facebook_id",
        "google_id",
        'name',
        "phone",
        "picture",
        'email',
        'password',
        "role",
        "created_at",
        "updated_at",
    ];

    public function orders()
    {
        return $this->hasMany(Orders::class, 'user_id', 'id');
    }

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
}
