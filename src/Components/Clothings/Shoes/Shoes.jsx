import React from "react";
import Css from "./Shoes.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Picture1 from "../Picture/foot.jpg";
import { CartSlice } from "../../Redux/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Shoes = () => {
  const Products = [
    {
      id: 27,
      title: "Basic t-shirt",
      paragraph: "CLOTHINGS, SHORTS",
      // delet: "£21.99",
      Salle: "£8.99",
      imageOne: Picture1,
      imageTwo: Picture1,
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
            <div  data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="100"
            data-aos-duration="1500" className={Css.card} key={r.id}>
              <div className={Css.img}>
                <Link className={Css.link} to={`${r.id}`} onClick={() => dispatch(CartSlice.actions.addtocart(r))}>
                  <img className={Css.inside} src={r.imageOne} alt="" />
                </Link>
              </div>
              <div className={Css.paragraph}>
                <h3>{r.title}</h3>
                <p>{r.paragraph}</p>
                <div className={Css.sallery}>
                  <div className={Css.text}>
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

export default Shoes;
