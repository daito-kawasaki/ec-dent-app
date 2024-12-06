'use client'

import MainVisualSlide from '@/components/ui/sliders/main-visual-slide'
import InformationList from '../ui/information/information-list'
import { dmSerifDisplay } from '@/lib/fonts'
import ProductSlide from '../ui/sliders/product-slide'
import Link from 'next/link'

interface PageLinkContext {
    src: string
    text: string
    link: string
}

function PageLink({ pageLinkContext }: { pageLinkContext: PageLinkContext }) {
    // const src = `bg-[url('${pageLinkContext.src}')]`
    const src = `bg-[url('/images/top-page/store_image.png')]`

    return (
        <></>
        // <div>
        //     <div className={src}>
        //         <p>{pageLinkContext.text}</p>
        //         <Link href={pageLinkContext.link}>MORE INFO</Link>
        //     </div>
        // </div>
    )
}

export default function TopPage() {
    return (
        <main>
            <div>トップページ </div>
            <MainVisualSlide slideSize={{ width: 480, height: 480 }} />
            <div className="flex flex-col px-4">
                <div
                    className={`${dmSerifDisplay.className} py-3 text-[min(8vw,100px)] text-center`}>
                    I Mpossible
                </div>
                <div className="grid gap-y-4">
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
                        src: '/images/top-page/store_image.png',
                        text: '',
                        link: '',
                    }}
                />
            </div>
            <InformationList />
        </main>
    )
}
