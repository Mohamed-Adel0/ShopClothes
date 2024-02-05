import React from "react";
import Css from "./Footer.module.css";
import Picture1 from "./Picture/Footer_logo.png";
import Picture2 from "./Picture/Item_10-660x660.jpg";
import Picture3 from "./Picture/Item_11-660x660.jpg";
import Picture4 from "./Picture/Item_9-660x660.jpg";
import Picture5 from "./Picture/Item_3-660x660.jpg";
const Footer = () => {
  const singalProduct = [
    {
      id: 1,
      image: Picture1,
      paragraph:
        "Duis semper mauris vitae purus rhoncus suscipit. Nunc dictum dapibus tellus, at viverra risus pharetra id. Nulla facilisi. Ut mollis et augue non gravida.",
    },
  ];
  const Products = [
    {
      id: 2,
      title: "Products",
      image1: Picture3,
      image2: Picture2,
      detalis: "Fantasy pants",
      delet: "£25.99",
      sale: "£15.99",
      watch: "Black Glasses",
      watchsale: "£10.99",
    },
    {
      id: 3,
      title: "Top Rated Products",
      image1: Picture5,
      image2: Picture4,
      detalis: "Havanna shirt",
      delet: "£21.99",
      sale: "£11.99",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.cards}>
            {singalProduct?.map((r) => (
              <div className={Css.card} key={r.id}>
                <div className={Css.img}>
                  <img src={r.image} alt="" />
                </div>
                <p>{r.paragraph}</p>
              </div>
            ))}
            {Products?.map((r) => (
              <div className={Css.card} key={r.id}>
                <h3>{r.title}</h3>
                <div className={Css.box}>
                  <div className={Css.img}>
                    <img src={r.image1} alt="" />
                  </div>
                  <div className={Css.text}>
                    <h4>{r.detalis}</h4>
                    <div className={Css.sale}>
                      <h5>
                        <del>{r.delet}</del>
                      </h5>
                      <h5>{r.sale}</h5>
                    </div>
                  </div>
                </div>
                <div className={Css.box}>
                  <div className={Css.img}>
                    <img src={r.image2} alt="" />
                  </div>
                  <div className={Css.text}>
                    <h4>{r.detalis}</h4>
                    <div className={Css.sale}>
                      <h5>
                        <del>{r.delet}</del>
                      </h5>
                      <h5>{r.sale}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={Css.about}>
            <h2>
              Copyright ©2023 All rights reserved | This template is made with
              by <span>Mohamed-adel</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
