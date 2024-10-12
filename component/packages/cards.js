import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PiUsersThreeBold } from "react-icons/pi";
import { FaArrowRight } from "react-icons/fa6";
export default function Cards() {
  return (
   <>
   <section className="mt70 container">
      <h4 className="fs-33 mfs-24 fw7 tac">Umrah &Hajj Packages 2024-2025</h4>
      <p className="fs-16 dim-clr pdt24 tac">We provide you with a wide range of Umrah packages from all over India.</p>
   
   <div className="row mt-5">
    <div className="col-12 col-md-6 col-lg-4">
        <div className='package-card cursor'>
           <div className='pos-r'>
            
           <div className="overlay"></div>

            <Image className=" pos-r" style={{width:"100%" }} src="/assets/images/services-img/hajj-service.jpg" width={390} height={242} alt={`-Image`} loading="lazy" quality={100}/>

             <p className="image-title fs-16 fw7 ">Private</p>
             <div className="days">
               <h6 className="">Days</h6>
             </div>
           </div>

           <div className="pd10">
            <h6 className="fs-22 lnh41 fw5 mfs-19">Umrah Group Package At Cheapest Prices</h6>
            <div className="df gap8 mt24">
                <p className ="fs-16 fw5">Makkah : </p>
                <span className="fs-16 fw5 green-clr">Fajr Al Badea 5</span>
            </div>
            <div className="df gap8 mt10">
                <p className ="fs-16 fw5">Madhina : </p>
                <span className="fs-16 fw5 green-clr">Karam Al Madhina</span>
            </div>
            <div className="place-area mt32">
               <ul className="place-list text-animation">
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                <li className="df gap11">
                <Link href={''} className="fs-12 dim-clr fw4 ls05 txt-up df gap8"> <PiUsersThreeBold size={14} className="dim-clr"/> Umrah Visa </Link> <FaArrowRight size={14} className="dim-clr" />
                </li>
                </ul>  
            </div>
            <div className="Price-details mt32 df fac ">
                 <div className="">
                <p className="fs-12 fw4 text-capitalize dim-clr">Starting From</p>
                <h4 className="fs-22 fw7  mfs-19 green-clr pdt8">₹ 83,000 </h4>
                </div>
                <p className="fs-12 fw4 text-capitalize dim-clr pdt20">Per Person</p>
                <div className="pdl16 mt16">
                    <button className="fs-14 fw5 cw book-now-btn ">Book Now</button>
                </div>
            </div>
           </div>
         
        </div>
    </div>

   </div>
    
   </section>
   <style jsx>
    {`

      
    .package-card{
    border: 1px dashed rgba(208, 171, 23, .5);
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    padding: 10px;
    }
        /* Full rgba black background */
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
         background: rgba(16, 12, 8, 0.3);
      z-index: 1;
      border-radius: 20px;
    }
        .image-title {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    // background-color: rgba(0, 0, 0, 0.5);
    background-image: url('/assets/images/packages/scratch-1.svg');
    background-repeat: no-repeat;
    color: white;
    width: 100%;
    padding: 10px;
    z-index: 222;

    }
        .days{
    position: absolute;
    top: 85%;
    left: 50%;
    width: auto;
    transform: translateX(-50%);
    background-color: rgba(16, 12, 8, 0.6);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
    width: fit-content;
    }
    .book-now-btn{
    background: #d0ab17;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    
    }
    .place-area{
    position: relative;
    height: 18px;
    overflow: hidden;

    }
    .place-list{
    position: absolute;
    white-space: nowrap;
    text-overflow: ellipsis;
    transform: translateX(0);
    transition: 6s;
    display: flex;
    align-items: center;
    gap: 20px;
    scroll-behavior: smooth
    }
    ul{
    padding-left: 0px;
    }
    .place-list li{
    line-height: 1;
    position: relative;
    transition: 0.5s;
    }
.place-area:hover .text-animation {
    transform: translateX(calc(200px - 100%));
}

    
    `}
   </style>
   </>
  )
}
