import Image from 'next/image'
import TextLogo from '@/public/images/text-logo.png';
import Logo from '@/public/images/logo.png';
import React from 'react'
import Link from 'next/link';
import { FaFacebookSquare,FaInstagram} from "react-icons/fa";


const Footer = () => {
  return (
      <footer className='bg-dark font-poppins text-white py-2 lg:px-28 px-12 border-y-4 border-red'>
      {/* <Image src={TextLogo} className='bg-white h-12 w-12' alt='logo'/> */}

      <div className='flex items-center'>
        <Image src={Logo} className=' w-12' alt='logo' />
        <h1 className='font-medium italic px-4'>Harrisidhi newa suli</h1>
      </div>

      <div className='grid md:grid-cols-4  grid-cols-2 gap-4 pb-14'>
        
        <section>
          <p className='font-bold py-4'>Quick Links</p>
          <ul className='text-sm'>
            <li className='py-1'> <Link href="/">Home </Link></li>
            <li className='py-1'> <Link href="/about">About </Link></li>

             
            
            <li className='py-1'><Link href="/menu">Food & Drinks</Link></li>
            <li className='py-1'><Link href="/gallery">Gallery</Link></li>
          </ul>
        </section>


        <section>
          <p className='font-bold py-4'>Contact Details</p>
          <ul className='text-sm'>
            <li className='py-1'>+982-8711989</li>
            <li className='py-1'>+9779808100000</li>        
            <li className='py-1'> <Link href="mailto:info@newasuli.com" target='_blank'>info@newasuli.com</Link></li>
            <li className='py-1'>Godawari Road, Lalitpur, Nepal</li>
          </ul>
        </section>


         <section>
          <p className='font-bold py-4'>Hours</p>
          <ul className='text-sm'>
            <li className='py-1'>sun - fri : 7am to 10pm</li>
            <li className='py-1'>fri - sat : 2pm to 8pm</li>
          </ul>
        </section>


              <section>
          <p className='font-bold py-4'>Follow Us</p>
          <ul className='text-sm flex'>
            <li className='py-1 px-1 text-2xl'><Link href="https://www.facebook.com/harisiddhinewasuli" target='_blank'><FaFacebookSquare /></Link></li>
            <li className='py-1 px-1 text-2xl'><Link href="https://www.instagram.com/harisiddhi.newa.suli/" target='_blank'><FaInstagram/></Link></li>
          </ul>
        </section>

        
        
      </div>
      

      <div className='border-[0.5px] '></div>
      <p className='py-4 text-xs'>&copy;2025 HARISIDDHI NEWA SULI. ALL RIGHTS RESERVED</p>
       
    </footer>
  )
}

export default Footer
