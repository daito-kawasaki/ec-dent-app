import TopPage from '@/components/page/top-page'
import Header from '@/components/common/header'

import FetchNewsList from '@/lib/api/news/fetch-news-list'
import NewsList from '@/components/ui/tmp'

export default function first() {
    return (
        <>
            <Header />
            <TopPage />
            <FetchNewsList />
            <NewsList />
        </>
    )
}
