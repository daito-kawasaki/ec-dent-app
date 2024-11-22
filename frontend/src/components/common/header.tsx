'use client'

import { IMGPATH_BRAND, IMGPATH_HEADER } from '@/lib/common'
import { notoSansBengali } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { poppins } from '@/lib/fonts'

export default function Header() {
    const textClass = `text-xs bold font-bold flex items-center ${notoSansBengali.className} lg:~lg/xl:~text-sm/base xl:~text-base/xl min-[112.5rem]:text-2xl` //テキスト用のクラス
    const imageClass = '~sp/lg:~w-32/75 h-auto' //画像用のクラス

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
            <nav className="flex items-center justify-between  ~sp/md:~px-4/10 md:~px-10/14">
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
                <div
                    id="right"
                    className="flex gap-x-2.5 items-center ~sp/md:~gap-5/8  lg:hidden">
                    <div
                        id="mail_icon"
                        className="flex border border-black opacity-70 rounded-full ~sp/lg:~px-2.5/6 ~/sm:~py-1.5/2 ~sp/lg:~gap-2.5/6 items-center">
                        <FontAwesomeIcon
                            className=" ~/sm:~text-xs/sm sm:~sm/lg:~text-sm/2xl"
                            icon={faPaperPlane}
                            size="xs"
                            color="#212121cc"
                        />
                        <span
                            className={`${poppins.className} font-medium opacity-70 ~sp/lg:~text-xs/2xl `}>
                            CONTACT
                        </span>
                    </div>
                    <div
                        id="hamburger"
                        className="~/sm:~w-7/10 ~/sm:~h-7/10 flex flex-col ~/md:~gap-0.5/1.5 justify-center items-center border border-black rounded-[50%]  sm:~sm/lg:~w-10/12  sm:~sm/lg:~h-10/12  md:w-vw-20 md:h-vw-20">
                        <span className="block w-vw-14 h-[2px] scale-y-50 bg-black md:w-vw-10"></span>
                        <span className="block w-vw-14 h-[2px] scale-y-50 bg-black md:w-vw-10"></span>
                        <span className="block w-vw-14 h-[2px] scale-y-50 bg-black md:w-vw-10"></span>
                    </div>
                </div>
            </nav>
        </header>
    )
}
