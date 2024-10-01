import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export default function ServiceCards() {
  return (
    <>
      <section className='container'>
        <div className='serv-card cursor'>
          <div className='image-container'>
            <Image 
              style={{ borderRadius: '20px 20px 0px 0px' }}  
              src={"/assets/images/dynamic-gallery/mekka3.png"} 
              width={330} 
              height={240} 
              alt='Serv-Card' 
              loading='lazy'
              className='hover-image' // Add class for hover effect
            />
          </div>

          <div className='pd20'>
            <h6 className='fs-24 mfs-16 fwb'>Aliat Mall - Kinan</h6>
            <p className="fs-19 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <Link href={"/contact"}>
          <div className='mt-5'>
          <button className='slot-btn fwb fs-16'>
            Book Your Slot
          </button>
          </div></Link>
        </div>
      </section>

      <style jsx>{`
        .serv-card {
          border-radius: 20px;
          background-color: white;
          padding-bottom: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 1);
          width: 330px;
          overflow: hidden; /* Ensures content is clipped if scaled */
          position: relative; /* To position button absolutely */
        }

        .image-container {
          position: relative; /* Positioning for scaling effect */
          overflow: hidden; /* Hide overflow during scaling */
          transition: all 0.4s linear;
        }

        .pd20 {
          padding: 20px;
        }

        .slot-btn {
          background-color: lightgreen;
          border-radius: 20px;
          border: none;
          padding: 10px 15px;
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%) translateY(50px); /* Initially hidden below */
          opacity: 0;
          transition: all 0.4s ease; /* Smooth transition */
        }

        /* On hover, show the button */
        .serv-card:hover .slot-btn {
          opacity: 1;
          transform: translateX(-50%) translateY(0); /* Slide up */
        }
      `}</style>
    </>
  );
}
