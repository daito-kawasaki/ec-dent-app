'use server'

import { NewsItem, PaginatedNewsData } from '@/lib/types/newsItem'
import NewsList from '@/components/ui/news/NewsList'

export async function getNewsItem(
    perPage: number = 10,
    page: number = 1,
): Promise<PaginatedNewsData> {
    try {
        const params = new URLSearchParams()
        params.append('per_page', perPage.toString())
        params.append('page', page.toString())

        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/news?${params.toString()}` // クエリパラメータを追加

        const response = await fetch(apiUrl, {
            cache: 'no-cache',
            credentials: 'include',
        })
        if (!response.ok) {
            throw new Error('HTTP error, status = ' + response.status)
        }
        const paginatedData: PaginatedNewsData = await response.json()

        return paginatedData
    } catch (error) {
        console.error('接続エラー：', error)
        return {
            // エラー時のダミーデータを返す
            current_page: 1,
            data: [],
            first_page_url: '',
            from: null,
            last_page: 1,
            last_page_url: '',
            links: [],
            next_page_url: null,
            path: '',
            per_page: perPage,
            prev_page_url: null,
            to: null,
            total: 0,
        }
    }
}
