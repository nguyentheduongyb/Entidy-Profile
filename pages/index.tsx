import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Carousel } from 'flowbite-react';

import { LiaPercentSolid } from "react-icons/lia"
import { HiFire } from "react-icons/hi"

import data from "~/backendURL/data";
import { array } from "prop-types";
const HomePage = () => {

  const [arr, setArr]: any = useState([])
  useEffect(() => {
    setArr(data)
  }, [])

  return (
    <div className="bg-gradient h-full py-12">
      <div className="container md:flex-row">
        <div><span className="text-xl font-bold">Tất cả sản phẩm và source code của tôi có trên:</span> <a className="text-xl text-blue-500" href="https://github.com/nguyentheduongyb" target="_blank">https://github.com/nguyentheduongyb</a></div>
        <p className="text-xl mt-2 font-bold text-teal-500">1 vài sản phẩm nổi bật của tôi: </p>
        <div className="w-full flex flex-wrap justify-center gap-16 mt-12 mb-12">
          <div className="w-2/5 p-2 bg-white border rounded-2xl shadow-2xl">
            <Carousel className="h-56">
              <img className="w-full" src="/image/Entidy/1.png" alt="" />
              <img className="w-full" src="/image/Entidy/2.png" alt="" />
              <img className="w-full" src="/image/Entidy/3.png" alt="" />
              <img className="w-full" src="/image/Entidy/4.png" alt="" />
              <img className="w-full" src="/image/Entidy/5.png" alt="" />
              <img className="w-full" src="/image/Entidy/6.png" alt="" />
            </Carousel>
            <div className="p-3">
              <strong>Website thời trang tích hợp thanh toán bằng tiền điện tử.</strong>
              <div>
                <p className=""><strong>Các chức năng: </strong><span>Auth, hiển thị sản phẩm được cập nhật từ hệ thống Admin, giỏ hàng, đặt hàng, thanh toán với tiền điện tử, theo dõi đơn hàng, ...</span></p>
              </div>
              <p className="flex items-center"><strong>Github Page:</strong><span className="text-xs text-red-500 ml-12 italic">Chưa cập nhật</span></p>
              <p>
                <strong className="">Source Code: </strong><a className="text-blue-500" href="https://github.com/nguyentheduongyb/Web3" target="_blank">https://github.com/nguyentheduongyb/Web3</a>
              </p>
            </div>
          </div>
          <div className="w-2/5 p-2 bg-white border rounded-2xl shadow-2xl">
            <Carousel className="h-56">
              <img className="w-full" src="/image/Broflix/1.png" alt="" />
              <img className="w-full" src="/image/Broflix/2.png" alt="" />
              <img className="w-full" src="/image/Broflix/3.png" alt="" />
            </Carousel>
            <div className="p-3">
              <strong><span className="text-red-500">Broflix</span> trang xem thông tin các bộ phim</strong>
              <div>
                <p className=""><strong>Các chức năng: </strong><span>Hiển thị phim, xem chi tiết phim, tìm kiếm, ...</span></p>
              </div>
              <p className="flex items-center gap-2"><strong>Github Page:</strong><a className="text-blue-500" href="https://nguyentheduongyb.github.io/BroFlix/" target="_blank">https://nguyentheduongyb.github.io/BroFlix/</a></p>
              <p>
                <strong className="">Source Code: </strong><a className="text-blue-500" href="https://github.com/nguyentheduongyb/BroFlix" target="_blank">https://github.com/nguyentheduongyb/BroFlix</a>
              </p>
            </div>
          </div>
          <div className="w-2/5 p-2 bg-white border rounded-2xl shadow-2xl">
            <Carousel className="h-56">
              <img className="w-full" src="/image/Tiktok/1.png" alt="" />
              <img className="w-full" src="/image/Tiktok/2.png" alt="" />
              <img className="w-full" src="/image/Tiktok/3.png" alt="" />
            </Carousel>
            <div className="p-3">
              <strong>Website thời trang tích hợp thanh toán bằng tiền điện tử.</strong>
              <div>
                <p className=""><strong>Các chức năng: </strong><span>Auth, hiển thị sản phẩm được cập nhật từ hệ thống Admin, giỏ hàng, đặt hàng, thanh toán với tiền điện tử, theo dõi đơn hàng, ...</span></p>
              </div>
              <p className="flex items-center gap-2"><strong>Github Page:</strong><a className="text-blue-500" href="https://nguyentheduongyb.github.io/tiktok/" target="_blank">https://nguyentheduongyb.github.io/tiktok/</a></p>
              <p>
                <strong className="">Source Code: </strong><a className="text-blue-500" href="https://github.com/nguyentheduongyb/tiktok" target="_blank">https://github.com/nguyentheduongyb/tiktok</a>
              </p>
            </div>
          </div>
          <div className="w-2/5 p-2 bg-white border rounded-2xl shadow-2xl">
            <Carousel className="h-56">
              <img className="w-full" src="/image/Dashboard/1.png" alt="" />
              <img className="w-full" src="/image/Dashboard/2.png" alt="" />
              <img className="w-full" src="/image/Dashboard/3.png" alt="" />
            </Carousel>
            <div className="p-3">
              <strong>Website thời trang tích hợp thanh toán bằng tiền điện tử.</strong>
              <div>
                <p className=""><strong>Các chức năng: </strong><span>Auth, hiển thị sản phẩm được cập nhật từ hệ thống Admin, giỏ hàng, đặt hàng, thanh toán với tiền điện tử, theo dõi đơn hàng, ...</span></p>
              </div>
              <p className="flex items-center gap-2"><strong>Github Page:</strong><a className="text-blue-500" href="https://nguyentheduongyb.github.io/dashboard/" target="_blank">https://nguyentheduongyb.github.io/dashboard/</a></p>
              <p>
                <strong className="">Source Code: </strong><a className="text-blue-500" href="https://github.com/nguyentheduongyb/dashboard" target="_blank">https://github.com/nguyentheduongyb/dashboard</a>
              </p>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
};
export default HomePage;
HomePage.Layout = "Default";
// HomePage.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.