import Css from "./Cart.module.css";
import Address from "../Address/Address";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { CartSlice } from "../../Redux/CartSlice/CartSlice";
import { useState } from "react";
import { toast } from "react-toastify";
const Cart = () => {
  // Here Event for back Data from redux
  const product = useSelector((r) => r?.cart?.cart);
  const cart = product.filter(
    (value, index, self) => index === self.findIndex((r) => r.id === value.id)
  );
  // End Event for back Data from redux

  //   Here Events for total Number for Card's
  const dispatch = useDispatch();
  const numb = product.length;
  //   console.log(numb);
  //   End Events for total Number for Card's

  //   Here Event for scroll Top when i open the Page
  const top = () => {
    window.scrollTo(0, 150);
  };
  setTimeout(() => {
    top();
  }, 0);
  //   End Event for scroll Top when i open the Page
  // Here for increase count for items
  const [setCount, getCount] = useState(0);
  // End for increase count for items

  // Here for Alaram to Succssfully or info
  const wrong = () => {
    toast.info("Ops You Remove The Card", {
      position: "bottom-left",
    });
  };
  // End for Alaram to Succssfully or info
  return (
    <div>
      <Address />
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.text}>
            <div className={Css.paragraph}>
              <h5>View Cart</h5>
              <h5>Checkout</h5>
              <h5>Done</h5>
            </div>
          </div>
          <div className={Css.cards}>
            <div className={Css.description}>
              <div className={Css.one}></div>
              <div className={Css.two}></div>
              <div className={Css.product}>
                <h5>Product</h5>
              </div>
              <div className={Css.price}>
                <h5>Price</h5>
              </div>
              <div className={Css.Quantity}>
                <h5>Quantity</h5>
              </div>
              <div className={Css.Subtotal}>
                <h5>Subtotal</h5>
              </div>
            </div>
            {cart?.map((r) => (
              <div className={Css.card} key={r.id}>
                <div className={Css.close}>
                  <button onClick={() => wrong() || dispatch(CartSlice.actions.removecart(r))}><IoIosClose/></button>
                </div>
                <div className={Css.img}>
                  <img src={r.imageTwo} alt="" />
                </div>
                <div className={Css.src}>
                  <Link
                    onClick={() => dispatch(CartSlice.actions.addtocart(r))}
                    to={`${r.id}`}
                  >
                    {r.title}
                  </Link>
                </div>
                <div className={Css.price}>
                  <p>£{r.Salle}</p>
                </div>
                <div className={Css.increase}>
                  <button onClick={() => getCount(setCount - 1)} disabled={setCount ===  0}>
                    <IoIosArrowRoundUp />
                  </button>
                  <p>{setCount}</p>
                  <button onClick={() =>  getCount(setCount + 1)}>
                    <IoIosArrowRoundDown />
                  </button>
                </div>
                <div className={Css.total} key={r.id}>
                  <p>{r.Salle * numb}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// Bokra hb2a a3ml el count bta3t el cart