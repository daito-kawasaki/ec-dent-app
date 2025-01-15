<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProductTag;
use App\Models\ProductImage;

class Product extends Model
{
    use HasFactory;

    public function product_tags()
    {
        return $this->belongsToMany(ProductTag::class)->withTimestamps();
    }

    public function product_images()
    {
        return $this->belongsToMany(ProductImage::class)->withTimestamps();
    }
}
