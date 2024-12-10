// app/components/NewsList.tsx
'use server'

import { NewsItem } from '@/lib/types/newsItem'

export async function getNewsFromLaravel(): Promise<NewsItem[]> {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/news`
        console.log('Fetching data from:', apiUrl) // リクエストURLをコンソールに出力
        const response = await fetch(apiUrl, {
            cache: 'no-store', // or revalidate: 60. どちらか一方のみ
        })

        if (!response.ok) {
            const errorText = await response.text() // エラーレスポンスのテキストを取得
            console.error('Server returned:', errorText) // エラーレスポンスをコンソールに出力
            throw new Error(
                `Error fetching news: ${response.status} - ${errorText}, URL: ${apiUrl}`,
            )
        }

        const newsData: NewsItem[] = await response.json()
        return newsData
    } catch (error) {
        // エラー処理
        console.error('Error in getNewsFromLaravel:', error)
        throw error // エラーを再スローして、上位のコンポーネントで処理
    }
}

// ... (rest of the code)

export default async function NewsList() {
    const newsData = await getNewsFromLaravel()

    return (
        <ul>
            {newsData.map(news => (
                <li key={news.news_id}>{news.news_title}</li>
            ))}
        </ul>
    )
}
