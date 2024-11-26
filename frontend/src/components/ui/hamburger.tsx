// // 'use client'
// // import Link from 'next/link'
// // import { useState } from 'react'
// // export default function Hamburger() {
// //     function App() {
// //         const [openMenu, setOpenMenu] = useState(false)
// //         const handleMenuOpen = () => {
// //             setOpenMenu(!openMenu)
// //         }
// //         type HamburgerList = {
// //             text: string
// //             herf: string
// //         }
// //         const hamburgerList: HamburgerList[] = [
// //             { text: 'トップ', herf: '/' },
// //             { text: 'ストア', herf: '/' },
// //             { text: 'お知らせ', herf: '/' },
// //             { text: 'ブランド', herf: '/' },
// //             { text: '商品一覧', herf: '/' },
// //             { text: 'お気に入り', herf: '/' },
// //             { text: 'ログイン', herf: '/' },
// //             { text: 'カート', herf: '/' },
// //         ]
// //         return (
// //             <nav className=" px-[40px] pt-[120px] pb-[40] bg-[#5ccea799]">
// //                 <div
// //                     id="icon"
// //                     className=" className= w-[40px] h-[40px] flex flex-col gap-1 justify-center items-center border border-black rounded-[50%] ">
// //                     <span className=" w-5 h-[1px] bg-black rotate-45"></span>
// //                     <span className=" w-5 h-[1px] bg-black -rotate-45"></span>
// //                 </div>
// //                 <button
// //                     onClick={handleMenuOpen}
// //                     type="button"
// //                     className="z-10 space-y-2">
// //                     <div
// //                         className={
// //                             openMenu
// //                                 ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45'
// //                                 : 'w-8 h-0.5 bg-gray-600'
// //                         }
// //                     />
// //                     <div
// //                         className={
// //                             openMenu ? 'opacity-0' : 'w-8 h-0.5 bg-gray-600'
// //                         }
// //                     />
// //                     <div
// //                         className={
// //                             openMenu
// //                                 ? 'w-8 h-0.5 bg-gray-600 -rotate-45'
// //                                 : 'w-8 h-0.5 bg-gray-600'
// //                         }
// //                     />
// //                 </button>
// //                 <div id="menu" className="">
// //                     {hamburgerList.map((item: HamburgerList) => (
// //                         <Link key={item.text} href={item.herf} className="flex">
// //                             {item.text}
// //                         </Link>
// //                     ))}
// //                 </div>
// //                 <div></div>
// //             </nav>
// //         )
// //     }
// // }

// 'use client'
// import Link from 'next/link'
// import { useState } from 'react'

// export default function Hamburger() {
//     const [openMenu, setOpenMenu] = useState(false)

//     const handleMenuOpen = () => {
//         setOpenMenu(!openMenu)
//     }

//     type HamburgerList = {
//         text: string
//         href: string
//     }

//     const hamburgerList: HamburgerList[] = [
//         { text: 'トップ', href: '/' },
//         { text: 'ストア', href: '/store' },
//         { text: 'お知らせ', href: '/news' },
//         { text: 'ブランド', href: '/brand' },
//         { text: '商品一覧', href: '/products' },
//         { text: 'お気に入り', href: '/favorites' },
//         { text: 'ログイン', href: '/login' },
//         { text: 'カート', href: '/cart' },
//     ]

//     return (
//         <nav className="relative px-10 pt-10 pb-4 bg-[#5ccea799]">
//             {/* ハンバーガーアイコン */}
//             <button
//                 onClick={handleMenuOpen}
//                 type="button"
//                 className="relative z-10 flex flex-col items-center justify-center w-8 h-8">
//                 {/* 上の線 */}
//                 <div
//                     className={`absolute w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
//                         openMenu ? 'rotate-45' : '-translate-y-2'
//                     }`}
//                 />
//                 {/* 中央の線 */}
//                 <div
//                     className={`absolute w-8 h-0.5 bg-gray-600 transition-opacity duration-300 ${
//                         openMenu ? 'opacity-0' : ''
//                     }`}
//                 />
//                 {/* 下の線 */}
//                 <div
//                     className={`absolute w-8 h-0.5 bg-gray-600 transition-transform duration-300 ${
//                         openMenu ? '-rotate-45' : 'translate-y-2'
//                     }`}
//                 />
//             </button>

//             {/* メニューリスト */}
//             <div
//                 id="menu"
//                 className={`absolute top-20 left-0 w-full bg-[#5ccea799] shadow-md transition-transform ${
//                     openMenu ? 'block' : 'hidden'
//                 }`}>
//                 <ul className="flex flex-col space-y-4 p-4">
//                     {hamburgerList.map(item => (
//                         <li key={item.text}>
//                             <Link
//                                 href={item.href}
//                                 className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
//                                 {item.text}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     )
// }
'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Hamburger({ isOpen }: { isOpen: boolean }) {
    const [openMenu, setOpenMenu] = useState<boolean>(false)

    const handleMenuOpen = () => {
        setOpenMenu(!openMenu)
    }

    // メニューリストの型定義とデータ
    type HamburgerList = {
        text: string
        href: string
    }

    const hamburgerList: HamburgerList[] = [
        { text: 'トップ', href: '/' },
        { text: 'ストア', href: '/store' },
        { text: 'お知らせ', href: '/news' },
        { text: 'ブランド', href: '/brand' },
        { text: '商品一覧', href: '/products' },
        { text: 'お気に入り', href: '/favorites' },
        { text: 'ログイン', href: '/login' },
        { text: 'カート', href: '/cart' },
    ]

    if (isOpen) {
        return (
            <nav className=" px-6 pt-6 pb-4 bg-[#5ccea799]">
                {/* ハンバーガーアイコン */}
                <button
                    onClick={handleMenuOpen}
                    type="button"
                    className="relative z-10 flex flex-col items-center justify-center w-8 h-8">
                    {/* 上の線 */}
                    <div
                        className={`absolute w-8 h-0.5 bg-gray-800 transition-transform duration-300 ${
                            openMenu ? 'rotate-45' : '-translate-y-2'
                        }`}
                    />
                    {/* 中央の線 */}
                    <div
                        className={`absolute w-8 h-0.5 bg-gray-800 transition-opacity duration-300 ${
                            openMenu ? 'opacity-0' : ''
                        }`}
                    />
                    {/* 下の線 */}
                    <div
                        className={`absolute w-8 h-0.5 bg-gray-800 transition-transform duration-300 ${
                            openMenu ? '-rotate-45' : 'translate-y-2'
                        }`}
                    />
                </button>

                {/* メニューリスト */}
                <div
                    id="menu"
                    className={`absolute top-16 left-0 w-full bg-[#5ccea799] shadow-lg transition-all duration-300 ${
                        openMenu ? 'block' : 'hidden'
                    }`}>
                    <ul className="flex flex-col space-y-4 p-4">
                        {hamburgerList.map(item => (
                            <li key={item.text}>
                                <Link
                                    href={item.href}
                                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        )
    } else {
        return <></>
    }
}
