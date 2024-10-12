import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // Import the required CSS for the lightbox
import { motion } from 'framer-motion'; // Import Framer Motion for animations

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // State to manage image loading

  const images = [
    "/assets/images/services-img/hajj-service.jpg",
    "/assets/images/services-img/umrah-service.jpg",
    "/assets/images/services-img/passport-service.jpg",
    "/assets/images/services-img/visa-stamp.jpg",
    "/assets/images/services-img/visiting-visa.jpg",
    "/assets/images/services-img/air-ticket.jpg",
    "/assets/images/services-img/railway-ticket.jpg",
    "/assets/images/banner/masjidh.jpg",
    "/assets/images/dynamic-gallery/mekka3.png",
    "/assets/images/banner/mekkah-banner.jpg",
    "/assets/images/dynamic-gallery/mekka3.png",
    "/assets/images/services-img/visiting-visa.jpg",
    "/assets/images/services-img/visiting-visa.jpg",
  
  ];

  const handleImageLoad = (index) => {
    setIsLoading(true); // Set loading to true when starting to load the image
    const img = new Image();
    img.src = images[index]; // Set the source of the image

    img.onload = () => {
      setIsLoading(false); // Set loading to false when the image loads
      setPhotoIndex(index); // Set the photo index
      setIsOpen(true); // Open the lightbox
    };

    img.onerror = () => {
      setIsLoading(false); // Set loading to false on error
      alert("Image failed to load, please try another."); // Alert the user about the error
    };
  };

  return (
    <div className="container-fluid">
      
      <h4 className="cw tac fs-33 mfs-24 fwb mt70 cb ">Journey of Faith : <span className="logo-clr fwb"> Hajj and Umrah </span>  Galleries</h4>

      <motion.div 
        className="df fw fjc gap16 pdtb50"
        initial={{ opacity: 0 }} // Initial state (fade in)
        animate={{ opacity: 1 }} // Animate to (fade in)
        transition={{ duration: 1 }} // Animation duration
      >
        {images.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => handleImageLoad(index)} // Load and open the lightbox
            whileHover={{ scale: 1.05 }} // Zoom effect on hover
            whileTap={{ scale: 0.95 }} // Zoom in slightly on click
            transition={{ duration: 0.3 }} // Animation speed for hover effect
            style={{ 
              borderRadius: '10px',
              cursor: 'pointer', 
              width: 'auto',
              height: '250px', // Set a fixed height for the gallery
              margin: '10px',
              objectFit: 'cover', // Ensure images fit within the container
            }}
          />
        ))}
      </motion.div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]} // The current image being displayed
          nextSrc={images[(photoIndex + 1) % images.length]} // Next image
          prevSrc={images[(photoIndex + images.length - 1) % images.length]} // Previous image
          onCloseRequest={() => setIsOpen(false)} // Close the lightbox
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length) // Move to the previous image
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length) // Move to the next image
          }
          imageLoadErrorMessage="Image failed to load, please try again." // Add error handling for image loading
          loader={isLoading && <div className="spinner">Loading...</div>} // Show loading spinner while image loads
        />
      )}

      <style jsx>{`
        .image-grid {
          display: flex;
          flex-wrap: wrap;
        }
        .spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 20px;
        }

      `}</style>
    </div>
  );
}

export default Gallery;
