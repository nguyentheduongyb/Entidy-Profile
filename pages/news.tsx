'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Carousel } from 'flowbite-react';

import { LiaPercentSolid } from "react-icons/lia"
import { HiFire } from "react-icons/hi"

import data from "~/backendURL/data";
import { array } from "prop-types";
const NewsPage = () => {

        const [arr, setArr]: any = useState([])
        useEffect(() => {
                setArr(data)
        }, [])

        return (
                <div className="container md:flex-row flex flex-col">
                        <Carousel className="md:hidden h-32">
                                <img className="w-full" src="https://cdn.tgdd.vn/2023/07/banner/sn18-720-220-720x220-2.png" alt="" />
                                <img className="w-full" src="https://cdn.tgdd.vn/2023/07/banner/sn18-720-220-720x220-2.png" alt="" />
                        </Carousel>
                        <div className="hidden w-1/3 md:flex md:order-2 gap-2 flex-col pt-10">
                                <img src="https://cdn.tgdd.vn/2023/07/banner/sn18-720-220-720x220-2.png" alt="" />
                                <img src="https://cdn.tgdd.vn/2023/07/banner/sn18-720-220-720x220-2.png" alt="" />
                        </div >
                        <div className="md:w-3/4 pr-0 md:pr-8 ">
                                <div>
                                        <div className="w-full flex justify-between items-center">
                                                <h2 className="py-4 text-lg uppercase font-bold text-[#288ad6]">Tin tức nổi bật</h2>
                                                <button className="font-medium text-sm text-[#288ad6]">Xem tất cả &gt;</button>
                                        </div>
                                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {arr.map((item: any, index: number) => (
                                                        <li key={index} className="rounded-md bg-[#f8f8f8] overflow-hidden h-full w-full">
                                                                <Link href={`/blog/${item.slug}`}>
                                                                        <div>
                                                                                <img className="" src="https://cdn.tgdd.vn/2023/04/content/thumb-600x360.jpg" alt="" />
                                                                        </div>
                                                                        <div className="p-2.5">
                                                                                <div className="text-sm text-[#333333]">
                                                                                        <strong className="line-clamp-2 text-sm">{item.title}</strong>
                                                                                        <div className="mt-2 text-sm">
                                                                                                <span className="line-clamp-4">{item.shortcontent}</span>
                                                                                        </div>
                                                                                </div>
                                                                        </div >
                                                                </ Link>
                                                        </li >
                                                )
                                                )}

                                        </ul >
                                </div >


                                <div className="rounded bg-[#F8F8F8] mt-5 p-3">
                                        <div className="flex items-center gap-3 text-red-400 py-4">
                                                <HiFire fontSize={24} />
                                                <h2 className="text-lg uppercase font-bold ">Top sản phẩm khuyến mãi</h2>
                                        </div>
                                        <ul className="flex flex-wrap md:flex-nowrap grid grid-cols-4 gap-2 pb-2 w-full">
                                                <li className="rounded-md bg-white overflow-hidden border">
                                                        <a href="">
                                                                <div>
                                                                        <img className="pt-4" src="https://cdn.tgdd.vn/Products/Images/86/279453/chuot-co-day-gaming-asus-keris-thumb-2-600x600.jpeg" alt="" />
                                                                </div>
                                                        </a>
                                                        <aside className="inline-block rounded-[16px] bg-red-500 text-xs mt-2 text-white font-bold py-0.5 px-2 ml-3">
                                                                <div className="flex items-center gap-1">
                                                                        <img width="20px" src="/sale-icon.png" alt="" />
                                                                        <span className="uppercase">Giá rẻ quá</span>
                                                                </div>

                                                        </aside>
                                                        <div className="gap-2 p-2.5">
                                                                <div className="">
                                                                </div>
                                                                <div className="text-sm text-[#333333]">
                                                                        <strong>Tải Avatarland - Khám phá vùng đất diệu kỳ</strong>
                                                                        <div className="mt-2 flex flex-col gap-2">
                                                                                <strong className="text-lg text-red-500">1.000.000₫</strong>
                                                                                <p><span className="font-medium line-through">1.000.000₫</span><span className="ml-2 no-underline font-medium text-red-700">-20%</span></p>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                </li>
                                                <li className="rounded-md bg-white overflow-hidden border">
                                                        <a href="">
                                                                <div>
                                                                        <img className="pt-4" src="https://cdn.tgdd.vn/Products/Images/86/279453/chuot-co-day-gaming-asus-keris-thumb-2-600x600.jpeg" alt="" />
                                                                </div>

                                                        </a>
                                                        <aside className="inline-block rounded-[16px] bg-red-500 text-xs mt-2 text-white font-bold py-0.5 px-2 ml-3">
                                                                <div className="flex items-center gap-1">
                                                                        <img width="20px" src="/sale-icon.png" alt="" />
                                                                        <span className="uppercase">Giá rẻ quá</span>
                                                                </div>

                                                        </aside>
                                                        <div className="gap-2 p-2.5">
                                                                <div className="">
                                                                </div>
                                                                <div className="text-sm text-[#333333]">
                                                                        <strong>Tải Avatarland - Khám phá vùng đất diệu kỳ</strong>
                                                                        <div className="mt-2 flex flex-col gap-2">
                                                                                <strong className="text-lg text-red-500">1.000.000₫</strong>
                                                                                <p><span className="font-medium line-through">1.000.000₫</span><span className="ml-2 no-underline font-medium text-red-700">-20%</span></p>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                </li>
                                                <li className="rounded-md bg-white overflow-hidden border">
                                                        <a href="">
                                                                <div>
                                                                        <img className="pt-4" src="https://cdn.tgdd.vn/Products/Images/86/279453/chuot-co-day-gaming-asus-keris-thumb-2-600x600.jpeg" alt="" />
                                                                </div>

                                                        </a>
                                                        <aside className="inline-block rounded-[16px] bg-red-500 text-xs mt-2 text-white font-bold py-0.5 px-2 ml-3">
                                                                <div className="flex items-center gap-1">
                                                                        <img width="20px" src="/sale-icon.png" alt="" />
                                                                        <span className="uppercase">Giá rẻ quá</span>
                                                                </div>

                                                        </aside>
                                                        <div className="gap-2 p-2.5">
                                                                <div className="">
                                                                </div>
                                                                <div className="text-sm text-[#333333]">
                                                                        <strong>Tải Avatarland - Khám phá vùng đất diệu kỳ</strong>
                                                                        <div className="mt-2 flex flex-col gap-2">
                                                                                <strong className="text-lg text-red-500">1.000.000₫</strong>
                                                                                <p><span className="font-medium line-through">1.000.000₫</span><span className="ml-2 no-underline font-medium text-red-700">-20%</span></p>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                </li>
                                                <li className="rounded-md bg-white overflow-hidden border">
                                                        <a href="">
                                                                <div>
                                                                        <img className="pt-4" src="https://cdn.tgdd.vn/Products/Images/86/279453/chuot-co-day-gaming-asus-keris-thumb-2-600x600.jpeg" alt="" />
                                                                </div>

                                                        </a>
                                                        <aside className="inline-block rounded-[16px] bg-red-500 text-xs mt-2 text-white font-bold py-0.5 px-2 ml-3">
                                                                <div className="flex items-center gap-1">
                                                                        <img width="20px" src="/sale-icon.png" alt="" />
                                                                        <span className="uppercase">Giá rẻ quá</span>
                                                                </div>

                                                        </aside>
                                                        <div className="gap-2 p-2.5">
                                                                <div className="">
                                                                </div>
                                                                <div className="text-sm text-[#333333]">
                                                                        <strong>Tải Avatarland - Khám phá vùng đất diệu kỳ</strong>
                                                                        <div className="mt-2 flex flex-col gap-2">
                                                                                <strong className="text-lg text-red-500">1.000.000₫</strong>
                                                                                <p><span className="font-medium line-through">1.000.000₫</span><span className="ml-2 no-underline font-medium text-red-700">-20%</span></p>
                                                                        </div>
                                                                </div>
                                                        </div>

                                                </li>
                                        </ul>

                                </div>
                        </div >
                </div >
        );
};
export default NewsPage;
NewsPage.Layout = "Default";
// HomePage.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.