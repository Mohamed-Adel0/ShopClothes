import React from "react";
import Css from "./Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Picute1 from "./Picuters/Slide_1.jpg";
import Picute2 from "./Picuters/Slide_2.jpg";
import { Link } from "react-router-dom";
import { CiShoppingTag } from "react-icons/ci";
const Home = () => {
  const products = [
    {
      id: 1,
      title: "Want to Update your Style?",
      descraption: "NEW COLLECTION",
      paragraph: "FRESH, STYLISH & TRENDY",
      src: "PURCHASE THEME",
      idea: "Whats New",
      img: Picute2,
      animat: "animate__animated animate__bounce animate__flip",
      animat2:
        "animate__animated animate__slow animate__bounce animate__zoomInDown",
    },
    {
      id: 2,
      title: "Up to 70% off",
      descraption: "Discounts on fall collection",
      paragraph: "FRESH, STYLISH & TRENDY",
      src: "PURCHASE THEME",
      idea: "Whats New",
      img: Picute1,
      whats: "animate__animated animate__bounce animate__hinge",
      left: "animate__animated animate__slow animate__bounce animate__zoomInLeft",
    },
  ];

  return (
    <div>
      <div className={Css.parent}>
        <Carousel className={Css.container} fade>
          {products?.map((r) => (
            <Carousel.Item interval={3550} key={r.id}>
              <div className={Css.card}>
                <div className={Css.img}>
                  <img src={r.img} alt="" />
                  <div className={Css.bg}></div>
                </div>
                <Carousel.Caption className={Css.paragraph}>
                  <div className={Css.text}>
                    <h3 className="animate__animated animate__bounce animate__faster animate__bounceInDown">
                      {r.title}
                    </h3>
                    <h1 className={`${r.animat2} ${r.left}`}>
                      {r.descraption}
                    </h1>
                    <p className="animate__animated animate__bounce animate__slower animate__zoomInRight">
                      {r.paragraph}
                    </p>
                    <div className={Css.location}>
                      <Link className={`${r.whats}`} to="">
                        {r.idea}
                      </Link>
                      <Link className={`${r.animat}`} to="">
                        {r.src} <CiShoppingTag className={Css.tag} />
                      </Link>
                    </div>
                  </div>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* bokra isa m7tag akmal el routes 3shan msh mtzabta */}
    </div>
  );
};

export default Home;
