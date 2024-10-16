import React from 'react'
import { SiRailway } from "react-icons/si";
import { MdFlightTakeoff } from "react-icons/md";
import { FaBusAlt, FaCar } from "react-icons/fa";
export default function Transportation() {

   const transport =[
    {
        icon:<SiRailway  size={50} />,
        heading:"Haramain High-Speed Railway"
    },
    {
        icon: <MdFlightTakeoff size={50} />,
        heading:"Haramain High-Speed Railway"
    },
    {
        icon:<FaBusAlt size={50} />,
        heading:"Haramain High-Speed Railway"
    }
    ,
    {
        icon:<FaCar size={50}/>,
        heading:"Haramain High-Speed Railway"
    }
    
   ] 

  return (
    <>
    <section className='container-fluid'>
        <div className='mt-2 '>
           {['The distance from Makkah to Madinah is approximately 450 km, a journey that typically takes up to 9 hours by bus, the default mode of transportation in most packages. These buses are generally equipped with modern features, prioritizing the comfort and convenience of pilgrims throughout the long trip.','Moreover, service providers may opt for alternative means of transportation between cities, including domestic flights or Haramain High Speed Railway. These upgraded alternatives not only ensure a comfortable journey but also adhere to a precise schedule, enhancing the overall travel experience for pilgrims moving between Makkah and Madinah.'].map((items,index)=>(
             
        <p className='fs18 lnh33 ls05 mfs-14 mlnh27 drk-clr fw5 pdt16'>{items}</p>

           ))}
        </div>
        <div className='mt20 df fjse fw '>
            {transport.map((items,index)=>{
                return(
         <div className='df fdc fac mt-4'> 

        <span className='drk-clr'> {items.icon} </span>  
        <p className='fs-16 mfs-16 lgh-bri fwb pt-4'>{items.heading}</p>
        </div>
        )
    })}
        </div>
    </section>
    </>
  )
}
