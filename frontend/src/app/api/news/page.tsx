'use client'

import { useEffect, useState } from 'react'
import { fetchNews } from '@/lib/api/news/fetch-api'

type NEWS = {
    news_id: number
    news_title: string
    news_category_id: number
    deleted_at: string | null
    updated_at: string
    created_at: string
}

const AxiosGet: React.FC = () => {
    const [news, setNews] = useState<NEWS[]>([])
    const [error, setError] = useState<string | null>(null)
    const [isLoaded, setIsLoaded] = useState<boolean>(false)

    useEffect(() => {
        async function fetchNewsData() {
            const newsData = await fetchNews()
            console.log('yo')
            console.log(newsData)
            setNews(newsData)
            setIsLoaded(true)
        }
        fetchNewsData()
    }, [])

    if (!isLoaded) {
        return <div>読み込み中</div>
    }

    if (news)
        return (
            <div>
                <ul>
                    {news.map(({ news_id, news_title, news_category_id }) => (
                        <li key={news_id}>
                            {news_id} : {news_title} : {news_category_id}
                        </li>
                    ))}
                </ul>
            </div>
        )
}

export default AxiosGet
