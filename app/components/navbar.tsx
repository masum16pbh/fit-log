"use client"
import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { usePlan } from '@/contexts/todayContext'
export default function NavBar() {
    const pathName = usePathname()
    const {todayPlan,savePlan}= usePlan()
    return (
        <>
            <nav className='container mx-auto flex justify-between my-2         '>
                <div className='flex items-center'><Image src={logo} alt='dumbel logo' ></Image>FITLOG</div>
                <div className='flex gap-4 '>
                    <Link href='/'
                    className={ pathName==='/'? "text-limon font-bold bg-[#1A2312] rounded-2xl px-3 py-0.5 ":"px-3 py-0.5 text-[#9CA3AF]"} 
                    >Workout</Link>
                    <Link href='/myPlan'
                    className={ pathName==='/myPlan'? "text-limon font-bold bg-[#1A2312] rounded-2xl px-3 ":"px-3 text-[#9CA3AF]"} 
                    >My plan</Link>
                </div>
                <div className='flex gap-3'>
                    <Link href='/myPlan' className='flex items-center gap-1'><p>Plan </p> <span className='inline-flex w-8 h-8 items-center justify-center rounded-full bg-limon text-black font-bold'>{todayPlan.length}</span></Link>
                    <Link href='/myPlan' className='flex items-center gap-1'><p>Plan </p> <span className='inline-flex w-8 h-8 items-center justify-center rounded-full border border-slate-600'>{todayPlan.length}</span></Link>
                    
                </div>
            </nav>
        </>
    )
}