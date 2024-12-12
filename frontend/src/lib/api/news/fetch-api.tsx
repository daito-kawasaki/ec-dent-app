'use server'

import { NewsItem } from '@/lib/types/newsItem'
import NewsList from '@/components/ui/NewsList'

export async function getNewsItem(): Promise<NewsItem[]> {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/news`
        const response = await fetch(apiUrl, {
            cache: 'no-cache',
            credentials: 'include',
        })
        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status)
        }
        const newsAllItem: NewsItem[] = await response.json()

        return newsAllItem
    } catch (error) {
        console.error('接続エラー：', error)
        return []
    }
}
