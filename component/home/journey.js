import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Journey() {
  return (
    <>
    <section className='journey-bg mt70 pdtb50'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6'>
                <Image className='mdn' src={"/assets/images/journey.png"} width={500} height={500} alt='Journey-Img' loading='lazy'/>
                <Image layout='responsive' className='dn mdb' src={"/assets/images/journey.png"} width={500} height={500} alt='Journey-Img' loading='lazy'/>  
            </div>
            <div className='col-12 col-lg-6 df fdc fjc'>
                <h4 className={`fs33 lnh50 mfs24 mlnh41 cw`}> <span className="logo-clr fwb"> Ath-Theen  </span> Hajj & Umrah- Your Gateway To The Journey Of Alife Time</h4>
                <p className='fs19 lnh33 mfs-14 mlnh27 mt-1 drk-clr'>Ath-Theen Hajj is here to guide you on your sacred pilgrimage with ease and care. We provide comprehensive support from planning to completion, allowing you to focus on your spiritual experience while we handle the logistics of your Hajj or Umrah journey.</p>
                <p className='fs-19 mfs-14 mlnh27 mt-3 drk-clr'>We offer customized packages to suit every pilgrim’s needs, whether budget-friendly or luxury. Our services cover visa processing, accommodation, transportation, and guided tours, ensuring your journey is smooth, organized, and spiritually fulfilling.</p>
               <div className='mt-4 df gap20'>
             <Link href={"tel: 8124289972"}>  <button className='enquiry-btn fs-19 mfs-16 fw5'>Our Packages</button> </Link>
               <Link href={"/"}> <button className='enquiry-btn fs-19 mfs-16 drk-clr fw5'>Get Instant Call</button> </Link>
               </div>
            </div>
          </div>
        </div>
    </section>
    <style jsx>
        {`
        .journey-bg{
          background: #3A5A23;
          width: 100%;
        }
        .enquiry-btn{
        background: #d0ab17f5;
  border: 2px solid #ffffff;
         border-radius: 10px;
         padding: 5px 15px;
         transition: all 0.3s linear;
        }
         .enquiry-btn:hover{
         color: #e9c751;
         background: linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.3) 100%);
         }
        `}
    </style>
    </>
  )
}
