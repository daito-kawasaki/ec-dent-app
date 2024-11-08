import Link from 'next/link'
import Image from 'next/image'
import { IMGPATH_FOOTER } from '@/lib/common'
import { playfairDisplay, poppins } from '@/lib/fonts'

/*export default function Footer() {
    const left_items_font = 'text-base'

    type LeftItems = {
        text: string
        href: string
    }
    type RightItems = {
        text: string
        herf: string
    }
    const leftItems: LeftItems[] = [
        { text: 'TOP', href: '/' },
        { text: 'STORE', href: '/store' },
        { text: 'NEWS', href: '/news' },
        { text: 'CONTACT', href: '/contact' },
        { text: 'LOGIN', href: '/login' },
        { text: 'CART', href: '/cart' },
    ]

    const rightItems: RightItems[] = [
        { text: '利用規約', herf: '/' },
        { text: 'プライバシーポリシー', herf: '/' },
        { text: '特定商取引に関する法律', herf: '/' },
        { text: 'ショッピングガイド', herf: '/' },
    ]

    return (
        <footer className="pt-[7.32vw]">
            <div
                id="footer-top-cnt"
                className="flex pl-[5.12445vw] py-5 gap-[7.8330vw] bg-[#5ccea780]">
                <Link href="">
                    <div id="ec-dent-logo" className=" w-[100px] h-[92.23px] ">
                        <Image
                            src={`${IMGPATH_FOOTER}footer_logo.svg`}
                            alt="Footer Logo"
                            width={100}
                            height={92.23}
                        />
                    </div>
                </Link>
                <nav id="footer-block" className="flex gap-[3.80vw]">
                    <div
                        id="left-items"
                        className="flex-col flex gap-[0.732vw]">
                        {leftItems.map((item: LeftItems) => (
                            <Link
                                key={item.text}
                                href={item.href}
                                className={`${playfairDisplay} text-xl`}>
                                {item.text}
                            </Link>
                        ))}
                    </div>
                    <div
                        id="right-items"
                        className="flex-col flex gap-[0.732vw] ">
                        {rightItems.map((item: RightItems) => (
                            <Link
                                key={item.text}
                                href={item.herf}
                                className={`text-base`}>
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
            <div id="footer-bottom-cnt" className="py-5 bg-[#ced4da4d]">
                <div id="span-block" className=" w-fit mx-auto text-xl">
                    <span className={`${playfairDisplay.className}`}>©</span>
                    <span className={`${poppins.className}`}>2024</span>
                    <span className={`${playfairDisplay.className}`}>
                        CIEL Inc.
                    </span>
                </div>
            </div>
        </footer>
    )
}*/

export default function Footer() {
    type LeftItems = {
        text: string
        href: string
    }
    type RightItems = {
        text: string
        herf: string
    }
    const leftItems: LeftItems[] = [
        { text: 'TOP', href: '/' },
        { text: 'STORE', href: '/store' },
        { text: 'NEWS', href: '/news' },
        { text: 'CONTACT', href: '/contact' },
        { text: 'LOGIN', href: '/login' },
        { text: 'CART', href: '/cart' },
    ]

    const rightItems: RightItems[] = [
        { text: '利用規約', herf: '/' },
        { text: 'プライバシーポリシー', herf: '/' },
        { text: '特定商取引に関する法律', herf: '/' },
        { text: 'ショッピングガイド', herf: '/' },
    ]
    return (
        <footer className="pt-12 md:pt-20 xl:pt-[7.32vw]">
            <div
                id="footer_top_cnt"
                className=" items-center py-5 flex-col flex  gap-5 bg-[#5ccea780] 
                md:pl-12 md:items-start md:flex-row md:gap-10 
                lg:gap-16 lg:items-start 
                xl:pl-[5.12445vw] xl:gap-[7.8330vw]">
                <Link href="">
                    <div id="ec_dent_logo" className=" w-[100px] h-[92.23px] ">
                        <Image
                            src={`${IMGPATH_FOOTER}footer_logo.svg`}
                            alt="Footer Logo"
                            width={100}
                            height={92.23}
                        />
                    </div>
                </Link>
                <nav
                    id="footer_block"
                    className=" flex-col flex gap-5 px-5 text-center md:flex-row md:px-0 lg:gap-10 xl:gap-[3.80vw] ">
                    <div
                        id="left_items"
                        className=" flex gap-2 justify-center  md:flex-col md:text-left xl:flex xl:gap-0">
                        {leftItems.map((item: LeftItems) => (
                            <Link
                                key={item.text}
                                href={item.href}
                                className={`${playfairDisplay.className} text-lg xl:text-xl`}>
                                {item.text}
                            </Link>
                        ))}
                    </div>
                    <div
                        id="right_items"
                        className=" flex flex-wrap gap-2 justify-center 
                        md:flex-col md:text-left md:justify-start xl:gap-[0.732vw]">
                        {rightItems.map((item: RightItems) => (
                            <Link
                                key={item.text}
                                href={item.herf}
                                className={`text-base`}>
                                {item.text}
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
            <div
                id="footer_bottom_cnt"
                className="py-3 pl-5 bg-[#ced4da4d] md:pl-0 xl:py-5 ">
                <div
                    id="span_block"
                    className=" flex gap-1 text-xs md:w-fit md:mx-auto xl:text-xl">
                    <span className={`${playfairDisplay.className}`}>©</span>
                    <span className={`${poppins.className}`}>2024</span>
                    <span className={`${playfairDisplay.className}`}>
                        CIEL Inc.
                    </span>
                </div>
            </div>
        </footer>
    )
}
