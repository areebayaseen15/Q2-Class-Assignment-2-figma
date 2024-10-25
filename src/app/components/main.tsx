
import React from 'react'

const Main = () => {
  return (
        <div className="main-content w-[601px] h-[496px] pt-[40px] pb-[40px] ml-[150px] flex- flex-col text-center">
        <h3 className="w-[77px] h-[24px]  text-[#23A6F0] text-[16px] font-bold ml-[250px] text-center]">
           Welcome
        </h3>
        <h1 className="w-[542px] h-[160px] ml-6 text-[58px] font-bold text-[#ffffff] leading-[80px] mt-4 ">Selling on the <br />internet like a Pro</h1>
        <p className="text-[#ffffff] mt-4 max-w-[542px] mx-auto  leading-[30px] ">
            We know how large objects will act, but things on a <br/> small scale just do not act that way.
          </p>

          <div className="w-[365px] h-[52px] flex space-x-4 mt-[40px] ml-[100px] justify-center items-center">
            <button className="bg-[#35A6F0] hover:bg-sky-400 px-6 py-2 rounded">Get Quote Now</button>
            <button className="border border-[#35A6F0] text-[#35A6F0] px-6 py-2 rounded ">Learn More</button>
          </div>
        </div>
     
  )
}

export default Main

 