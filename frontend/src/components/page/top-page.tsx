import { dmSerifDisplay } from '@/lib/fonts'

import Link from 'next/link'
import MainVisualSlide from '../ui/sliders/main-visual-slide'
import ProductSlide from '../ui/sliders/product-slide'

import { NewsItem } from '@/lib/types/newsItem'

import { getNewsItem } from '@/lib/api/news/fetch-api'
import NewsList from '../ui/news/NewsList'

interface PageLinkContext {
    src: string
    text: string
    link: string
}

function PageLink({ pageLinkContext }: { pageLinkContext: PageLinkContext }) {
    const src = `bg-[url('/images/top-page/store_image.png')]`

    return <></>
}

export default async function TopPage() {
    const newsAllItem = await getNewsItem(3, 1)
    return (
        <main>
            <MainVisualSlide slideSize={{ width: 480, height: 480 }} />
            <div className="">
                <div className={`${dmSerifDisplay.className} `}>
                    I Mpossible
                </div>
                <div className="">
                    <div>
                        この現代社会で学生が輝ける場所が少なすぎると考えています。
                        その中で、学生の知識と技術を発信できる場所がこのEC-DENTです。
                        作品を作って実際に売ることができそれを購入した人からフィードバックが
                        返ってくる機会は多くないのです。
                    </div>
                    <div>
                        学生が知識をつけ、作成した作品を売り、それを購入した学生がその作品から知識や技術をつけ、それ以上のものを作り、今度は売り手側に回る。この好循環を私達は目指し、このサービスを広げていきたいと考えています。
                    </div>
                </div>
            </div>
            <ProductSlide slideSize={{ width: 480, height: 480 }} />
            <div>
                <PageLink
                    pageLinkContext={{
                        src: '/images/top-page/store-image.png',
                        text: '',
                        link: '',
                    }}
                />
            </div>

            <NewsList newsAllItem={newsAllItem} />
        </main>
    )
}
