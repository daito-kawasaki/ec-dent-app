import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function StoreHeader() {
    const list_setting =
        'list-none hover:border-b border-black text-center flex-auto'
    return (
        <header className="flex-col flex gap-5">
            <div id="head-top-cnt" className="flex justify-between px-[7.32vw]">
                <div
                    id="left-block"
                    className="flex justify-between gap-[2.928vw] items-center hover:justify-center">
                    <Link href="">
                        <div
                            id="ec-dent-logo"
                            className=" w-[300px] h-[107px] bg-black">
                            {/* <Image src="/" alt="" width={500} height={500} /> */}
                        </div>
                    </Link>

                    <div
                        id="search-items"
                        className="border-b border-black py-1 h-fit flex gap-[1.098vw] ">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            size="lg"
                            color="#333333b3"
                        />
                        <input
                            type="text"
                            placeholder="すべての商品から探す"
                            className="border-none w-fit p-0 font-bold text-black opacity-35"
                        />
                    </div>
                </div>
                <div id="right-block" className="flex gap-[2.2vw] items-center">
                    <FontAwesomeIcon icon={faHeart} size="xl" color="#db3f3f" />
                    <FontAwesomeIcon icon={faUser} size="xl" color="#CED4DA" />
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        size="xl"
                        color="#CED4DA"
                    />
                </div>
            </div>
            <nav className="flex px-[7.32vw] justify-between font-bold">
                <li className={`${list_setting}`}>CATEGORY</li>
                <li className={`${list_setting}`}>CATEGORY</li>
                <li className={`${list_setting}`}>CATEGORY</li>
                <li className={`${list_setting}`}>CATEGORY</li>
            </nav>
        </header>
    )
}
