import React from "react";
import Css from "./Shirts.module.css";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import Picture1 from "../Picture/Item_1.jpg";
import Picture2 from "../Picture/Item_1_3.jpg";
import Picture3 from "./Pictures/Item_11.jpg";
import Picture4 from "./Pictures/Item_11_1.jpg";
import Picture5 from "./Pictures/Item_4.jpg";
import Picture6 from "./Pictures/Item_4_1.jpg";
import { CartSlice } from "../../Redux/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Shirts = () => {
  const Products = [
    {
      id: 24,
      title: "Basic t-shirt",
      paragraph: "CLOTHINGS, SHORTS",
      // delet: "£21.99",
      Salle: "£8.99",
      imageOne: Picture1,
      imageTwo: Picture2,
    },
    {
      id: 25,
      title: "Havanna shirt",
      paragraph: "CLOTHINGS, SHIRTS",
      delet: "£21.99",
      Salle: "£14.99",
      imageOne: Picture3,
      imageTwo: Picture4,
    },
    {
      id: 26,
      title: "Fantasy t-shirt",
      paragraph: "CLOTHINGS, SHORTS",
      // delet: "£21.99",
      Salle: "£7.99",
      imageOne: Picture5,
      imageTwo: Picture6,
    },
  ];
  const dispatch =useDispatch()
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
      {/* ana kda wa2af 3alla t3'er el sowar hb2a a3mlha bel hover */}
    </div>
  );
};

export default Shirts;
