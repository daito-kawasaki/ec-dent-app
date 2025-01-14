import { NewsItem } from '@/lib/types/newsItem'
import categoryColors from '@/../config/tag_color.json'

export default function InformationTag({ tag }: { tag: NewsItem }) {
    const categoryId = tag.news_category_id.toString()
    const colorClass = categoryColors[categoryId] || 'bg-gray-400'

    return (
        <div
            className={` flex justify-center w-[75px] px-2 py-1 rounded text-sm font-medium bg-${colorClass} text-white`}>
            {tag.category.news_category_name}
        </div>
    )
}
