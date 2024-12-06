import { NewsItem, NewsItemResponse } from '@/lib/types/newsItem'
import { apiServer } from '@/lib/utils/apiClient'

interface Props {
    data: NewsItem
}

export async function GetNewsList() {
    let data: NewsItem = {
        news_id: 0,
        news_title: 'テスト',
        news_category_id: 1,
        deleted_at: '',
        created_at: '',
        updated_at: '',
    }
    await apiServer
        .get<NewsItemResponse>('news')
        .then(res => {
            data = {
                news_id: res.data.news_id,
                news_title: res.data.news_title,
                news_category_id: res.data.news_category_id,
                deleted_at: res.data.deleted_at,
                created_at: res.data.created_at,
                updated_at: res.data.updated_at,
            }
        })
        .catch(err => {
            console.error(err)
        })
    return {
        props: {
            data,
        },
    }
}
