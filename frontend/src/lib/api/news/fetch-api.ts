'use server'

import { NewsItem } from '@/lib/types/newsItem'

type NEWS = {
    news_id: number
    news_title: string
    news_category_id: number
    deleted_at: string | null
    updated_at: string
    created_at: string
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL

export async function fetchNews(): Promise<NewsItem[]> {
    try {
        console.log('hi')
        const response = await fetch('http://localhost:80/api/news')
        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status)
        }
        // const catchNews: NEWS[] = await response.json();

        // const news: NEWS[] = catchNews.map((cNews) => {

        // })
        const newsData = await response.json()
        return newsData
    } catch (error) {
        console.error('接続エラー：', error)
        return []
    }
}
