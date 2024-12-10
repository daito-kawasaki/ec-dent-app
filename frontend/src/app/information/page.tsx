'use client'

import Header from '@/components/common/header'
import { fetchNews } from '@/lib/api/news/fetch-api'
import FetchNewsList from '@/lib/api/news/fetch-news-list'
import { NewsItem } from '@/lib/types/newsItem'
import { useEffect, useState } from 'react'

export default function NewsListPage() {
    const [newsData, setNewsData] = useState<NewsItem[]>([])
    const [loaded, setLoaded] = useState<boolean>(false)

    useEffect(() => {
        async function getNewsList() {
            const data = await fetch('http://localhost:80/api/news')
            const json = await data.json()
            setNewsData(json)
        }

        getNewsList()
    }, [])
    if (!loaded) <p>読込中</p>

    return (
        <div>
            {newsData.map((data, key) => (
                <div key={key}>{data.news_title}</div>
            ))}
        </div>
    )
    // return <FetchNewsList />
}
