'use client'

import InformationTag, { Tag } from '@/components/ui/information/tag'
import { notoSansJp } from '@/lib/fonts'
import Link from 'next/link'

export interface Contents {
    tags: Tag[]
    title: string
    date: Date
    link: string
}

export default function InformationContents({
    contents,
}: {
    contents: Contents
}) {
    return (
        <Link href={contents.link} className="border-b-2 grid px-2 pt-6 pb-2">
            <div className="flex flex-row pb-2">
                {contents.tags.map((tag, i) => {
                    return (
                        <div key={i} className="pr-2.5">
                            <InformationTag tag={tag} />
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-4 gap-4">
                <p className={`col-span-1`}>
                    {`${contents.date.getFullYear()}/${(contents.date.getMonth() + 1).toString().padStart(2, '0')}/${contents.date.getDate().toString().padStart(2, '0')}`}
                </p>
                <p className={`col-span-3`}>{contents.title}</p>
            </div>
        </Link>
    )
}
