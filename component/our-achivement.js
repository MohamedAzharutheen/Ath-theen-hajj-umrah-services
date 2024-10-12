import Image from 'next/image';
import React from 'react'
export default function OurAchivement() {

    const AchiveData = [
        {
            icon:"",
            count:"4000+",
            title:"Successfull Service"
        },
        {
            icon:"",
            count:"750+",
            title:"Active Customer"
        },
        {
            icon:"",
            count:"4000+",
            title:"Alumini Customer"
        },
    ]


  return (
    <>
    <section className='container'>
  <div className='mt70 mmt25'>
    <h4 className={`fs-33 mfs-19 mtac fwb`}>Our Great  <span className={`logo-clr fwb`}> Achievement </span> </h4>
        <div className='mt32 mmt2'>
            <div className='df gap20 mfw'>

                {AchiveData.map((items,index)=>{
                    return(

             <div className='col-12  col-lg-4 box cursor mmt24'>
                 <div className='df fac fjc pdtb30 gap16'>
                   <Image src={items.icon} width={31} height={31} alt={`-Icon`} loading='lazy'/>
                   <div className=''>
                    <p className={`fs-24 mfs-19 fw6`}>{items.count}</p>
                    <p className={`fs-19 dim-clr `}>{items.title}</p>
                   </div>
                  </div>
                  </div>
                  )
                })}
             </div>
        </div>
        </div>
    </section>
    <style jsx>
        {`
        .box{
        box-shadow: 0px 4px 14px 0px #00000038;
        // width: 400px;
        border-radius: 8px;
        transition: all 0.4s linear;
        }
        .box:hover{
        transform: translateY(-10px);
        }
        `}
    </style>
    </>
  )
}
