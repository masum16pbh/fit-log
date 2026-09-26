import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image'
export default function Footer(){
    return(
        <>
        <div className='container mx-auto flex justify-between my-2         '>
            <div className='flex gap-2 items-center'><Image src={logo} alt='dumbel logo' ></Image> FITLOG</div>
            <div><p>© 2026 FitLog — Workout Library. Train hard, log honest.</p></div>
        </div>
        </>
    )
}