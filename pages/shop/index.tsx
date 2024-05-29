'use client'
import axios from 'axios';
import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react'

const Shop = () => {

        return (
                <div className="w-full h-screen relative flex items-center justify-center">
                        <div className="flex overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 flex-col max-w-sm">
                                <div className='bg-center bg-cover bg-no-repeat w-full pt-[55%]' style={{ backgroundImage: 'url("https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-6/435758155_1486511498745613_770606530630491053_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFGIzYQs2dXlfs8wIgwStk5f06wzhv5lWp_TrDOG_mVamC0-oTa4-1nhyingiEUvfM6Gv48s7xvbmUkqPatkqB_&_nc_ohc=z-auxZwyWxIQ7kNvgEQ2KFB&_nc_ht=scontent.fhan17-1.fna&cb_e2o_trans=q&oh=00_AYDrcuc9lq-KgHgCB4iw9c_PHn6jWHvMNaS79bh5qgAIFg&oe=665BB63B")' }}></div>
                                <div className="p-4 flex-col items-center justify-center">
                                        <div className="flex flex-col justify-center items-center gap">
                                                <div className="relative">
                                                        <Image
                                                                alt="Bonnie image"
                                                                height="96"
                                                                src="/avatar.jpg"
                                                                width="96"
                                                                className="mb-3 rounded-full shadow-lg"
                                                        />
                                                        <span className="absolute bottom-4 right-2 transform translate-y-1/4 w-5 h-5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                                </div>

                                                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Thùy Dương Store</h5>
                                                <span className="text-sm text-gray-500 dark:text-gray-400">176 Điện Biên, Thành Phố Yên Bái, Tỉnh Yên Bái</span>
                                        </div>

                                        <p className="mt-4 font-normal text-gray-700 dark:text-gray-400">
                                                <span className="font-bold">Chuyên hàng Quảng Châu cao cấp</span>
                                                <br></br>
                                                <span className='mt-4 text-xs
                                                '>Xem sản phẩm và thử trực tiếp tại cửa hàng. </span>
                                                <br />
                                                <span>Số điện thoại: 077.8888.723. </span>
                                                <span>Địa chỉ: 176 Điện Biên, Thành Phố Yên Bái, Tỉnh Yên Bái.</span>
                                                <span>Cửa hàng chúng tôi chuyên cung cấp các sản phẩm áo, quần, giày, dép, túi sách được nhập khẩu từ Quảng Châu. Với chất vải siêu sịn. Bạn có thể đến trực tiếp cửa hàng để thử đồ hoặc liên hệ số điện thoại để nhận được tư vấn.</span>
                                        </p>
                                        <div className="mt-4 flex justify-center space-x-3 lg:mt-6">
                                                <a
                                                        href="https://www.facebook.com/profile.php?id=100021603316490"
                                                        className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                                                >
                                                        Open Facebook
                                                </a>
                                                <a
                                                        href="https://m.me/100021603316490"
                                                        className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                                >
                                                        Message
                                                </a>
                                        </div>
                                </div>
                        </div>
                </div >
        )
}

export default Shop
