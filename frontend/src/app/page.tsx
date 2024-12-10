import TopPage from '@/components/page/top-page'
import Header from '@/components/common/header'
import NewsList from '@/components/ui/NewsList'
import FetchNewsList from '@/lib/api/news/fetch-news-list'

export default function first() {
    return (
        <>
            <Header />
            <TopPage />
            <FetchNewsList />
        </>
    )
}
