import Image from 'next/image'
import TextLogo from '@/public/images/textlogo.png';
import Logo from '@/public/images/logo.png';
import React from 'react'
import Link from 'next/link';
import { FaFacebookSquare,FaInstagram} from "react-icons/fa";


const Footer = () => {
  return (
      <footer className='bg-dark font-poppins text-white py-8 lg:px-28 px-12 border-y-6 border-red'>
    

      <div className='flex items-center '>
        <Image src={Logo} className=' w-12' alt='logo' />
        <Image src={TextLogo} className='w-24 mx-8 ' alt='logo'/>
      </div>

      <div className='grid md:grid-cols-4  grid-cols-2 gap-4 pb-14'>
        
        <section>
          <p className='font-bold py-4'>Quick Links</p>
          <ul className='text-sm'>
            <li className='py-1'> <Link href="/" className='hover-effect-underline'>Home </Link></li>
            <li className='py-1'> <Link href="/about" className='hover-effect-underline'>About </Link></li>

             
            
            <li className='py-1'><Link href="/menu" className='hover-effect-underline'>Food & Drinks</Link></li>
            <li className='py-1'><Link href="/gallery" className='hover-effect-underline'>Gallery</Link></li>
          </ul>
        </section>


        <section>
          <p className='font-bold py-4 text-nowrap'>Contact Details</p>
          <ul className='text-sm'>
           <li className='py-1'><Link  className='hover-effect-underline' href="tel:982-8711989">+977 9828711989</Link></li>
            <li className='py-1'> <Link href="mailto:info@newasuli.com" className='hover-effect-underline' target='_blank'>info@newasuli.com</Link></li>
            <li className='py-1'>Godawari Road, Lalitpur, Nepal</li>
          </ul>
        </section>


         <section>
          <p className='font-bold py-4'>Hours</p>
          <ul className='text-sm'>
            <li className='py-1'>Sun - Fri : 7am to 10pm</li>
            <li className='py-1'>Fri - Sat : 2pm to 8pm</li>
          </ul>
        </section>


              <section>
          <p className='font-bold py-4'>Follow Us</p>
          <ul className='text-sm flex '>
            <li ><Link href="https://www.facebook.com/harisiddhinewasuli" target='_blank'><FaFacebookSquare size={32}  /></Link></li>
            <li className='ml-3'><Link href="https://www.instagram.com/harisiddhi.newa.suli/" target='_blank'><FaInstagram size={32} /></Link></li>
          </ul>
        </section>

        
        
      </div>
      

      <div className='border-[0.5px] '></div>
      <div className='flex sm:justify-between justify-center flex-wrap md:gap-10 '>
        <p className='pt-4 mr-8 text-xs'>&copy;2026 HARISIDDHI NEWA SULI. ALL RIGHTS RESERVED</p>
        <p className='pt-4 text-xs'>Developed by Sapat, Suraj, Sagar.</p>
      </div>
     
       
    </footer>
  )
}

export default Footer
