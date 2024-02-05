import React from "react";
import Css from "./FourSeaction.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Picture1 from "./Pictures/Item_10.jpg";
import Picture2 from "./Pictures/Item_10_1.jpg";
import Picture3 from "./Pictures/Item_11.jpg";
import Picture4 from "./Pictures/Item_11_1.jpg";
import Picture5 from "./Pictures/Item_3.jpg";
import Picture6 from "./Pictures/Item_3_1.jpg";
import Picture7 from "./Pictures/Item_4.jpg";
import Picture8 from "./Pictures/Item_4_1.jpg";
import Picture9 from "./Pictures/Item_5.jpg";
import Picture10 from "./Pictures/Item_7.jpg";
import Picture11 from "./Pictures/Item_7_2.jpg";
import Picture12 from "./Pictures/Item_8.jpg";
import Picture13 from "./Pictures/Item_8_1.jpg";
import Picture14 from "./Pictures/Item_9.jpg";
import { CartSlice } from "../../Redux/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const FourSeaction = () => {
  const Products = [
    {
      id: 1,
      title: "Havanna shirt",
      paragraph: "CLOTHINGS, SHIRTS",
      delet: "£21.99",
      Salle: 14.99,
      imageOne: Picture3,
      imageTwo: Picture4,
    },
    {
      id: 2,
      title: "Black glasses",
      paragraph: "ACCESSORIES",
      // delet: "£21.99",
      Salle: 8.99,
      imageOne: Picture1,
      imageTwo: Picture2,
    },
    {
      id: 3,
      title: "Black glasses",
      paragraph: "ACCESSORIES",
      // delet: "£21.99",
      Salle: 10.99,
      imageTwo: Picture14,
      imageOne: Picture14,
      // imageTwo: Picture2,
    },
    {
      id: 4,
      title: "Simple hat",
      paragraph: "ACCESSORIES",
      // delet: "£21.99",
      Salle: 12.99,
      imageOne: Picture12,
      imageTwo: Picture13,
    },
    {
      id: 5,
      title: "Season shoes",
      paragraph: "ACCESSORIES",
      // delet: "£21.99",
      Salle: 10.99,
      // imageOne: Picture12,
      imageTwo: Picture9,
      imageOno: Picture9,
    },
    {
      id: 6,
      title: "Fantasy t-shirt",
      paragraph: "ACCESSORIES",
      // delet: "£21.99",
      Salle: 7.99,
      imageOne: Picture7,
      imageTwo: Picture8,
    },
    {
      id: 7,
      title: "Fantasy pants",
      paragraph: "ACCESSORIES",
      delet: "£25.99",
      Salle: 15.99,
      imageOne: Picture5,
      imageTwo: Picture6,
    },
    {
      id: 8,
      title: "Shoulder bag",
      paragraph: "ACCESSORIES",
      // delet: "£25.99",
      Salle: 20.99,
      imageOne: Picture10,
      imageTwo: Picture11,
    },
  ];
  const dispatch = useDispatch();
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
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="900"
              data-aos-duration="1500"
              className={Css.card}
              key={r.id}
            >
              <div className={Css.img}>
                <Link
                  onClick={() => dispatch(CartSlice.actions.addtocart(r))}
                  className={Css.link}
                  to={`${r.id}`}
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
                    <h4>£{r.Salle}</h4>
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

export default FourSeaction;
