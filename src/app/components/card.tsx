import React from 'react'

const Card = () => {
  return (
    <div className="row w-[900px] h-[2026px] gap-[30px] mt-2 flex justify-between flex-nowrap"> 

        {/* card1 */}
        <div className="card w-[280px] h-[272px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">

        <div className="w-20 h-20 rounded-[10px] bg-[#FFDCD1] mx-auto mb-4 ml-[5px]"></div>
        <h2 className="font-bold mt-[20px] text-black">training Courses</h2>
                <div className="h-[2px] bg-[#E74040] w-[60px] my-[10px]"></div>
                <p className="w-[222px] h-[60px] text-[#737373] font-[400] text-[14px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
      

      
   {/* card2 */}
   <div className="card w-[280px] h-[272px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-white rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">
  <div className="w-20 h-20 rounded-[10px] bg-[#B9EAA8] mx-auto mb-4 ml-[5px]"></div>
  <h2 className="font-bold mt-[20px] text-black">2,769 online courses</h2>
  <div className="h-[2px] bg-[#E74040] w-[60px] my-[10px]"></div>
  <p className="w-[222px] h-[60px] text-[#737373] font-[400] text-[14px]">
    The gradual accumulation of information about atomic and small-scale behaviour...
  </p>
</div>

      
 {/* card3 */}
 <div className="card w-[280px] h-[272px] pt-[35px] pr-[40px] pb-[35px] pl-[40px] gap-[20px] bg-[#23A6F0] rounded-lg shadow-md hover:shadow-lg transform transition duration-300 hover:scale-105">

<div className="w-20 h-20 rounded-[10px] bg-white mx-auto mb-4 ml-[5px]"></div>
<h2 className="font-bold mt-[20px] text-white">training courses</h2>
        <div className="h-[2px] bg-white w-[60px] my-[10px]"></div>
        <p className="w-[222px] h-[60px] text-white font-[400] text-[14px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
</div>
      
      </div>
  )
}

export default Card
