'use client'

import { notoSansJp } from '@/lib/fonts'
import Link from 'next/link'
import InformationTag from './tags'
import { NewsItem, PaginatedNewsData } from '@/lib/types/newsItem'

export default function NewsContents({
    newsAllItem,
}: {
    newsAllItem: NewsItem
}) {
    return (
        <Link
            href={`/news/${newsAllItem.news_id}`}
            className="border-b-2 grid px-2 pt-6 pb-2">
            <div className="flex flex-row pb-2">
                <div className="pr-2.5">
                    <InformationTag tag={newsAllItem} />
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <p className={`col-span-1`}>{newsAllItem.created_at}</p>
                <p className={`col-span-3`}>{newsAllItem.news_title}</p>
            </div>
        </Link>
    )
}
