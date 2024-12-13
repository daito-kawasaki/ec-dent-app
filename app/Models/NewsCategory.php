<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class NewsCategory extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $fillable = [
        'news_category_name',
    ];

    public function news()
    {
        return $this->hasMany(News::class,  'news_category_id', 'news_category_id');
    }
}
