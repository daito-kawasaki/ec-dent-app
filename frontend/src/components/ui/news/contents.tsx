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
        <li className="px-[20px]">
            <Link
                href={`/news/${newsAllItem.news_id}`}
                className="flex flex-col border-b-2 gap-[10px] ">
                <div id="tag_items" className=" gap-[10px]">
                    <div id="tag_span" className="flex">
                        <InformationTag tag={newsAllItem} />
                        <p className={``}>{newsAllItem.created_at}</p>
                    </div>
                </div>
                <p className={``}>{newsAllItem.news_title}</p>
            </Link>
        </li>
    )
}
