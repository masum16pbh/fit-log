import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image'
export default function NavBar (){
    return(
        <>
        <nav className='container mx-auto flex justify-between my-2         '>
            <div className=''><Image src={logo} alt='dumbel logo' ></Image></div>
            <div className='flex gap-2'>
                <Link href=''>Workout</Link>
                <Link href=''>My plan</Link>
            </div>
            <div className='flex gap-3'>
                <p>Plan</p>
                <p>Save</p>
            </div>
        </nav>
        </>
    )
}