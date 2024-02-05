import React from "react";
import Css from "./Accessories.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Picture1 from "../Picture/cape1.jpg";
import Picture2 from "../Picture/cape2.jpg";
import Picture3 from "../Picture/book1.jpg";
import Picture4 from "../Picture/book2.jpg";
import Picture5 from "../Picture/sunglasses.jpg";
import Picture6 from "../Picture/watch1.jpg";
import Picture7 from "../Picture/watch2.jpg";
import { CartSlice } from "../../Redux/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Accessories = () => {
  const dispatch = useDispatch();
  const Products = [
    {
      id: 9,
      title: "Black glasses",
      paragraph: "CLOTHINGS, SHORTS",
      // delet: "£21.99",
      Salle: "£7.99",
      imageOne: Picture5,
      imageTwo: Picture5,
    },
    {
      id: 10,
      title: "Shoulder bag",
      paragraph: "CLOTHINGS, SHIRTS",
      delet: "£21.99",
      Salle: "£14.99",
      imageOne: Picture3,
      imageTwo: Picture4,
    },

    {
      id: 11,
      title: "Simple hat",
      paragraph: "CLOTHINGS, SHORTS",
      // delet: "£21.99",
      Salle: "£8.99",
      imageOne: Picture1,
      imageTwo: Picture2,
    },
    {
      id: 12,
      title: "Striped watch",
      paragraph: "CLOTHINGS, SHORTS",
      // delet: "£21.99",
      Salle: "£7.99",
      imageOne: Picture6,
      imageTwo: Picture7,
    },
  ];
  // Here for Alaram to Succssfully or info
  const succ = () => {
    toast.success("succcesfully to Added The Card", {
      position: "bottom-left",
    });
  };
  // End for Alaram to Succssfully or info
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          {Products?.map((r) => (
            <div
              className={Css.card}
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="100"
              data-aos-duration="1500"
              key={r.id}
            >
              <div className={Css.img}>
                <Link
                  className={Css.link}
                  to={`${r.id}`}
                  onClick={() => dispatch(CartSlice.actions.addtocart(r))}
                >
                  <img className={Css.inside} src={r.imageTwo} alt="" />
                  <div className={Css.boximg}>
                    <img className={Css.outside} src={r.imageOne} alt="" />
                  </div>
                </Link>
              </div>
              <div className={Css.paragraph}>
                <h3>{r.title}</h3>
                <p>{r.paragraph}</p>
                <div className={Css.sallery}>
                  <div className={Css.text}>
                    <h4>
                      <del>{r.delet}</del>
                    </h4>
                    <h4>{r.Salle}</h4>
                  </div>
                  <button
                    onClick={() =>
                      succ() || dispatch(CartSlice.actions.cart(r))
                    }
                  >
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ana kda wa2af 3alla t3'er el sowar hb2a a3mlha bel hover */}
    </div>
  );
};

export default Accessories;
