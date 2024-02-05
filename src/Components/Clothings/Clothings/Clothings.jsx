import React from "react";
import Css from "./Clothings.module.css";
import { Link, Outlet } from "react-router-dom";
import Picture1 from "./Picture/Item_10_1-660x660.jpg";
import Picture2 from "./Picture/Item_11_1-660x660.jpg";
import Picture3 from "./Picture/Item_3-768x768.jpg";
import Picture4 from "./Picture/Item_7_2-660x660.jpg";
import Picture5 from "./Picture/Item_9-768x768.jpg";
import Header from "../Header/Header";
import { CartSlice } from "../../Redux/CartSlice/CartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
const Clothings = () => {
  const Products = [
    {
      id: 13,
      title: "Fantasy pants",
      delet: "£25.99",
      sale: " £15.99",
      imageOne: Picture3,
      imageTwo: Picture3,
    },
    {
      id: 14,
      title: "Black glasses",
      sale: " £8.99",
      imageOne: Picture5,
      imageTwo: Picture5,
    },
    {
      id: 15,
      title: "Striped watch",
      sale: " £8.99",
      imageOne: Picture1,
      imageTwo: Picture1,
    },
    {
      id: 16,
      title: "Shoulder bag",
      sale: " £25.99",
      imageOne: Picture4,
      imageTwo: Picture4,
    },
    {
      id: 17,
      title: "Fantasy t-shirt",
      sale: " £9.99",
      imageOne: Picture2,
      imageTwo: Picture2,
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
      <Header />
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.right}>
            <div className={Css.slider}>
              <h4>Product Categories</h4>
              <ul>
                <li>
                  <Link to="accessories">ACCESSORIES</Link> <p>4</p>
                </li>
                <li>
                  <Link to="clothings">CLOTHINGS</Link> <p>2</p>
                </li>
                <li>
                  <Link to="shirts">SHIRTS</Link> <p>0</p>
                </li>
                <li>
                  <Link to="shoes">SHOES</Link> <p>0</p>
                </li>
                <li>
                  <Link to="shorts">SHORTS</Link> <p>0</p>
                </li>
                <li>
                  <Link to="uncategorized">UNCATEGORIZED</Link> <p>0</p>
                </li>
              </ul>
            </div>
            <div className={Css.card}>
              {Products?.map((r) => (
                <div className={Css.box} key={r.id}>
                  <div className={Css.img}>
                    <img src={r.imageOne} alt="" />
                  </div>
                  <Link
                    className={Css.srcc}
                    to={`${r.id}`}
                    onClick={() => succ() || dispatch(CartSlice.actions.addtocart(r))}
                  >
                    <div className={Css.paragraph}>
                      <button>{r.title}</button>
                      <div className={Css.text}>
                        <h5>
                          <del>{r.delet}</del>
                        </h5>
                        <h5>{r.sale}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className={Css.left}>
            <Outlet></Outlet>
            {/* Bokra hb2a akml el Out Let ba2a bs m7tag azbot el height bta3 el out Let 3shan mzabtash */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clothings;
