import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <section className="slider">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <Image layout="responsive" src={"/assets/images/banner/masjidh.jpg"} width={1240} height={600} className="d-block w-100" alt="First slide" />
              <div className="carousel-caption">
                <div className="slider_des">
                  <h5 className="heading">
                    JOURNEY TO <span>EXPLORE WORLD</span>
                  </h5>
                  <p className="sub_text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <Image layout="responsive" src={"/assets/images/banner/masjidh.jpg"} width={1240} height={600} className="d-block w-100" alt="Second slide" />
              <div className="carousel-caption">
                <div className="slider_des">
                  <h5 className="heading">
                    BEAUTIFUL PLACE <span>TO VISIT</span>
                  </h5>
                  <p className="sub_text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </section>
      <style jsx global>{`
        .slider {
          position: relative;
          z-index: 1; /* Ensure banner is above everything */
        }

        .carousel-caption {
          z-index: 10;
          bottom: 20%;
        }

        .carousel-caption h5 {
          font-size: 55px;
          color: var(--white);
          line-height: 140%;
          text-align: center;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .carousel-caption h5 span {
          display: block;
        }

        .carousel-caption .slider_des p {
          font-size: var(--subTitle);
          color: var(--white);
          line-height: 150%;
          text-align: center;
          font-weight: 500;
        }

        .carousel::after {
          content: "";
          background-color: rgba(0, 0, 0, 0.6);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .carousel-control-prev,
        .carousel-control-next {
          z-index: 100;
          position: absolute;
          top: 45%;
          width: 55px;
          height: 55px;
          display: block;
          border-radius: 100%;
          transition: box-shadow 0.3ms;
          background: var(--primaryClr);
          opacity: 1;
        }

        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          box-shadow: 0 0 0 1rem rgba(255, 255, 255, 0.267);
        }

        .carousel-control-prev::after,
        .carousel-control-next::after,
        .carousel-control-prev::before,
        .carousel-control-next::before {
          content: "";
          position: absolute;
          left: 43%;
          background: #ffffff;
          width: 0.4rem;
          min-width: 3px;
          border-radius: 3px;
          height: 34%;
        }

        .carousel-control-prev {
          left: 40px;
        }

        .carousel-control-prev::before {
          transform: rotate(45deg);
          top: 24%;
        }

        .carousel-control-prev::after {
          transform: rotate(-45deg);
          bottom: 24%;
        }

        .carousel-control-next {
          right: 40px;
        }

        .carousel-control-next::before {
          left: auto;
          right: 43%;
          transform: rotate(-45deg);
          top: 24%;
        }

        .carousel-control-next::after {
          left: auto;
          right: 43%;
          transform: rotate(45deg);
          bottom: 24%;
        }

        .carousel-control-prev span,
        .carousel-control-next span {
          display: none;
        }

        @media only screen and (max-width: 991px) {
          .carousel-caption {
            bottom: 18%;
          }

          .carousel-caption h5 {
            font-size: 35px;
          }

          .carousel-caption .slider_des p {
            font-size: 16px;
          }
        }

        @media only screen and (max-width: 767px) {
          .carousel-item img {
            height: 350px;
            object-fit: fill;
          }

          .carousel-caption {
            bottom: 22%;
            padding: 0 0 20px 0;
          }

          .carousel-caption h5 {
            font-size: 26px;
          }

          .carousel-caption h5 span {
            display: inline-block;
          }

          .carousel-caption .slider_des p {
            font-size: 14px;
          }

          .carousel-control-next,
          .carousel-control-prev {
            width: 40px;
            height: 40px;
          }
        }

        @media only screen and (max-width: 420px) {
          .carousel-caption {
            right: 3%;
            left: 3%;
            bottom: 16%;
            padding: 0 0 20px 0;
          }

          .carousel-control-next,
          .carousel-control-prev {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Banner;
