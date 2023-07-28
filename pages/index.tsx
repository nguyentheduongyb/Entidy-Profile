'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Carousel } from 'flowbite-react';

import { LiaPercentSolid } from "react-icons/lia"
import { HiFire } from "react-icons/hi"

import data from "~/backendURL/data";
import { array } from "prop-types";
import { BsDiscord, BsGithub, BsFacebook, BsInstagram, BsTwitter, BsBookmarkHeartFill, BsCoin, BsFillHeartFill } from 'react-icons/bs';
import { BiHeart } from 'react-icons/bi'
import { LiaUserSolid } from 'react-icons/lia'
import { FaHeadphones } from "react-icons/fa"
import { FcSportsMode } from "react-icons/fc"
import { PiGameController } from "react-icons/pi"
import { SiYourtraveldottv } from "react-icons/si"
import { AiFillHome } from "react-icons/ai"
const HomePage = () => {

  const [arr, setArr]: any = useState([])
  const [tab, setTab] = useState(1)
  useEffect(() => {
    setArr(data)
  }, [])

  return (
    <div className="bg-[#FBFCFE] h-full pb-12">
      <div className="container md:flex-row">
        <div className="flex justify-center">
          <img className="md:w-3/5" src="/image/minion.png" alt="" />
        </div>
        <div className="bg-white drop-shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 rounded-[24px] flex md:flex-row flex-col justify-between">
          <div className="flex md:flex-row md:gap-12 gap-6">
            <div className="md:h-40 md:w-40 w-32 h-32 bg-center bg-no-repeat bg-cover rounded-[24px]" style={{ backgroundImage: 'url("/image/avatar-ntd.jpg")' }}></div>
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <strong className="md:text-xl">Nguyễn Thế Dương</strong>
                <p className="text-sm text-gray-500 mt-2">Fullstack Developer</p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mx-auto md:pr-8">
                <div className="bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] md:h-[44px] md:w-[44px] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                  <a href="https://github.com/nguyentheduongyb/" target="_blank"><BsGithub className="md:w-[20px] md:h-[20px]" /></a>
                </div>
                <div className="bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] md:h-[44px] md:w-[44px] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                  <a href="https://discord.gg/CWBV5Utg" target="_blank"><BsDiscord className="md:w-[16px] md:h-[16px]" /></a>
                </div>
                <div className="bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] md:h-[44px] md:w-[44px] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                  <a href="https://www.facebook.com/ntd.7302/" target="_blank"><BsFacebook className="md:w-[20px] md:h-[20px]" /></a>
                </div>
                <div className="bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] md:h-[44px] md:w-[44px] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                  <a href="https://www.instagram.com/ntd.7302/"><BsInstagram className="md:w-[20px] md:h-[20px]" /></a>
                </div>
                <div className="bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.3)] md:h-[44px] md:w-[44px] h-[28px] w-[28px] rounded-full flex items-center justify-center">
                  <a href="https://twitter.com/ntduong2002"><BsTwitter className="md:w-[20px] md:h-[20px]" /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex md:px-8 pt-4 mt-4 md:mt-0 md:pt-0 flex-wrap md:w-1/2 border-t border-t-2 md:border-t-0 md:border-l md:border-l-[2px]">
            <div className="xl:w-1/2 w-full">
              <p className="text-sm font-bold uppercase text-[#9B9B9B]">Email</p>
              <p>nguyentheduongyb@gmail.com</p>
            </div>
            <div className="xl:w-1/2 w-full">
              <p className="text-sm font-bold uppercase text-[#9B9B9B]">Ngày sinh</p>
              <p>07/03/2002</p>
            </div>
            <div className="xl:w-1/2 w-full">
              <p className="text-sm font-bold uppercase text-[#9B9B9B]">Liên hệ</p>
              <p>0985xxx759</p>
            </div>
            <div className="xl:w-1/2 w-full">
              <p className="text-sm font-bold uppercase text-[#9B9B9B]">Quê quán</p>
              <p>Yên Bái</p>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-12 mt-12">
          <div>
            <div className="rounded-[24px] bg-white drop-shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 flex lg:flex-col flex-row md:gap-8 gap-2">
              <div onClick={() => { setTab(1) }} className={`h-24 w-24 bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[24px] flex flex-col items-center justify-center cursor-pointer ${tab == 1 ? "text-white bg-gradient-to-r from-cyan-500 to-teal-300" : ""}`}>
                <LiaUserSolid size="32" color="#028fe3" />
                <strong className="uppercase">Bản thân</strong>
              </div>
              <div onClick={() => { setTab(2) }} className={`h-24 w-24 bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[24px] flex flex-col items-center justify-center cursor-pointer ${tab == 2 ? " text-white bg-gradient-to-r from-cyan-500 to-teal-300" : ""}`}>
                <BsBookmarkHeartFill size="32" color="#1FB096" />
                <strong className="uppercase">Sản phẩm</strong>
              </div>
              <div onClick={() => { setTab(3) }} className={`h-24 w-24 bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] rounded-[24px] flex flex-col items-center justify-center cursor-pointer ${tab == 3 ? " text-white bg-gradient-to-r from-cyan-500 to-teal-300" : ""}`}>
                <BiHeart size="32" color="#F05252" />
                <strong className="uppercase">Sở thích</strong>
              </div>
            </div>
          </div>
          <div className="rounded-[24px] bg-white drop-shadow-[0_0_20px_rgba(0,0,0,0.25)] p-6 flex-1">
            {/* Self */}
            <div className={`${tab == 1 ? "block" : "hidden"}`}>
              <strong className="text-2xl">Giới thiệu</strong>
              <div className="w-32 h-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 mt-1 mb-6"></div>
              <p>Mình tên là Dương. Mình từng theo học 2 năm tại trường Cao Đẳng Công nghệ Bách Khoa Hà Nội chuyên nghành Công nghệ thông tin. </p>
              <p className="mt-4">Mình là lập trình viên Fullstack đã từng làm việc tại công ty PNG Soft nhưng sau đó nghỉ ngang. Mình có định hướng chuyển sang Blockchain và mảng marketing nên giờ mình đang đi làm với vị trí marketing tại Hà Nội. Trong thời gian tới, mình muốn tìm hiểu và kinh doanh 1 mặt hàng nào đó, ví dụ có thể như là nước hoa. </p>
              <p className="flex items-center gap-4 mt-12"><AiFillHome size="20" color="#8C939D" /><span>Hoàng Mai, Hà Nội</span></p>
              <p className="flex items-center gap-4 mt-2"><BsFillHeartFill size="20" color="#8C939D" /><span>Độc thân</span></p>
            </div>
            {/*Project */}
            <div className={`${tab == 2 ? "block" : "hidden"}`}>
              <strong className="text-2xl">Sản phẩm cá nhân</strong>
              <div className="w-32 h-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 mt-1"></div>
              <div className="w-full flex flex-wrap justify-center md:gap-16 gap-8 mt-12 mb-12">
                <div className="md:w-4/5 lg:w-[45%] w-11/12 p-3 bg-white rounded-[26px] drop-shadow-[0_0_35px_rgba(0,0,0,0.25)]">
                  <Carousel className="md:h-56 h-32">
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
                    <p className="truncate"><strong>Github Page: </strong><span className="text-xs text-red-500 ml-12 italic">Chưa cập nhật</span></p>
                    <p className="truncate">
                      <strong className="">Source Code: </strong><a className="text-blue-500" href="https://github.com/nguyentheduongyb/Web3" target="_blank">https://github.com/nguyentheduongyb/Web3</a>
                    </p>
                  </div>
                </div>
                <div className="md:w-4/5 lg:w-[45%] w-11/12 p-3 bg-white rounded-[26px] drop-shadow-[0_0_35px_rgba(0,0,0,0.25)]">
                  <Carousel className="md:h-56 h-32">
                    <img className="w-full" src="/image/Broflix/1.png" alt="" />
                    <img className="w-full" src="/image/Broflix/2.png" alt="" />
                    <img className="w-full" src="/image/Broflix/3.png" alt="" />
                  </Carousel>
                  <div className="p-3">
                    <strong><span className="text-red-500">Broflix</span> trang xem thông tin các bộ phim</strong>
                    <div>
                      <p className=""><strong>Các chức năng: </strong><span>Hiển thị phim, xem chi tiết phim, tìm kiếm, ...</span></p>
                    </div>
                    <p className="truncate"><strong>Github Page: </strong><a className="text-blue-500" href="https://nguyentheduongyb.github.io/BroFlix/" target="_blank">https://nguyentheduongyb.github.io/BroFlix/</a></p>
                    <p className="truncate">
                      <strong className="">Source Code: </strong><a className="text-blue-500" href="https://github.com/nguyentheduongyb/BroFlix" target="_blank">https://github.com/nguyentheduongyb/BroFlix</a>
                    </p>
                  </div>
                </div>
                <div className="md:w-4/5 lg:w-[45%] w-11/12 p-3 bg-white rounded-[26px] drop-shadow-[0_0_35px_rgba(0,0,0,0.25)]">
                  <Carousel className="md:h-56 h-32">
                    <img className="w-full" src="/image/Tiktok/1.png" alt="" />
                    <img className="w-full" src="/image/Tiktok/2.png" alt="" />
                    <img className="w-full" src="/image/Tiktok/3.png" alt="" />
                  </Carousel>
                  <div className="p-3">
                    <strong>Website thời trang tích hợp thanh toán bằng tiền điện tử.</strong>
                    <div>
                      <p className=""><strong>Các chức năng: </strong><span>Auth, hiển thị sản phẩm được cập nhật từ hệ thống Admin, giỏ hàng, đặt hàng, thanh toán với tiền điện tử, theo dõi đơn hàng, ...</span></p>
                    </div>
                    <p className="truncate"><strong>Github Page: </strong><a className="text-blue-500" href="https://nguyentheduongyb.github.io/tiktok/" target="_blank">https://nguyentheduongyb.github.io/tiktok/</a></p>
                    <p className="truncate">
                      <strong className="">Source Code: </strong><a className="text-blue-500" href="https://github.com/nguyentheduongyb/tiktok" target="_blank">https://github.com/nguyentheduongyb/tiktok</a>
                    </p>
                  </div>
                </div>
                <div className="md:w-4/5 lg:w-[45%] w-11/12 p-3 bg-white rounded-[26px] drop-shadow-[0_0_35px_rgba(0,0,0,0.25)]">
                  <Carousel className="md:h-56 h-32">
                    <img className="w-full" src="/image/Dashboard/1.png" alt="" />
                    <img className="w-full" src="/image/Dashboard/2.png" alt="" />
                    <img className="w-full" src="/image/Dashboard/3.png" alt="" />
                  </Carousel>
                  <div className="p-3">
                    <strong>Website thời trang tích hợp thanh toán bằng tiền điện tử.</strong>
                    <div>
                      <p className=""><strong>Các chức năng: </strong><span>Auth, hiển thị sản phẩm được cập nhật từ hệ thống Admin, giỏ hàng, đặt hàng, thanh toán với tiền điện tử, theo dõi đơn hàng, ...</span></p>
                    </div>
                    <p className="truncate"><strong>Github Page: </strong><a className="text-blue-500" href="https://nguyentheduongyb.github.io/dashboard/" target="_blank">https://nguyentheduongyb.github.io/dashboard/</a></p>
                    <p className="truncate">
                      <strong className="">Source Code: </strong><a className="text-blue-500" href="https://github.com/nguyentheduongyb/dashboard" target="_blank">https://github.com/nguyentheduongyb/dashboard</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Interests */}
            <div className={`${tab == 3 ? "block" : "hidden"}`}>
              <strong className="text-2xl">Sở thích</strong>
              <div className="w-32 h-1 rounded bg-gradient-to-r from-purple-500 to-pink-500 mt-1"></div>

              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <FaHeadphones size="48" color="#06B6D4" />
                  <strong className="text-xl">Nghe nhạc</strong>
                </div>
                <div className="p-4 rounded-xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="md:w-56 md:h-32 w-full h-32 rounded-2xl bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://datacare.vn/wp-content/uploads/2020/11/Banner-Am-Nhac-%E2%80%93-LVHB0911202015.jpg")' }}></div>
                  <div className="flex-1">
                    <strong>Âm nhạc và nhạc Rap</strong>
                    <p className="mt-3">Cuộc sống thật tẻ nhạt nếu không có âm nhạc đối với mình là như vậy.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <BsCoin size="48" color="#EF8E19" />
                  <strong className="text-xl">Tìm hiểu và đầu tư tiền điện tử</strong>
                </div>
                <div className="p-4 rounded-xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="md:w-56 md:h-32 w-full h-32 rounded-2xl bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://img.freepik.com/premium-vector/crypto-currency-horizontal-banner-bitcoin-digital-web-money-technology_48369-13318.jpg?w=2000")' }}></div>
                  <div className="flex-1">
                    <strong>Tiền kỹ thuật số</strong>
                    <p className="mt-3">Mặc dù, mình đã từng đầu tư và mất rất nhiều trong thị trường tiền điện tử. Nhưng mình nghĩ đây sẽ là đồng tiền được sử dụng trong tương lai, vì nó ứng dụng công nghệ Blockchain. Blockchain là công nghệ chuỗi khối, nó rất khó để có thể hack. Hiện tại, phí giao dịch của tiền kỹ thuật số còn quá cao nên nó chưa được phổ biến.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <FcSportsMode size="48" color="#EF8E19" />
                  <strong className="text-xl">Thể dục thể thao</strong>
                </div>
                <div className="p-4 rounded-xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-6 md:gap-12">
                  <div className="md:w-56 md:h-32 w-full h-32 rounded-2xl bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/back_our/20190619/ourmid/pngtree-color-silhouette-national-fitness-propaganda-poster-background-material-image_137512.jpg")' }}></div>
                  <div className="flex-1">
                    <strong>(Thể thao không ngồi nhiều bị trĩ)</strong>
                    <p className="mt-3">
                      Các môn thể thao yêu thích như: cầu lông, cầu đá, thích đi bơi nhưng không biết bơi và hết.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <SiYourtraveldottv size="48" color="rgb(0,76,168)" />
                  <strong className="text-xl">Du lịch</strong>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="p-4 rounded-xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-56 md:h-32 w-full h-32 rounded-2xl bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("https://vcdn-dulich.vnecdn.net/2021/12/24/An-Giang-0-jpeg-1470-1640315739.jpg")' }}></div>
                    <div className="flex-1">
                      <strong>Leo đồi, lội suối, ra biển</strong>
                      <p className="mt-3">
                        Đi du lịch cung bạn bè, gia đình đi ngắm cảnh, biết thêm cảnh đẹp ở nhiều nơi.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="mt-8">
                <div className="flex items-center gap-4 mb-6">
                  <PiGameController size="48" color="rgb(0,76,168)" />
                  <strong className="text-xl">Chơi game</strong>
                </div>
                <div className="flex flex-col gap-8">
                  <div className="p-4 rounded-xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-56 md:h-32 w-full h-32 rounded-2xl bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/image/aog.jpg")' }}></div>
                    <div className="flex-1">
                      <strong>Liên quân mobile (AOG)</strong>
                      <p className="mt-3">
                        Liên quân mobile là tựa game mobile chiến thuật hay và rất được ưa chuộng. Game mang tính đồng đội rất cao với những lần gánh những người bạn thân đến gãy tay. Nhưng khi được đánh chung với các bạn thấy khá là tấu hề và hài hước còn kết quả thì hên xui. Nhưng mà thua nhiều thì lại quạo.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="md:w-56 md:h-32 w-full h-32 rounded-2xl bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url("/image/aoe.jpg")' }}></div>
                    <div className="flex-1">
                      <strong>Đế chế (AOE)</strong>
                      <p className="mt-3">
                        Đế chế là 1 tựa game được nổi từ rất lâu về trước chắc khoảng những năm 2000. Game này thì thường có nhiều người chơi ở lứa tuổi 8x 9x hơn là 2k. Mình 2002 nhưng cũng hứng thú với game vì sau 1 ngày đi làm về tối có game để chém bạn cùng phòng.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div >
    </div >
  );
};
export default HomePage;
HomePage.Layout = "Default";
// HomePage.Layout = "OtherLayout"; -> error Type '"OtherLayout"' is not assignable to type '"Main" | "Admin" | undefined'.