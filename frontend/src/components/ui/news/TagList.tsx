import { NewsItem, PaginatedNewsData } from '@/lib/types/newsItem'

export default function TagList({
    newsAllItem,
}: {
    newsAllItem: PaginatedNewsData
}) {
    return (
        <div>
            <span className=" pr-[50px] pl-2.5 pb-2.5 font-normal  ">
                News Tags
            </span>
            <div className="flex flex-wrap w-190 gap-x-2.5 ">
                {newsAllItem.data.map((newsAllItem, index) => (
                    <li key={newsAllItem.news_id} className="">
                        <span>#{newsAllItem.category.news_category_name}</span>
                    </li>
                ))}
            </div>
        </div>
    )
}
