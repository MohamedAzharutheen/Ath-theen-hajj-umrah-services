import Image from 'next/image'
import React from 'react'

export default function MinaCamp() {

    const MinaData =[
        {
            heading:"Majar Al-Kabsh Camp",
            cnt:"This camp is characterized by its close proximity to the Jamarat Bridge, positioned just 300 to 700 meters away. This advantageous location facilitates the ritual of Pelting Jamarat, allowing pilgrims to perform the ritual with ease and convenience. With a capacity to accommodate around 5,000 pilgrims, this camp promises the highest level of service, ensuring a comfortable and meaningful stay in Mina."
        },
        {
            heading:"Al-Muaisim Camp",
            cnt:"This camp, located approximately 4 km from the Jamarat Bridge, offers a distinct atmosphere with all the necessary comforts to ensure pilgrims have a convenient stay. This camp has the capacity to accommodate up to 30,000 pilgrims, providing a well-equipped environment for a fulfilling Hajj experience."
        }
    ]

  return (
    <>
    <section className='container-fluid'>

    <p className='fs18 mfs16 lnh33 ls05 drk-clr  fw5 pdt40'>To enable pilgrims to compare different accommodations and consider their proximity to Al-Masjid Al-Haram and Sacred Mashair sites, Makkah has been subdivided into distinct zones, each with unique characteristics to cater to different pilgrims’ preferences.</p>
    <div className='row mt-2 mt-lg-5 align-items-center '>
        <div className='col-12 col-md-6 col-lg-6 '>
            {MinaData.map((items,index)=>{
                return(
            <div className='mt24' key={index}>
            <h5 className='fs-22 mfs-19 drk-vclr fw5'>{items.heading}</h5>
            <p className='fs16 lnh27 ls05 mfs14 drk-clr fw5 pdt16 mpdt10'>{items.cnt}</p>
        </div>
        )
    })}
        </div>
        <div className='col-12 col-md-6 col-lg-6 mt-5 mt-lg-0'>
         <Image layout='responsive' className='br20' src={"/assets/images/tabs-places/mina-camp.png"} width={500} height={500} alt='Mina-camp' loading='lazy' quality={100}/>
        </div>
    </div>
    </section>
    </>
  )
}
