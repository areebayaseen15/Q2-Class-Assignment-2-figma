import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className="container w-[1322px] h-[91px] ml-[59px] ">
        <div className="navbar-style2 w-[1322px] h-[91px] flex flex-row">
          {/* brand name */}
        <div className='navbar brand w-[187px] h-[58px] top-[17px] ml-[136px]'>
            <div className='w-[152px] h-32px mt-[13px] hover:text-blue-400  font-[700] text-2xl tracking-[0.1px] leading-[32px]'>
              BrandName</div>
          </div>
{/* 
          navcontent */}
          <div className='CollapseNavbar w-[815px] h-[58px] top-[16px] left-[364px] font-[700] text-[14px] flex justify-between'>
            <div className=' navbar-nav  w-[275px] h-[24px] mt-[20px]  space-x-6  '>
               <Link href="#" className='hover:text-gray-300'>Home</Link>
               <Link href="#" className='hover:text-gray-300'>Product</Link>
               <Link href="#" className='hover:text-gray-300 '>Pricing</Link>
               <Link href="#" className='hover:text-gray-300'>Contact</Link>
             </div>
            <div className='w-[189px] height-[52px] mt-[3px] mr-[200px] space-x-7 '>
              <Link href="#" className='w-[41px] h-[52px] mt-[20px] hover:text-gray-300'>Login</Link>
              <button className='bg-[#23A6F0] hover:bg-sky-300 w-[110px] h-[52px] left-[25px]' >Join Us</button>
            </div>
          </div>
       
         
        </div>
      </div>
  )
}

export default Nav



