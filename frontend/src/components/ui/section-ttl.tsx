'use client'

interface ttlProps {
    ttl: string
    sub_ttl: string
}
export default function SectionTitle({ ttl, sub_ttl }) {
    return (
        <div
            id="section_ttl"
            className=" w-fit pt-[1.464vw] pl-12 pr-24 border-b border-black">
            <span className=" block text-black opacity-70 pb-[5px]">{ttl}</span>
            <span className=" block pb-[0.732vw] text-2xl">{sub_ttl}</span>
        </div>
    )
}
