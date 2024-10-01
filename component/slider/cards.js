import React from 'react'
import { Playfair_Display } from 'next/font/google';

// Correct font import
const playfairDisplay = Playfair_Display({
  subsets: ['latin'], 
  weight: '400'
});


export default function PopularSection() {
  return (
    <>
    <section className='bg'>
      <div className='container'>
        <div className='df fjse'>
            <div className='cards'>
               <h6 className={`fs-24`}>Standart</h6>
               <p className={`fs-16 pdt30 ${playfairDisplay.className}`}>Ath-Theen Hajj is here to guide you on your sacred pilgrimage with ease and care. We provide comprehensive</p>
            <div className='df fjsb'>
                <div className=''>
            <div className='df fac mt20'>
                <p className=''>1</p>
                <p className='fs-14'>Madina</p>
            </div>
            <div className='df fac mt20'>
                <p className=''>1</p>
                <p className='fs-14'>Madina</p>
            </div>
            <div className='df fac mt20'>
                <p className=''>1</p>
                <p className='fs-14'>Madina</p>
            </div>
            </div>
            <div className=''>
            <div className='df fac mt20'>
                <p className=''>1</p>
                <p className='fs-14'>Madina</p>
            </div>
            <div className='df fac mt20'>
                <p className=''>1</p>
                <p className='fs-14'>Madina</p>
            </div>
            <div className='df fac mt20'>
                <p className=''>1</p>
                <p className='fs-14'>Madina</p>
            </div>
            </div>
            </div>
            </div>
        </div>
      </div>
    </section>
    <style jsx>
     {`
     .bg{
     background: yellow;
     padding: 40px 10px;
     }
     .cards{
     background-color: #ffffff;
     width: 440px;
     border-radius: 30px;
     padding: 20px 10px;
     }
     
     `}
    </style>
    </>
  )
}
