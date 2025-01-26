"use client"
import React, { useRef, useEffect } from 'react'
import { Button } from '../ui/button';
import { Menu } from 'lucide-react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu';
import Link from 'next/link';
export default function MobileMenu() {
    const menu = useRef<HTMLUListElement | null>(null);
    const menuButton = useRef<HTMLButtonElement | null>(null);
    useEffect(() => {
        const toggleMenu = (): void => {
            if (menu.current?.classList.contains("max-h-0")) {
                menu.current.classList.remove("max-h-0");
                menu.current.classList.add("max-h-[500px]")
            } else {
                menu.current?.classList.remove("max-h-[500px]");
                menu.current?.classList.add("max-h-0");
            }
        }
        if (menuButton.current) {
            menuButton.current.addEventListener("click", toggleMenu);
        }

        return () => {
            if (menuButton.current) {
                menuButton.current.removeEventListener("click", toggleMenu);
            }
        }
    }, [])

    return (
        <nav>
            <Button ref={menuButton} className='md:hidden bg-transparent border-none text-black shadow-none hover:bg-transparent md:hover:text-gray-700 inline-block hover:border'>
                <Menu strokeWidth={2} />
            </Button>
            <ul ref={menu} className='flex font-poppins font-medium md:bg-transparent bg-black  md:flex-row md:items-center md:h-full flex-col md:static absolute md:w-auto w-full md:max-h-[500px] max-h-0 md:shadow-none shadow-lg overflow-hidden  bg-white/20 backdrop-blur-sm transition-all duration-150 md:mt-0 mt-3  gap-4 left-0 z-10'>
                <li className='md:p-0 px-2'>
                    <Link href={"/"} className='bg-transparent text-black shadow-none md:w-auto w-full md:pt-0 pt-4  text-xs text-left inline-block'>About Us</Link>
                </li>
                <li className='md:p-0 pb-4'>
                    <Link href={"/"} className='text-black md:p-0 p-2 bg-transparent  shadow-none  md:w-auto rounded-none  w-full text-left  text-xs  inline-block  '>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
