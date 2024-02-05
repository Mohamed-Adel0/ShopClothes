import React from "react";
import Css from "./Shorts.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Picture1 from "../Picture/legs1.jpg";
import Picture2 from "../Picture/legs2.jpg";
import Picture3 from "../Picture/Item_2.jpg";
import Picture4 from "../Picture/Item_2_1.jpg";
import { useDispatch } from "react-redux";
import { CartSlice } from "../../Redux/CartSlice/CartSlice";
import { toast } from "react-toastify";

const Shorts = () => {
  const Products = [
    {
      id: 28,
      title: "Fantasy pants",
      paragraph: "CLOTHINGS, SHIRTS",
      delet: "£21.99",
      Salle: "£14.99",
      imageOne: Picture3,
      imageTwo: Picture4,
    },
    {
      id: 29,
      title: "Denim shorts",
      paragraph: "CLOTHINGS, SHORTS",
      // delet: "£21.99",
      Salle: "£8.99",
      imageOne: Picture1,
      imageTwo: Picture2,
    },
  ];
  const dispatch = useDispatch()
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
            <div data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="100"
            data-aos-duration="1500" className={Css.card} key={r.id}>
              <div className={Css.img}>
                <Link className={Css.link} to={`${r.id}`} onClick={() => dispatch(CartSlice.actions.addtocart(r))}>
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
                  <button onClick={()=>succ() || dispatch(CartSlice.actions.cart(r))}>
                    <FiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shorts;
