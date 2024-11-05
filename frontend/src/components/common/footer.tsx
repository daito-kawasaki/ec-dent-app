import Link from 'next/link'
import Image from 'next/image'
import { IMGPATH_FOOTER } from '@/lib/common'
import { playfairDisplay } from '@/lib/fonts'

export default function Footer() {
    const left_list_setting = 'font-normal font-'
    const right_list_setting = ''
    const leftSetting: string[] = [
        'TOP',
        'STORE',
        'NEWS',
        'CONTACT',
        'LOGIN',
        'CART',
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
                        className="list-none flex-col flex gap-[0.732vw]">
                        <Link
                            href=""
                            className={`${playfairDisplay.className}`}>
                            TOP
                        </Link>
                        <Link href="" className=" ">
                            STORE
                        </Link>
                        <Link href="" className="">
                            NEWS
                        </Link>
                        <Link href="" className="">
                            CONTACT
                        </Link>
                        <Link href="" className="">
                            LOGIN
                        </Link>
                        <Link href="" className="">
                            CART
                        </Link>
                    </div>
                    <div
                        id="right-items"
                        className="list-none flex-col flex gap-[0.732vw]">
                        <Link href="" className="">
                            利用規約
                        </Link>
                        <Link href="" className="">
                            プライバシーポリシー
                        </Link>
                        <Link href="" className="">
                            特定商取引に関する法律
                        </Link>
                        <Link href="" className="">
                            ショッピングガイド
                        </Link>
                    </div>
                </nav>
            </div>
            <div id="footer-bottom-cnt" className="py-5 bg-[#ced4da4d]">
                <div id="footer-bottom-block" className="flex list-none ">
                    <span>©</span>
                    <span>2024</span>
                    <span>CIEL Inc.</span>
                </div>
            </div>
        </footer>
    )
}
