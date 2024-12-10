'use server'

import { NewsItem } from '@/lib/types/newsItem'
import NewsList from '@/components/ui/NewsList'
import { promises } from 'dns'

async function getNewsItem() {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/news`
    const response = await fetch(apiUrl, {
        cache: 'no-cache',
        credentials: 'include',
    })
    const newsAllItem: NewsItem[] = await response.json()

    return newsAllItem
}

export default async function FetchNewsList() {
    const newsAllItem: NewsItem[] = await getNewsItem()
    if (!newsAllItem) {
        return <p>loding</p>
    }

    return <NewsList newsAllItem={newsAllItem} />
}
