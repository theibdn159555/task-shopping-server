<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    // use HasFactory;

    protected $fillable = [
        "id",
        "name",
        "slug",
    ];

    public function productCategories()
    {
        return $this->hasOne(productCategories::class, 'category_id', "id");
    }
}
