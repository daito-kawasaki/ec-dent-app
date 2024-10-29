'use Client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    const items_center = 'text-xs flex items-center'
    return (
        <header>
            <nav className="flex justify-between px-[7.32vw]">
                <Link href="" className={`${items_center}`}>
                    NEWS
                </Link>

                <Link href="" className={`${items_center}`}>
                    STORE
                </Link>

                <Link href="">
                    <div className=" w-[300px] h-[107px] bg-black">
                        {/* <Image src="/" alt="" width={500} height={500} /> */}
                    </div>
                </Link>

                <Link href="" className={`${items_center}`}>
                    BRAND
                </Link>

                <Link href="" className={`${items_center}`}>
                    LOGIN
                </Link>
            </nav>
        </header>
    )
}
