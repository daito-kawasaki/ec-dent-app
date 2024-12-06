'use client'

import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

type NEWS = {
    news_id: number
    news_title: string
    news_category_id: number
    deleted_at: string | null
    updated_at: string
    created_at: string
}

const url = 'http://localhost:80/api'
const options: AxiosRequestConfig = {
    url: `${url}/news`,
    method: 'GET',
}

const AxiosGet: React.FC = () => {
    const [news, setNews] = useState<NEWS[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        axios(options)
            .then((response: AxiosResponse<{ news: NEWS[] }>) => {
                setNews(response.data.news)
            })
            .catch((e: AxiosError) => {
                setError(e.message)
                console.error('API Error:', e)
            })
    }, [])

    return (
        <div>
            {error && <p>エラー: {error}</p>}
            {news.length === 0 && !error && <p>読み込み中...</p>}{' '}
            {news.length > 0 && (
                <ul>
                    {news.map(({ news_id, news_title, news_category_id }) => (
                        <li key={news_id}>
                            {news_id} : {news_title} : {news_category_id}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default AxiosGet
