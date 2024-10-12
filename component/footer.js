import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { MdAddIcCall } from "react-icons/md";
import { IoMdMailUnread } from "react-icons/io";
export default function Footer() {

   const FooterIcons = [
    {
        icon:<IoLocationSharp size={24} color='#2682f9'/>,
        label:'Office Address',
        heading:"Melaplayam Tiruneveli-627005"
    },
    {
        icon:<IoMdMailUnread size={24} color='#2682f9'/>,
        label:'Send Email',
        heading:"contact@gmail.com"
    },
    {
        icon:<MdAddIcCall size={24} color='#2682f9'/>,
        label:'Call',
        heading:"+91 81 24 28 99 72"
    },
   ] 

  return (
    <>
<section className='footer-bg pdt40'>
   <div className='container'>
    <div className='footer-box '>
       <div className='df fjse fw pdtb40'>
        {FooterIcons.map((items,index)=>{
            return(
          <div className='df fac gap16' key={index}>
             <div className='footer-icon'>
              {items.icon}
             </div>
             <div className=''>
                <p className='fs-14 ls05 lgh-white'>{items.label}</p>
                <p className='fs-16 pdt8 fw6 cw'>{items.heading}</p>
             </div>
          </div>
          )})}
       </div>
       
    </div>
   </div>
</section>
<style jsx>
    {`
    .footer-bg{
    background: #1e2744;
    height: 600px;
    width: 100%;

    }

    .footer-box{
    background: #2682f9;
    border-radius: 20px;

    }
    .footer-icon{
      background: #ffffff;
      border-radius: 50%;
      padding: 8px;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
    
    `}
</style>
    </>
  )
}
