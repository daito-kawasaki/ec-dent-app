import { NewsItem } from '@/lib/types/newsItem'

export default function NewsList({ newsAllItem }: { newsAllItem: NewsItem[] }) {
    return (
        <div>
            {newsAllItem.map((newsAllItem: NewsItem) => (
                <div key={newsAllItem.news_id}>
                    <p>{newsAllItem.news_title}</p>
                    <p>{newsAllItem.news_detail}</p>
                </div>
            ))}
            ;
        </div>
    )
}
