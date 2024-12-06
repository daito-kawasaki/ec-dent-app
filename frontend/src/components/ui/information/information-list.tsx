'use client'

import { useState } from 'react'
import { dmSerifDisplay, poppins } from '@/lib/fonts'
import Link from 'next/link'
import InformationContents, { Contents } from './contents'

const tempContents: Contents[] = [
    {
        tags: [
            { name: '重要', color: 'red-400' },
            { name: '重要', color: 'red-400' },
        ],
        title: 'サービス開始のお知らせ',
        date: new Date(2024, 3, 30),
        link: '/information/1',
    },
    {
        tags: [{ name: '重要', color: '[#5ccea780]' }],
        title: 'サービス開始のお知らせ',
        date: new Date(2024, 3, 30),
        link: '/information/1',
    },
    {
        tags: [
            { name: '重要', color: 'sky-400' },
            { name: '重要', color: 'red-400' },
        ],
        title: 'サービス開始のお知らせ',
        date: new Date(2024, 3, 30),
        link: '/information/1',
    },
]

export default function InformationList({
    viewContents = 3,
}: {
    viewContents?: number
}) {
    // const [contents, setContents] = useState<>();

    return (
        <div className="px-[4vw] pt-[6vh]">
            <p className={`${dmSerifDisplay.className} text-[min(8vw,100px)]`}>
                Information
            </p>
            <div>
                {tempContents.map((contents, i) => (
                    <InformationContents key={i} contents={contents} />
                ))}
            </div>
            <div className="flex flex-col justify-end items-center min-h-[6vh]">
                <Link
                    href={'/Information'}
                    className={`${poppins.className} border border-gray-600 px-4 py-1 rounded-lg`}>
                    MORE INFO
                </Link>
            </div>
        </div>
    )
}
