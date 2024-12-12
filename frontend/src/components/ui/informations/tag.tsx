'use client'

import { poppins } from '@/lib/fonts'
import { useEffect, useState } from 'react'

export interface Tag {
    name: string
    color: string
}

export default function InformationTag({ tag }: { tag: Tag }) {
    const [bgColor, setBgColor] = useState<string>('')

    useEffect(() => {
        setBgColor(tag.color.length !== 0 ? `bg-${tag.color}` : 'bg-gray-500')
    }, [tag])

    return (
        <div className={`${bgColor} px-4 pt-1 rounded`}>
            <p className={`${poppins.className} text-gray-100`}>{tag.name}</p>
        </div>
    )
}
