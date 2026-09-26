import Link from 'next/link'
import logo from '../../public/logo.png'
import Image from 'next/image'
export default function Footer(){
    return(
        <>
        <div className='container mx-auto flex justify-between my-2         '>
            <div className=''><Image src={logo} alt='dumbel logo' ></Image> FITLOG</div>
            
        </div>
        </>
    )
}