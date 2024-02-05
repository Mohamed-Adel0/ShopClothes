import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Css from "./SevenSeaction.module.css";
import Picture1 from "./Picutre/Item_11.jpg";
import Picture2 from "./Picutre/Item_3_1.jpg";
import Picture3 from "./Picutre/Item_4_1.jpg";
import Picture4 from "./Picutre/Item_5.jpg";
import Picture5 from "./Picutre/Item_7.jpg";
import Picture6 from "./Picutre/Item_9.jpg";
const SevenSeaction = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    // speed: 2000, // da 3shan t8aly elcard's tlaf automatical
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1216,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      id: 1,
      image: Picture1,
    },
    {
      id: 2,
      image: Picture2,
    },
    {
      id: 3,
      image: Picture3,
    },
    {
      id: 4,
      image: Picture4,
    },
    {
      id: 5,
      image: Picture5,
    },
    {
      id: 6,
      image: Picture6,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <Slider className={Css.container} {...settings}>
          {products?.map((r) => (
            <div className={Css.card} key={r.id}>
              <div className={Css.img}>
                <img src={r.image} alt="" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SevenSeaction;
