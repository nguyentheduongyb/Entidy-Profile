import React from 'react'
import { BsDiscord, BsGithub, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
        return (
                <footer className="w-full bg-white mt-5 border-t border-t-[#A3B3BC] text-[#A3B3BC]">
                        <div className="container md:flex justify-between py-6">
                                <div className="flex gap-[20px] md:justify-left justify-center md:mb-0 mb-3">
                                        <a href="https://discord.gg/CWBV5Utg" target="_blank"><BsDiscord className="w-[20px] h-[20px]" /></a>
                                        <a href="https://github.com/nguyentheduongyb/" target="_blank"><BsGithub className="w-[20px] h-[20px]" /></a>
                                        <a href="https://www.facebook.com/ntd.7302/" target="_blank"><BsFacebook className="w-[20px] h-[20px]" /></a>
                                        <a href="https://www.instagram.com/ntd.7302/"><BsInstagram className="w-[20px] h-[20px]" /></a>
                                        <a href="https://twitter.com/ntduong2002"><BsTwitter className="w-[20px] h-[20px]" /></a>
                                </div>
                                <p className="text-center md:text-left">Copyright © 2022 Entidy | All Rights Reserved</p>
                        </div>

                </footer>
        )
}

export default Footer
