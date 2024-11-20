'use client'

import { IMGPATH_BRAND, IMGPATH_HEADER } from '@/lib/common'
import { notoSansBengali } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { poppins } from '@/lib/fonts'

export default function Header() {
    const textClass = `text-xs bold flex items-center ${notoSansBengali.className}` //テキスト用のクラス
    const imageClass = 'w-32 h-auto ' //画像用のクラス

    type HeaderText = {
        text?: string
        href: string
        image?: string
    }

    const headerText: HeaderText[] = [
        { text: 'news', href: '/news' },
        { text: 'store', href: '/store' },
        { href: '/', image: `${IMGPATH_HEADER}ec-dent-logo.svg` },
        { text: 'brand', href: '/brand' },
        { text: 'login', href: '/login' },
    ]

    return (
        <header>
            <nav className="flex items-center justify-between px-4 lg:px-[7.32vw]">
                {headerText.map((value, index) => (
                    <Link
                        href={value.href}
                        key={index}
                        className={value.text && ' hidden lg:block'}>
                        {value.text && (
                            <span className={textClass}>{value.text}</span>
                        )}
                        {value.image && (
                            <Image
                                src={value.image}
                                alt=""
                                className={imageClass}
                                width={500}
                                height={500}
                            />
                        )}
                    </Link>
                ))}
                <div id="right" className="flex gap-x-2.5 items-center">
                    <div
                        id="mail_icon"
                        className="flex border border-black opacity-70 rounded-full px-[10px] py-[5px] gap-[10px]  items-center">
                        <FontAwesomeIcon
                            icon={faPaperPlane}
                            size="xs"
                            color="#212121cc"
                        />
                        <span
                            className={`${poppins.className} text-xs opacity-70`}>
                            CONTACT
                        </span>
                    </div>
                    <div
                        id="hamburger"
                        className=" w-[40px] h-[40px] flex flex-col gap-1 justify-center items-center border border-black rounded-[50%] ">
                        <span className=" w-5 h-[1px] bg-black"></span>
                        <span className=" w-5 h-[1px] bg-black"></span>
                        <span className=" w-5 h-[1px] bg-black"></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
