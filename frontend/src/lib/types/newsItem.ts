export interface NewsItem {
    news_id: number
    news_title: string
    news_detail: string
    news_category_id: number
    deleted_at: string | null
    created_at: string | null
    updated_at: string | null
    category: {
        news_category_id: number
        news_category_name: string
        deleted_at: string | null
        created_at: string | null
        updated_at: string | null
    }
}
export interface PaginatedNewsData {
    current_page: number
    data: NewsItem[]
    first_page_url: string
    from: number | null
    last_page: number
    last_page_url: string
    links: {
        url: string | null
        label: string
        active: boolean
    }[]
    next_page_url: string | null
    path: string
    per_page: number
    prev_page_url: string | null
    to: number | null
    total: number
}
