import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
export default function Banner() {
  return (
    <>
    <section className='bg-img pdb50'>
     <div className='container'>
   <div className='df fjsa fac  pdt40 mfdc '>
    <div className='w50p mw100p mb40'>
      <h4 className={`fs-45 lnh70 mfs-24  fwb`}>Begin Your  <br/><span className='ylw-clr fwb'>  Spiritual Journey  </span><br/>with Ath-Theen</h4>
      <p className={`fs19 mfs-16 mt32`}>Each step toward the sacred cities of Makkah and Madinah is a profound commitment. Ath-Theen Hajj and Umrah Services guide you through every phase, ensuring a rewarding, well-prepared pilgrimage experience that resonates deeply within.</p>
      <div className="mt50">
            <Link href={`/contact`}>  <button className={` btn-box cursor fs-16 cw`}>Reach Out to Us</button> </Link>
            </div>



    </div>
    <div className='pos-r'>
             <Image className='mdn' src={"/assets/images/banner/hajj.png"} width={480} height={574}  alt='Lady-img' quality={100} loading='lazy'
               style={{ width: '500', height: 'auto' }}/>
             <Image className='dn mdb' src={"/assets/images/banner/hajj.png"} width={290} height={374}  alt='Lady-img' quality={100} loading='lazy'/>

  {/* Animated Active Box - Left */}
  <motion.div
                className="active-box-left pd10"
                animate={{ y: [0, -40, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 10,
                  ease: 'easeInOut',
                }}
              >
                <div className='df fac gap10'>
                    <Image src={"/assets/images/banner/kaaba.svg"} width={30} height={30} alt='User-Icon' loading='lazy'/>
                <p className={`fs-18 mfs-16 fw6`}>2000+</p>
                </div>
            <p className={`fs-12 drk-dim tac pdt6`}>Hajj Service</p>
            </motion.div>

         {/* Animated Active Box - Left */}
  <motion.div
                className=" active-box-right pd10"
                animate={{ y: [0, -40, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'mirror',
                  duration: 10,
                  ease: 'easeInOut',
                  delay: 4
                }}
              >
            <div className='df fac gap10'>
                <Image src={"/assets/images/banner/umrah.svg"} width={30} height={30} alt='User-Icon' loading='lazy'/>
              <p className={`fs-18  mfs-16 fw6`}>3500+</p>
            </div>
            <p className={`fs-12 drk-dim tac pdt6 `}>Umrah Service</p>
        </motion.div>
        </div>
 
   </div>

   </div>
    </section>

    {/* <section className='container'>
        <div className=''>
            <Image src={"/master-training/image.png"} width={400} height={400} alt='Imabge' />
         </div>
    </section> */}
    <style jsx>
        {`
                .bg-img{
            // background-image: url('/assets/images/banner/mainsec-bg.webp');
            // background: linear-gradient(90deg, #0cc0df, #ffdef9);
        //  background: linear-gradient(90deg, #e9c751 0%, #ffffff 100%);
        // background: linear-gradient(90deg, #004D00 0%, #87CEEB 100%);

            width:100%;
            height: auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-position: cover;
            background-size: 100% 100%;
            
        }
         .btn-box { 
              padding: 10px;
              border-radius: 10px;
              background-color:#FFA900;
              // background-color:#EF90EB;
              border: none;
              transition: all 0.4s ease-in-out;
              width: 400px;
               



           
              @media only screen and (max-width: 1250px){
              .tfdc{
              display: flex;
              flex-direction: column;
              align-items: center;
              }
                         .card{
              background-color: #FFFFFF;
              border-radius: 10px;
              box-shadow: 0px 4px 16px 0px #00000040;
              width: 500px;
              }
              }
                 @media only screen and (max-width: 500px){
                       .btn-box { 
              padding: 10px;
              border-radius: 10px;
              background-color:#FFA900;
              border: none;
              transition: all 0.4s ease-in-out;
              width: 100%;
               
            }
          .bg-img{
             background-position: center;
                background-repeat:no-repeat;
             padding-top: 0%;
                 height:100%;

        }
   

              }

        `}
    </style>
    
    </>
  )
}
