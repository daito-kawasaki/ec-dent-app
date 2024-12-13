<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\NewsCategory;

class News extends Model
{
    use HasFactory;
    use SoftDeletes;

    protected $table = 'news';

    protected $fillable = [
        'news_title',
        'news_detail',
        'news_category_id',
    ];

    public function category()
    {
        return $this->belongsTo(NewsCategory::class, 'news_category_id', 'news_category_id');
    }
}
