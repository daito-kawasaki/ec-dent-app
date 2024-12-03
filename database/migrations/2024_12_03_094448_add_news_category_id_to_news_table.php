<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('news', function (Blueprint $table) {
            //カラム追加
            $table->unsignedInteger('news_category_id')->after('news_detail');
            // カラムの外部キー制約追加
            $table->foreign('news_category_id')->references('news_category_id')->on('news_categories')->OnDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('news', function (Blueprint $table) {
            // 外部キー制約の削除
            $table->dropForeign('news_category_id');
            // カラムの削除
            $table->dropColumn('news_category_id');
        });
    }
};
