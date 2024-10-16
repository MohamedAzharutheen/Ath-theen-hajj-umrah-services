import Image from 'next/image'
import React from 'react'

export default function ExperincedGuidence() {

  const GuideBox = [
    {
        icon:'/assets/images/banner/flight-icon.png',
        heading:'Quality Guidancefor Journey',
        cnt:'At Ath-Theen, we ensure a seamless pilgrimage experience with personalized guidance and dedicated support, prioritizing your spiritual journey. Trust us to deliver the highest standards of care and convenience throughout your sacred travel.'
    },
    {
        icon:'/assets/images/banner/flight-icon.png',
        heading:'Experienced Guidance',
        cnt:'With Ath-Theen, embark on your Umrah and Hajj journey with experienced guides who cater to the spiritual and practical needs of pilgrims. Our seasoned professionals provide personalized support, ensuring a fulfilling'
    },
  ]  

  return (
    <>
    <section className="bg-card">
              {/* Cards Div */}
              <div className="container">

              <h4 className="fs-33 mfs-24 fw7 tac pdb50 mpdb0">Some heading Are there</h4>

          <div className='mt-5 row'>

            {GuideBox.map((items,index)=>{
                return(
                    <div className="col-12 col-lg-6 mpdt100">  
        <div className='card pos-r  pdt80 pdb30' key={index}>
          <div className='img-pos'>
          <Image className='' src={items.icon} width="100" height="100" alt='Flight-Icon' loading='lazy'/>
          </div>
           <h6 className={`fs-24 mfs-19 tac`} > <span className="logo-clr">{items.heading.split(' ')[0]} </span>
                    {items.heading.split(' ').slice(1).join(' ')}
                  </h6>
           <p className={`fs14 lnh27 ls04 mfs-14 pdt16 mpdt10 taj`}>{items.cnt}</p>
        </div>
 
        </div>
                )
            })}
       </div>
       </div>
    </section>
    <style jsx>
        {`
        
    .bg-card{
          background-image: url('/assets/images/banner/worldmap.jpg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          padding: 40px;
    }
      .card{
              background-color: #FFFFFF;
              border-radius: 10px;
              // box-shadow: 0px 4px 16px 0px #00000040;
              height: 100%;
              padding-left: 20px;
              padding-right: 20px;
              }
 
              .img-pos{
              position: absolute;
              top: 2%;
              left: 50%;
                  transform: translate(-50%, -50%);
              border-radius: 50%;
              padding: 10px;
              border: 1px dashed #006c35;
              background: #fff;
              }
              @media only screen and (max-width:550px){
                                          .card{
              background-color: #FFFFFF;
              border-radius: 10px;
              box-shadow: 0px 4px 16px 0px #00000040;
              width: auto;
              height: auto;
              }        
    .bg-card{
          background-image: url('/assets/images/banner/worldmap.jpg');
          background-repeat: no-repeat;
          width: 100%;
          height: 100%;
          padding: 40px 0px;

    }

              }

        `}
    </style>
    </>
  )
}
