'use server'

import { NewsItem, PaginatedNewsData } from '@/lib/types/newsItem'
import NewsList from '@/components/ui/news/NewsList'
import { getNewsItem } from '@/lib/api/news/fetch-api'

export default async function NewsListPage() {
    const newsAllItem: PaginatedNewsData = await getNewsItem(10, 1)

    if (!newsAllItem) {
        return <p>loding</p>
    }

    return <NewsList newsAllItem={newsAllItem} />
}
