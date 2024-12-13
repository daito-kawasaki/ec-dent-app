<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\News;
use Illuminate\Support\Str;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        News::create([
            'news_title' => Str::random(10),
            'news_detail'  => Str::random(10),
            'news_category_id'  => 3,
        ]);

        News::create([
            'news_title' => Str::random(10),
            'news_detail'  => Str::random(10),
            'news_category_id'  => 2,
        ]);
        News::create([
            'news_title' => Str::random(10),
            'news_detail'  => Str::random(10),
            'news_category_id'  => 4,
        ]);
        News::create([
            'news_title' => Str::random(10),
            'news_detail'  => Str::random(10),
            'news_category_id'  => 1,
        ]);
    }
}
