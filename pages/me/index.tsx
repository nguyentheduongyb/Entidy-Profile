'use client'

import { Carousel } from "flowbite-react";
import Link from "next/link";
import Category from "~/components/Category";

const Me = () => {
        return (<div>
                <div className="mt-8">
                        <div className='flex gap-2 container w-full h-[235px] mx-auto'>
                                <div className="w-full md:w-[796px] h-full">
                                        <Carousel slideInterval={5000}>
                                                <Link href="">
                                                        <div className="rounded w-full h-[235px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-b2a2951fd90f7ed294ea89de8b0498cf_xxhdpi")' }}></div>
                                                </Link>
                                                <Link href="">
                                                        <div className="rounded w-full h-[235px] bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-9452ec3552d60109b1f14c5aa1ae2b98_xxhdpi")' }}></div>
                                                </Link>

                                        </Carousel>
                                </div>
                                <div className='hidden md:flex flex-1 flex-col gap-2 h-full'>
                                        <div className="w-full h-2/4 rounded bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-c0f9828b11d3793d080f105f449986e5_xhdpi")' }}></div>
                                        <div className="w-full h-2/4 rounded bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("https://cf.shopee.vn/file/vn-50009109-c0f9828b11d3793d080f105f449986e5_xhdpi")' }}></div>

                                </div>
                        </div>
                        <div className="container">
                                <Category />
                        </div>
                </div>
        </div>)
}
export default Me
Me.Layout = "Default";