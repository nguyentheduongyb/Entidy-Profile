import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { AiOutlineGlobal } from "react-icons/ai"
import { MdNotifications, MdLanguage } from "react-icons/md"
import { MdNightlight, MdLightMode } from "react-icons/md"
import Search from '~/components/Search'
import Language from "~/components/popper/Language"
import { Button, Dropdown, Navbar, Avatar } from 'flowbite-react'


const MENU_ITEMS = [
        {
                icon: <MdLanguage />,
                title: 'Tiếng Việt',
                children: {
                        title: 'Language',
                        data: [
                                {
                                        type: 'language',
                                        code: 'en',
                                        title: 'English',
                                },
                                {
                                        type: 'language',
                                        code: 'vi',
                                        title: 'Tiếng Việt',
                                },
                        ],
                },

        },
];

const Logo = () => {
        return (
                <img className="h-[32px] " src="/ntd.svg" alt="" />

        )
}
const Header = () => {
        // Handle logic
        const handleMenuChange = (menuItem: any) => {
                switch (menuItem.type) {
                        case 'language':
                                // Handle change language
                                break;
                        default:
                }
        };
        return (
                <header className="border-b w-full sticky top-0 z-[9999999999999999999999]">
                        <Navbar
                                className="container items-center sm:px-0 mx-0 "
                                rounded
                        >
                                <div className="flex md:hidden md:order-2">
                                        <Navbar.Toggle />
                                </div>
                                <Link href="/" className="flex flex-1 md:flex-none ml-4">
                                        <Logo />
                                </Link>
                                <div className="flex md:order-2">
                                        <div>
                                                <MdLightMode className="order-last" />
                                                {/* <MdNightlight /> */}

                                        </div>
                                </div>
                                <Navbar.Collapse>
                                        <Navbar.Link
                                                active
                                                href="#"
                                        >
                                                <p>
                                                        Home
                                                </p>
                                        </Navbar.Link>
                                        <Navbar.Link href="#">
                                                About
                                        </Navbar.Link>
                                        <Navbar.Link href="#">
                                                Services
                                        </Navbar.Link>
                                        <Navbar.Link href="#">
                                                Pricing
                                        </Navbar.Link>
                                        <Navbar.Link href="#">
                                                Contact
                                        </Navbar.Link>
                                </Navbar.Collapse>
                        </Navbar>
                </header>
        )
}

export default Header
