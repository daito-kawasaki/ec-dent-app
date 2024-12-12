// 'use client'

// import { IMGPATH_BRAND, IMGPATH_HEADER } from '@/lib/common'
// import { notoSansBengali } from '@/lib/fonts'
// import Image from 'next/image'
// import Link from 'next/link'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
// import { poppins } from '@/lib/fonts'

// export default function Header() {
//     const textClass = `text-xs bold font-bold flex items-center ${notoSansBengali.className} lg:~lg/xl:~text-sm/base xl:~text-base/xl min-[112.5rem]:text-2xl` //テキスト用のクラス
//     const imageClass = '~sp/lg:~w-32/75 h-auto' //画像用のクラス

//     type HeaderText = {
//         text?: string
//         href: string
//         image?: string
//     }

//     const headerText: HeaderText[] = [
//         { text: 'news', href: '/news' },
//         { text: 'store', href: '/store' },
//         { href: '/', image: `${IMGPATH_HEADER}ec-dent-logo.svg` },
//         { text: 'brand', href: '/brand' },
//         { text: 'login', href: '/login' },
//     ]

//     return (
//         <header>
//             <nav className="flex items-center justify-between  ~sp/md:~px-4/10 md:~px-10/14">
//                 {headerText.map((value, index) => (
//                     <Link
//                         href={value.href}
//                         key={index}
//                         className={value.text && ' hidden lg:block'}>
//                         {value.text && (
//                             <span className={textClass}>{value.text}</span>
//                         )}
//                         {value.image && (
//                             <Image
//                                 src={value.image}
//                                 alt=""
//                                 className={imageClass}
//                                 width={500}
//                                 height={500}
//                             />
//                         )}
//                     </Link>
//                 ))}
//                 <div
//                     id="right"
//                     className="flex gap-x-2.5 items-center ~sp/md:~gap-5/8  lg:hidden">
//                     <div
//                         id="mail_icon"
//                         className="flex border border-black opacity-70 rounded-full ~sp/lg:~px-2.5/6 ~/sm:~py-1.5/2 ~sp/lg:~gap-2.5/6 items-center">
//                         <FontAwesomeIcon
//                             className=" ~/sm:~text-xs/sm sm:~sm/lg:~text-sm/2xl"
//                             icon={faPaperPlane}
//                             size="xs"
//                             color="#212121cc"
//                         />
//                         <span
//                             className={`${poppins.className} font-medium opacity-70 ~sp/lg:~text-xs/2xl `}>
//                             CONTACT
//                         </span>
//                     </div>
//                     <div
//                         id="hamburger"
//                         className="~/sm:~w-7/10 ~/sm:~h-7/10 flex flex-col ~/md:~gap-0.5/1.5 justify-center items-center border border-black rounded-[50%]  sm:~sm/lg:~w-10/12  sm:~sm/lg:~h-10/12  md:w-vw-20 md:h-vw-20">
//                         <span className="block w-vw-14 h-[2px] scale-y-50 bg-black md:w-vw-10"></span>
//                         <span className="block w-vw-14 h-[2px] scale-y-50 bg-black md:w-vw-10"></span>
//                         <span className="block w-vw-14 h-[2px] scale-y-50 bg-black md:w-vw-10"></span>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     )
// }

'use client'

import { useState, useEffect } from 'react'
import { IMGPATH_BRAND, IMGPATH_HEADER } from '@/lib/common'
import { notoSansBengali } from '@/lib/fonts'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { poppins } from '@/lib/fonts'
import { playfairDisplay } from '@/lib/fonts'

