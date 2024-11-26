'use client'

import Image from 'next/image'
import { IMGPATH_BRAND } from '../../lib/common'
import SectionTitle from '@/components/ui/section-ttl'
import StoreHeader from '@/components/common/store-header'
import { dmSerifDisplay, shipporiMincho } from '@/lib/fonts'
import { Shippori_Mincho } from 'next/font/google'

export default function Brand() {
    return (
        <>
            <StoreHeader />
            <main>
                <div id="main_visual_box" className=" w-full opacity-50">
                    <Image
                        src={`${IMGPATH_BRAND}main_visual.png`}
                        alt=""
                        width={1366}
                        height={600}
                        className=" img_setting"
                    />
                </div>

                <SectionTitle
                    ttl="Catch Copy"
                    sub_ttl="キャッチコピーについて"
                />

                <section id="main_sec" className=" block mt-32 ">
                    <div
                        id="main_left_cnt"
                        className="flex flex-col justify-center">
                        <div
                            id="main_ttl"
                            className=" w-60 h-auto relative mb-3 ml-auto">
                            <Image
                                src={`${IMGPATH_BRAND}possible_back.png`}
                                alt=""
                                width={326}
                                height={123}
                            />
                            <span className=" font-bold text-3.5xl absolute-center text-nowrap text-white">
                                I Mpossible
                            </span>
                        </div>
                        <span
                            className={` text-2xl ${dmSerifDisplay.className}`}>
                            Impossible
                        </span>
                        <p
                            className={` w-[36.6vw] ${shipporiMincho.className}`}>
                            という単語は不可能という意味ですが、「I」と「M」の間にスペースを入れてみてください。I'mpossibleとも読めませんか？この文は、「私は可能だ」という意味です。学生というのは才能の原石です。この原石は不可能を可能にする可能性を多く秘めています。この原石を私達のサービスで研磨することで、この社会で不可能だったこともを可能にしてくれる人材を磨き上げて行くという意味を込めています。
                        </p>
                    </div>
                    <div id="main_right_cnt" className="w-[46.12vw] ">
                        <Image
                            src={`${IMGPATH_BRAND}catch_copy.png`}
                            alt=""
                            width={630}
                            height={426}
                            className=" img_setting"
                        />
                    </div>
                </section>
                <section
                    id="main_sec"
                    className=" flex items-center justify-between ">
                    <div
                        id="main_left_cnt"
                        className="flex flex-col justify-center">
                        <div
                            id="main_ttl"
                            className=" w-[23.8653vw] h-auto relative mb-3 mx-auto">
                            <Image
                                src={`${IMGPATH_BRAND}possible_back.png`}
                                alt=""
                                width={326}
                                height={123}
                            />
                            <span className=" font-bold text-5xl absolute-center text-nowrap text-white">
                                I Mpossible
                            </span>
                        </div>
                        <span className=" text-2xl">Impossible</span>
                        <p className=" w-[36.6vw]">
                            という単語は不可能という意味ですが、「I」と「M」の間にスペースを入れてみてください。I'mpossibleとも読めませんか？この文は、「私は可能だ」という意味です。学生というのは才能の原石です。この原石は不可能を可能にする可能性を多く秘めています。この原石を私達のサービスで研磨することで、この社会で不可能だったこともを可能にしてくれる人材を磨き上げて行くという意味を込めています。
                        </p>
                    </div>
                    <div id="main_right_cnt" className="w-[46.12vw] ">
                        <Image
                            src={`${IMGPATH_BRAND}catch_copy.png`}
                            alt=""
                            width={630}
                            height={426}
                            className=" img_setting"
                        />
                    </div>
                </section>

                <div
                    id="section_img"
                    className=" w-[39vw] h-auto ml-auto mr-[12.445vw] my-5">
                    <Image
                        src={`${IMGPATH_BRAND}path.png`}
                        alt=""
                        width={534}
                        height={47}
                        className=" img_setting"
                    />
                </div>
                <SectionTitle ttl={'Concept'} sub_ttl={'私達の思い'} />
                <section
                    id="concept_sec"
                    className=" flex justify-between section_setting">
                    <div id="concept_left" className=" w-[46.12vw] h-auto">
                        <Image
                            src={`${IMGPATH_BRAND}concept.png`}
                            alt=""
                            width={630}
                            height={478}
                            className=" img_setting"
                        />
                    </div>
                    <div
                        id="concept_right"
                        className=" w-[36.6vw] flex-col-center">
                        <p className=" pb-[1.464vw]">
                            学生が知識をつけ、作成した作品を売り、それを購入した学生がその作品から知識や技術をつけそれ以上のものを作り今度は売り手側に回る。この好循環を私達は目指しこのサービスを広げていきたいと考えています。また、購入者が一般の方だったとしても自身の作品に対してフィードバックが得られる環境作りに対しても注力していきます。
                        </p>
                        <p className="">
                            この現代社会で学生が輝ける場所が少なすぎると考えています。その中で、学生の知識と技術を発信できる場所を作らなければならないという考えのもとこのサービスを立ち上げるに至りました。作品を作って実際に売ることができそれを購入した人からフィードバックが返ってくる機会は多くないのです。だからこそこのサービスが学生達の知識貯蔵庫になれることを目指しています。
                        </p>
                    </div>
                </section>

                <div className=" w-[39vw] h-auto mr-auto  my-5">
                    <Image
                        src={`${IMGPATH_BRAND}path.png`}
                        alt=""
                        width={534}
                        height={47}
                        className=" img_setting"
                    />
                </div>
                <SectionTitle
                    ttl={'Delegation Message'}
                    sub_ttl={'代表者メッセージ'}
                />
                <section
                    id="message_sec"
                    className=" flex justify-between section_setting">
                    <div
                        id="message_left"
                        className=" w-[36.6vw] flex-col-center">
                        <p>
                            自分自身学生という狭い環境の中で実践的な学びを得られたのは個人的な実務経験があったからだと
                            感じています。ですが、学生に仕事が回ってくることはめったに無いと思います。
                            その機会を我々が与えることができ、社会全体の技術力が上がる存在になることが我々の目標です。
                        </p>
                    </div>
                    <div id="message_right" className=" w-[46.12vw] h-auto">
                        <Image
                            src={`${IMGPATH_BRAND}message.png`}
                            alt=""
                            width={630}
                            height={478}
                            className=" img_setting"
                        />
                    </div>
                </section>
            </main>
        </>
    )
}
