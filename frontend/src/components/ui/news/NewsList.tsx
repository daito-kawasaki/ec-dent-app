import { NewsItem, PaginatedNewsData } from '@/lib/types/newsItem'
import NewsContents from './contents'
import SectionTitle from '../section-ttl'
import TagList from './TagList'

export default function NewsList({
    newsAllItem,
}: {
    newsAllItem: PaginatedNewsData
}) {
    // console.log(newsAllItem)
    return (
        <div id="information_sec" className=" ">
            <div id="ttl">
                <SectionTitle ttl={'News'} sub_ttl={'お知らせ一覧'} />
            </div>
            <div id="ttl_cnt" className="pt-[40px] pb-[30px]">
                <span className="pl-[20px] text-2xl font-regular">News</span>
            </div>
            <div
                id="content_cnt"
                className=" md:flex items-center justify-between lg:gap-[140px] lg:pt-[30px] lg:pr-[140px]">
                <div id="news_list_left" className="">
                    <div
                        id="tag_list"
                        className="flex flex-col flex-wrap justify-start list-none gap-[10px] pt-[40px]">
                        <TagList newsAllItem={newsAllItem} />
                    </div>
                </div>
                <div id="news_list_right" className="pt-[30px]">
                    {newsAllItem.data.map(newsAllItem => (
                        <div key={newsAllItem.news_id} className="">
                            <NewsContents newsAllItem={newsAllItem} />
                        </div>
                    ))}
                    ;
                </div>
            </div>
        </div>
    )
}
