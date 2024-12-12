'use server'

import { NewsItem } from '@/lib/types/newsItem'
import NewsList from '@/components/ui/NewsList'
import { getNewsItem } from '@/lib/api/news/fetch-api'

export default async function NewsListPage() {
    const newsAllItem: NewsItem[] = await getNewsItem()
    if (!newsAllItem) {
        return <p>loding</p>
    }

    return <NewsList newsAllItem={newsAllItem} />
}
