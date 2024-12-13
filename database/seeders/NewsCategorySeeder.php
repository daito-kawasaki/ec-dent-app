<?php

namespace Database\Seeders;

use App\Models\NewsCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NewsCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //

        NewsCategory::create([
            'news_category_name' => "Products"
        ]);
        NewsCategory::create([
            'news_category_name' => "Saller"
        ]);
        NewsCategory::create([
            'news_category_name' => "Shopping"
        ]);
        NewsCategory::create([
            'news_category_name' => "Funs"
        ]);
    }
}