export default function Header() {
    //ハンバーガーメニューの表示状態を管理
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isLineAnimationComplete, setIsLineAnimationComplete] =
        useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState)
        setIsLineAnimationComplete(false)
    }

    // Line animation timing
    useEffect(() => {
        if (isMenuOpen) {
            const lineTimer = setTimeout(() => {
                setIsLineAnimationComplete(true)
            }, 500) //Adjust this timing to control line animation duration

            return () => clearTimeout(lineTimer)
        } else {
            setIsLineAnimationComplete(false)
        }
    }, [isMenuOpen])

    type HamburgerList = {
        text: string
        textEG: string
        href: string
    }
    const hamburgerList: HamburgerList[] = [
        { text: 'トップ', textEG: 'top', href: '/' },
        { text: 'ストア', textEG: 'store', href: '/' },
        { text: 'お知らせ', textEG: 'news', href: '/' },
        { text: 'ブランド', textEG: 'brand', href: '/' },
        { text: '商品一覧', textEG: 'product', href: '/' },
        { text: 'お気に入り', textEG: 'favorit', href: '/' },
        { text: 'ログイン', textEG: 'login', href: '/' },
        { text: 'カート', textEG: 'cart', href: '/' },
    ]
    type HamburgerListEg = {
        textEG: string
        href: string
    }
    const hamburgerListEg: HamburgerListEg[] = [
        { textEG: 'top', href: '/' },
        { textEG: 'store', href: '/' },
        { textEG: 'news', href: '/' },
        { textEG: 'brand', href: '/' },
        { textEG: 'product', href: '/' },
        { textEG: 'favorit', href: '/' },
        { textEG: 'login', href: '/' },
        { textEG: 'cart', href: '/' },
    ]

    const textClass = `text-xs bold font-bold flex items-center ${notoSansBengali.className} lg:~lg/xl:~text-sm/base xl:~text-base/xl min-[112.5rem]:text-2xl`
    const imageClass = '~sp/sm:~w-52/75 h-auto sm:~sm/lg:~w-38/75'

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
        <header className="relative">
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
                                priority
                            />
                        )}
                    </Link>
                ))}
                <div
                    id="right"
                    className="flex gap-x-2.5 items-center ~sp/md:~gap-5/8  lg:hidden ">
                    <div
                        id="mail_icon"
                        className="hidden sm:flex border border-black opacity-70 rounded-full ~sp/lg:~px-2.5/6 ~/sm:~py-1.5/2 ~sp/lg:~gap-2.5/6 items-center ">
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
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className={`${isMenuOpen ? 'z-[51] border-white' : ''} relative w-14 h-14 flex flex-col ~/md:~gap-0.5/1.5 justify-center items-center border border-black rounded-[50%]  sm:~sm/lg:~w-10/12  sm:~sm/lg:~h-10/12  md:w-vw-20 md:h-vw-20
                          `}>
                        {/* 上の線 */}
                        <span
                            className={`w-7 h-[2px] scale-y-50 absolute sm:~sm/lg:~w-5/7 bg-black transition-transform duration-300 ${
                                isMenuOpen
                                    ? 'rotate-45 bg-white'
                                    : '-translate-y-2.5 sm:~sm/lg:~-translate-y-2/2.5'
                            }`}
                        />
                        {/* 中央の線 */}
                        <span
                            className={`w-7 h-[2px] scale-y-50 absolute sm:~sm/lg:~w-5/7 bg-black transition-opacity duration-300  ${
                                isMenuOpen ? 'opacity-0' : ''
                            }`}
                        />
                        {/* 下の線 */}
                        <span
                            className={`w-7 h-[2px] scale-y-50 absolute sm:~sm/lg:~w-5/7 bg-black transition-transform duration-300 ${
                                isMenuOpen
                                    ? '-rotate-45 bg-white ]'
                                    : 'translate-y-2.5 sm:~sm/lg:~translate-y-2/2.5'
                            }`}
                        />
                    </button>
                </div>
            </nav>

            {/* ハンバーガーメニューの内容 */}
            <div
                className={`lg:hidden bg- absolute top-0 left-0 z-50 w-[100vw] h-[100vh] transition-all duration-500 overflow-hidden ${
                    isMenuOpen
                        ? 'translate-x-0 opacity-100'
                        : '-translate-y-full opacity-0 pointer-events-none'
                }`}>
                {/* アニメションライン */}

                <nav
                    className={`flex gap-7 bg-[#5ccea799] w-full h-full pt-[100px] pb-[50px] ~/lg:~pl-24/56 `}>
                    <div>
                        {hamburgerList.map((value, index) => (
                            <Link
                                href={value.href}
                                key={index}
                                className={`block py-2 text-lg text-white transition-all duration-500 sm:~sm/lg:~text-lg/2xl
                ${
                    isMenuOpen && isLineAnimationComplete
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-10'
                }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}>
                                <span className="font-bold">{value.text}</span>
                            </Link>
                        ))}
                    </div>
                    <div>
                        {hamburgerListEg.map((value, index) => (
                            <Link
                                href={value.href}
                                key={index}
                                className={`block py-2 text-lg text-white transition-all duration-500 sm:~sm/lg:~text-lg/2xl
                ${
                    isMenuOpen && isLineAnimationComplete
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 translate-x-10'
                }`}
                                style={{
                                    transitionDelay: `${index * 100}ms`,
                                }}>
                                <span
                                    className={`${playfairDisplay.className} font-bold opacity-70`}>
                                    {value.textEG}
                                </span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    )
}
