export type NewsItem = Pick<
    NewsItemResponse,
    | 'news_id'
    | 'news_title'
    | 'news_category_id'
    | 'deleted_at'
    | 'updated_at'
    | 'created_at'
>

export interface NewsItemResponse {
    news_id: number
    news_title: string
    news_category_id: number
    deleted_at: any
    updated_at: any
    created_at: any
}
