import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { config, IconDefinition } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Image from 'next/image'
import { IMGPATH_HEADER } from '@/lib/common'
import { notoSansBengali } from '@/lib/fonts'
import { link } from 'fs'

export default function StoreHeader() {
    const categoryList = [
        { categories: 'CATEGORY' },
        { categories: 'CATEGORY' },
        { categories: 'CATEGORY' },
        { categories: 'CATEGORY' },
    ]

    const categoryListSp = [
        { categories: 'CATEGORY' },
        { categories: 'CATEGORY' },
    ]

    const iconList: {
        link: string
        iconName: IconDefinition
        color: string
    }[] = [
        { link: '/favorites', iconName: faHeart, color: '#db3f3f' },
        { link: '/mypage', iconName: faUser, color: '#CED4DA' },
        { link: '/carts', iconName: faCartShopping, color: '#CED4DA' },
    ]

    const list_setting =
        'list-none hover:border-b border-black text-center flex-auto ~text-sm/base'
    return (
        <>
            <header id="header_sp" className=" lg:hidden">
                <div
                    id="top_cnt"
                    className=" flex items-center px-5 justify-between">
                    <div id="icon_block" className="flex gap-4 items-center">
                        {iconList.map((value, index) => (
                            <Link href={value.link} key={index}>
                                <FontAwesomeIcon
                                    icon={value.iconName}
                                    color={value.color}
                                    className=" text-xl md:text-2xl"
                                />
                            </Link>
                        ))}
                    </div>
                    <Link href="/">
                        <div
                            id="ec-dent-logo"
                            className=" w-[37.5vw] h-auto max-[300px]:">
                            <Image
                                src={`${IMGPATH_HEADER}ec-dent-logo.svg`}
                                alt=""
                                width={500}
                                height={500}
                                className=" img_setting"
                            />
                        </div>
                    </Link>
                    <div
                        id="hamburger"
                        className=" w-[40px] h-[40px] flex flex-col gap-1 justify-center items-center border border-black rounded-[50%] ml-12">
                        <span className=" w-5 h-[1px] bg-black"></span>
                        <span className=" w-5 h-[1px] bg-black"></span>
                        <span className=" w-5 h-[1px] bg-black"></span>
                    </div>
                </div>

                <div id="search_block" className=" px-5 mx-5">
                    <div
                        id="search_items"
                        className="border-b border-black py-1 h-fit flex items-center pt-7">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            size="lg"
                            color="#333333b3"
                        />
                        <input
                            type="text"
                            placeholder="すべての商品から探す"
                            className="border-none pl-[1.098vw] w-full p-0 font-bold text-black opacity-35 focus:border-none focus:ring-2 focus:ring-[#5CCEA7] rounded-lg placeholder:text-lg/xl"
                        />
                    </div>
                </div>
                <nav className="flex pt-7 justify-between font-bold">
                    {categoryListSp.map((value, index) => (
                        <li
                            key={index}
                            className={`${list_setting} ${notoSansBengali.className}`}>
                            {value.categories}
                        </li>
                    ))}
                </nav>
            </header>

            <header className="flex-col gap-5 lg:flex sp:hidden">
                <div
                    id="head-top-cnt"
                    className="flex justify-between px-[7.32vw]">
                    <div
                        id="left-block"
                        className="flex justify-between gap-[2.928vw] items-center hover:justify-center">
                        <Link href="/">
                            <div
                                id="ec-dent-logo"
                                className=" w-[21.96vw] h-auto max-[300px]:">
                                <Image
                                    src={`${IMGPATH_HEADER}ec-dent-logo.svg`}
                                    alt=""
                                    width={500}
                                    height={500}
                                    className=" img_setting"
                                />
                            </div>
                        </Link>

                        <div
                            id="search-items"
                            className="border-b border-black py-1 h-fit flex items-center">
                            <FontAwesomeIcon
                                icon={faMagnifyingGlass}
                                size="lg"
                                color="#333333b3"
                            />
                            <input
                                type="text"
                                placeholder="すべての商品から探す"
                                className="border-none pl-[1.098vw] w-fit p-0 font-bold text-black opacity-35 focus:border-none focus:ring-2 focus:ring-[#5CCEA7] rounded-lg placeholder:~text-base/lg"
                            />
                        </div>
                    </div>
                    <div
                        id="right-block"
                        className="flex gap-[2.2vw] items-center">
                        {iconList.map((value, index) => (
                            <Link href={value.link} key={index}>
                                <FontAwesomeIcon
                                    icon={value.iconName}
                                    size="xl"
                                    color={value.color}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
                <nav className="flex px-[7.32vw] justify-between font-bold">
                    {categoryList.map((value, index) => (
                        <li
                            key={index}
                            className={`${list_setting} ${notoSansBengali}`}>
                            {value.categories}
                        </li>
                    ))}
                </nav>
            </header>
        </>
    )
}
