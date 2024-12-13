import { NewsItem, PaginatedNewsData } from '@/lib/types/newsItem'
import NewsContents from './contents'

export default function NewsList({
    newsAllItem,
}: {
    newsAllItem: PaginatedNewsData
}) {
    const paginatedData = newsAllItem
    return (
        <div>
            {newsAllItem.data.map(newsAllItem => (
                <div key={newsAllItem.news_id} className="">
                    <NewsContents newsAllItem={newsAllItem} />
                </div>
            ))}
            ;
        </div>
    )
}
