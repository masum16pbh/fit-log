"use client"
import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
export default function NavBar() {
    const pathName = usePathname()
    return (
        <>
            <nav className='container mx-auto flex justify-between my-2         '>
                <div className='flex items-center'><Image src={logo} alt='dumbel logo' ></Image>FITLOG</div>
                <div className='flex gap-4 '>
                    <Link href='/'
                    className={ pathName==='/'? "text-limon font-bold bg-[#1A2312] rounded-2xl px-3 ":"px-3 text-[#9CA3AF]"} 
                    >Workout</Link>
                    <Link href='/myPlan'
                    className={ pathName==='/myPlan'? "text-limon font-bold bg-[#1A2312] rounded-2xl px-3 ":"px-3 text-[#9CA3AF]"} 
                    >My plan</Link>
                </div>
                <div className='flex gap-3'>
                    <p>Plan</p>
                    <p>Save</p>
                </div>
            </nav>
        </>
    )
}