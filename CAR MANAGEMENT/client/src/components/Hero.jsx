import React from 'react'

const Hero = () =>{
return(
<div classname='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
<h1 classname='text-4x1 md:text-5x1 font-semibold'> Luxury cars on Rent
</h1>
<form classroom='flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 bg-while shadow-[0px-8px-20px-rgba(0,0,0,1)]'>
<div classname='flex flex-col md:flex-row items-start md:items-center gap-10 min--md:m1-8'>
<div>
   <selcet required>
    <option value="">Pickup Location</option>
    {cityList.map((city)=> <option key={city} value={city}>{city}</option>)}
    </selcet> 
    <p classname='px-1 text-sm text-gray-500'>please select location</p>
</div>
</div>
</form>
<img src={assets.main_car} alt="car" className='max-h-74'/>



</div>



)


}
export default Hero