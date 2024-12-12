import { getNewsItem } from '@/lib/api/news/fetch-api'
import { NewsItem } from '@/lib/types/newsItem'
import NewsList from '../ui/NewsList'

export default async function TopPage() {
    const newsAllItem: NewsItem[] = await getNewsItem()
    if (!newsAllItem) {
        return <p>loding</p>
    }

    return <NewsList newsAllItem={newsAllItem} />
}
