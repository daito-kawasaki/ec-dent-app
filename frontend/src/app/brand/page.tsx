'use client'

import Image from 'next/image'
import { IMGPATH_BRAND } from '@/lib/common'
import SectionTitle from '@/components/ui/section-ttl'
import StoreHeader from '@/components/common/store-header'
import { dmSerifDisplay, shipporiMincho } from '@/lib/fonts'
import Footer from '@/components/common/footer'

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

                <section
                    id="main_sec"
                    className=" block mt-32 pb-7.5 md:flex md:justify-between md:items-center md:mx-10 md:mt-7.5 md:gap-10 md:mb-0">
                    <div
                        id="main_left_cnt"
                        className=" md:flex md:flex-col md:items-center">
                        <div
                            id="main_ttl"
                            className=" w-[23.8653vw] h-auto relative mb-3 mx-auto">
                            <Image
                                src={`${IMGPATH_BRAND}possible_back.png`}
                                alt=""
                                width={326}
                                height={123}
                                className=" img_setting"
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
                    <div
                        id="main_right_cnt"
                        className="w-250 h-auto ml-auto md:flex-[1_0_50%]">
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
                    id="section_left_line"
                    className=" w-full h-auto mr-auto -ml-40  my-5 md:w-500">
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
                    className=" block section_setting pt-10 pb-28 md:flex md:justify-center md:items-center md:gap-10 md:pt-7.5 md:pb-16">
                    <div
                        id="concept_left"
                        className=" w-full h-auto md:flex-[1_0_50%]">
                        <Image
                            src={`${IMGPATH_BRAND}concept.png`}
                            alt=""
                            width={630}
                            height={478}
                            className=" img_setting hidden md:block"
                        />
                        <Image
                            src={`${IMGPATH_BRAND}concept-sp.png`}
                            alt=""
                            width={360}
                            height={320}
                            className=" img_setting md:hidden"
                        />
                    </div>
                    <div id="concept_right" className=" flex-col-center">
                        <p
                            className={` mt-50 pb-5 ${shipporiMincho.className} md:mt-0 md:~md/xl:~text-sm/lg`}>
                            学生が知識をつけ、作成した作品を売り、それを購入した学生がその作品から知識や技術をつけそれ以上のものを作り今度は売り手側に回る。この好循環を私達は目指しこのサービスを広げていきたいと考えています。また、購入者が一般の方だったとしても自身の作品に対してフィードバックが得られる環境作りに対しても注力していきます。
                        </p>
                        <p
                            className={`${shipporiMincho.className} md:~md/xl:~text-sm/lg`}>
                            この現代社会で学生が輝ける場所が少なすぎると考えています。その中で、学生の知識と技術を発信できる場所を作らなければならないという考えのもとこのサービスを立ち上げるに至りました。作品を作って実際に売ることができそれを購入した人からフィードバックが返ってくる機会は多くないのです。だからこそこのサービスが学生達の知識貯蔵庫になれることを目指しています。
                        </p>
                    </div>
                </section>

                <div className="relative overflow-hidden ">
                    <div
                        id="section_right_line"
                        className="~/sm:~w-secLine_sp/secLine_sm ~/sm:~-mr-28/48 ml-auto my-12.5 rotate-[25deg] sm:~sm/md:~w-secLine_sm/secLine_md  lg:~lg/xl:~w-secLine_lg/secLine_xl">
                        <Image
                            src={`${IMGPATH_BRAND}path.png`}
                            alt=""
                            width={534}
                            height={47}
                            className="img-setting"
                        />
                    </div>
                </div>

                <SectionTitle
                    ttl={'Delegation Message'}
                    sub_ttl={'代表者メッセージ'}
                />
                <section
                    id="message_sec"
                    className=" section_setting md:flex md:items-center md:gap-10">
                    <div id="message_left" className="">
                        <p
                            className={`py-5 mt-6 ${shipporiMincho.className} md:~md/xl:~text-sm/lg`}>
                            自分自身学生という狭い環境の中で実践的な学びを得られたのは個人的な実務経験があったからだと
                            感じています。ですが、学生に仕事が回ってくることはめったに無いと思います。
                            その機会を我々が与えることができ、社会全体の技術力が上がる存在になることが我々の目標です。
                        </p>
                    </div>
                    <div
                        id="message_right"
                        className=" w-full h-auto md:flex-[1_0_50%]">
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
            <Footer />
        </>
    )
}
