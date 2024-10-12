import React from 'react'
import { TiWorld } from "react-icons/ti";
import { Ri24HoursLine } from "react-icons/ri";
export default function WeFeelHappy() {

  const TotalPassenger = [

  {
    totalps:"800",
    year:"2018"
  },
  {
    icon:<TiWorld size={60} color='#4CAF50'/>,

  },
  {
    totalps:"800",
    year:"2018"
  },
  ]

  return (
    <>
    <section className='we-happy'>
        <div className=' container'>
        <div className='row mt-5  '>
           <div className='col-12 col-lg-6'>
            <h4 className={`fs-24 mfs-19  fw7`}><span className='logo-clr fw7'> We Feel Happy </span> To Help You</h4>
            <p className={`fs19 lh33 mfs-16  mt16  pdt20`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
            <p className={`fs-19 mfs-16 mt16  pdt20`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
           </div>
           <div className='col-12 col-lg-6'>
            <div className='df fjc mmt10'>
           <div className='total-passenger tac '>
              <p className={`fs-14 cw count-bg `}> 1000+ </p>
              <p className={`fs-14 cb mt-1`}> Total Passenger In</p>
              <p className={`fs-14 cb`}> 2022 </p>
              </div>
              </div>
     <div className='circle-df gap5 mt-3'>
{TotalPassenger.map((items,index)=>{
  return(
<div className='total-passenger tac ' key={index}>
{items.icon && (
  <div className='umrah-circle tac '>  <p className={`fs-14 cw`}>{items.icon}</p>
 <p className={`fs-14 fw6`}>Umrah Tour <br/>Package</p>
 </div>)}
{items.totalps && items.year &&
<>
<p className={`fs-14 cw count-bg count-bg s`}>{items.totalps}</p><p className={`fs-14 cb mt-1`}> Total Passenger In</p><p className={`fs-14 cb`}>{items.year}</p>
</>}
</div>)})}

</div>
              <div className='df fjc mt-3'>
           <div className='help-circle tac '>
              <Ri24HoursLine size={60} color='#000000'/>
              <p className={`fs-14 cb fwb`}>24/7 Support <br/> 8124289972</p>
              </div>
              </div>
          </div>
        </div>
        </div>
    </section>
    <style jsx>
        {`
        .we-happy{
        background-image: url('/assets/images/we-feel-happy/map.webp');
    background-color: #f9f9f9;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 60px 15px 55px;
        }
    .circle-df{
    display: flex;

    }
        .count-bg{
        background: #4CAF50;
        padding: 5px 15px;
        border-radius: 10px;

        }
        .umrah-circle{
          border-radius: 100%;
          background-color: #e9c751;
          width: 145px;
          height: 145px;
          padding: 20px;
          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
                display: flex;
             justify-content: center;
             flex-direction: column;
             align-items: center;
              margin: 0 auto
        }
       .help-circle{
           width: 145px;
          height: 145px;
          background-color: #FFFFFF;
          border-radius: 100%;
          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
              display: flex;
             justify-content: center;
             flex-direction: column;
             align-items: center;
              margin: 0 auto
        }
          
          .total-passenger{
         width: 145px;
          height: 145px;
          background-color: #FFFFFF;
          border-radius: 100%;
          box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.2);
                display: flex;
             justify-content: center;
             flex-direction: column;
             align-items: center;
              margin: 0 auto
        }
    @media only screen and (max-width: 500px){
    .circle-df{
    display: flex;
    flex-wrap: wrap;
    
    }
    .umrah-circle{
    display: none;
    }
    }
        `}
    </style>
    </>
  )
}
