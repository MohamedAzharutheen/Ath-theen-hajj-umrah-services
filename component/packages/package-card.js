import React from 'react'
import { FaWindowClose } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
export default function PackageCard() {
  return (
    <>
    <section className='container'>
        <div className='package-card'>
          <div className='df fjfe icon-bg pd5'>
             <FaWindowClose size={24} color='#000'/>
             </div>
            <div className='head pdtb20'>
                <p className='tac fs-24 '>Logo</p>
            </div>
            <div className='insd-card pdtb20'>
             <h6 className='fs-19 card-subtitle'>Semi Delux</h6>
             <h4 className='fs-24 card-title'>Umrah Packages</h4>
             <p className='fs-16 card-description'>Departure In October</p>
             <p className='fs-19 fwb card-price pdt20'>RS. 78,000/-</p>
             </div>
             <div className='footer df fac fdc fjc pd10'>
               <p className='fs-16 '>ContactUs On Whatsapp</p> 
               <div className='df gap8 pd10 fac'>
             <FiPhoneCall />
                <p className='fs-14 '>
                    +91 81 24 28 99 72
                </p>
                </div>
             </div>
        </div>
    </section>

    <style jsx>{`
        .icon-bg{
        background-color: lightgreen;
        border-radius: 10px 10px 0px 0px;
        }
        .head{
        background-color: #ffffff;
        width: 100%;

        }
        .package-card {
            width: 360px;   
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
        }
        .insd-card{
        background-color: lightgreen;
        // background-image: url('/assets/images/packages/package-card-bg.png');
        width: 100%;
        
        }
        .package-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        
        .card-subtitle {
            color: #888;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        
        .card-title {
            color: #333;
            font-weight: bold;
            margin-bottom: 20px;
        }
        
        .card-description {
            color: #666;
            margin-bottom: 20px;
        }
        
        .card-price {
            color: #27ae60;
            font-weight: bold;
        }
        
        @media (max-width: 768px) {
            .card {
                width: 100%;
                padding: 20px;
            }
        }
    `}</style>
    </>
  )
}
