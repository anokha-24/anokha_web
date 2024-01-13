import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { TbPointFilled } from "react-icons/tb";
import Image from 'next/image'
import Link from 'next/link';

const Footer = ({current_page}) => {
  return (
    <div className="relative h-1/2 footer-font">
      {/* <div className="absolute inset-0 bg-black opacity-100">
        <h1 className="text-4xl text-white text-center content-center">Trust me this is the footer</h1>
      </div> */}
      <div className="flex flex-wrap p-4 space-x-4">
        <div className='p-4'>
          <Image src="/images/footer_image.png" alt="footerImage" width={600} height={600}/>
        </div>
        <div className=' pl-4 pr-4 pb-4 block w-1/2'>
          <div className=''><h1 className='text-white text-5xl'>REACH OUT TO US!</h1><h6 className='text-gray-600'>Feel free to reachout to us if any queries</h6></div>
          <div className='mt-7'><Link href="mailto:anokhapr@cb.amrita.edu" className='text-white text-2xl flex flex-nowrap hover:space-x-4 transition-[margin] ease duration-200' ><p>anokhapr@cb.amrita.edu</p> <FaArrowRight className='align-middle mt-1.5 ml-2 text-xl'/></Link></div>
          <div className='mt-1'><Link href="mailto:anokhasupport@cb.amrita.edu" className='text-white text-2xl flex flex-nowrap hover:space-x-4'><p>anokhasupport@cb.amrita.edu</p> <FaArrowRight className='align-middle mt-1.5 ml-2 text-xl'/></Link></div>
          <div className='mt-5 flex flex-wrap justify-between p-2 gap-2'>
            <div className='mt-3'>
              <h2 className='text-white font-bold'>OUR ADDRESS</h2>
              <p className='text-gray-500 text-sm'>Amrita Vishwa Vidyapeetham</p>
              <p className='text-gray-500 text-sm'>Coimbatore Campus</p>
              <p className='text-gray-500 text-sm'>Amritanagar</p>
              <p className='text-gray-500 text-sm'>Coimbatore - 641 112</p>
              <p className='text-gray-500 text-sm'>Tamilnadu, India</p>
            </div>
            <div className='mt-3'>
              <h2 className='text-white font-bold'>FOLLOW US</h2>
              <div className='flex flex-wrap justify-between mt-1 w-28'>
                <Link href={"https://www.facebook.com"}><FaFacebookSquare className='text-gray-600 hover:text-white'/></Link>
                <Link href={"https://www.twitter.com"}><FaXTwitter className='text-gray-600 hover:text-white'/></Link>
                <Link href={"https://www.instagram.com"}><FaInstagram className='text-gray-600 hover:text-white'/></Link>
                <Link href={"https://www.linkedin.com"}><FaLinkedinIn className='text-gray-600 hover:text-white'/></Link>
              </div>
              <div className='block mt-5'>
                <div className='flex flex-nowrap'><FiArrowUpRight className='text-gray-500 text-xl mt-0.5'/><Link href={"https://www.amrita.edu"} className='text-gray-200 hover:text-white hover:font-bold'>AMRITA.EDU</Link></div>
                <div className='flex flex-nowrap'><FiArrowUpRight className='text-gray-500 text-xl mt-0.5'/><Link href={"https://www.google.com"} className='text-gray-200 hover:text-white hover:font-bold'>PLAYSTORE APP</Link></div>
              </div>
            </div>
            <div className='mt-3'>
              { current_page === 'home' ? 
                (<div className='text-white block'>
                  <div className='flex flex-wrap'><TbPointFilled className='-ml-4 align-middle mt-1'/><Link href="/home">HOME</Link></div>
                  <div className='text-gray-400 hover:text-white'><Link href="/team">TEAM</Link></div>
                  <div className='text-gray-400 hover:text-white'><Link href="/contact">CONTACT</Link></div>
                  <div className='text-gray-400 hover:text-white'><Link href="/privacypolicy">PRIVACY POLICY</Link></div>
                </div>) : 
                current_page === "team" ? 
                  (<div className='text-white block'>
                  <div className='text-gray-400 hover:text-white'><Link href="/home">HOME</Link></div>
                  <div className='flex flex-wrap'><TbPointFilled className='-ml-4 align-middle mt-1'/><Link href="/team">TEAM</Link></div>
                  <div className='text-gray-400 hover:text-white'><Link href="/contact">CONTACT</Link></div>
                  <div className='text-gray-400 hover:text-white'><Link href="/privacypolicy">PRIVACY POLICY</Link></div>
                </div>) :
                current_page === "contact" ? 
                (<div className='text-white block'>
                 <div className='text-gray-400 hover:text-white'><Link href="/home">HOME</Link></div>
                 <div className='text-gray-400 hover:text-white'><Link href="/team">TEAM</Link></div>
                 <div className='flex flex-wrap'><TbPointFilled className='-ml-4 align-middle mt-1'/><Link href="/contact">CONTACT</Link></div>
                 <div className='text-gray-400 hover:text-white'><Link href="/privacypolicy">PRIVACY POLICY</Link></div>
                </div>) :
                current_page === "privacypolicy" ? 
                (<div className='text-white block'>
                  <div className='text-gray-400 hover:text-white'><Link href="/home">HOME</Link></div>
                  <div className='text-gray-400 hover:text-white'><Link href="/team">TEAM</Link></div>
                  <div className='text-gray-400 hover:text-white'><Link href="/contact">CONTACT</Link></div>
                  <div className='flex flex-wrap'><TbPointFilled className='-ml-4 align-middle mt-1'/><Link href="/privacypolicy">PRIVACY POLICY</Link></div>
                </div>) :
                (<div className='text-white block'>
                <div className='text-gray-400 hover:text-white'><Link href="/home">HOME</Link></div>
                <div className='text-gray-400 hover:text-white'><Link href="/team">TEAM</Link></div>
                <div className='text-gray-400 hover:text-white'><Link href="/contact">CONTACT</Link></div>
                <div className='text-gray-400 hover:text-white'><Link href="/privacypolicy">PRIVACY POLICY</Link></div>
              </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;