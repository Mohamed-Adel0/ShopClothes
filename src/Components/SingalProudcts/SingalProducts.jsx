import React, { useState } from "react";
import Css from "./SingalProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import Address from "./Address/Address";
import { FaRegStar } from "react-icons/fa6";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { CiShare2 } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { CartSlice } from "../Redux/CartSlice/CartSlice";
import { toast } from "react-toastify";

const SingalProducts = () => {
  const numb = useParams();
  const useid = numb.id;
  const dispatch = useDispatch();
  const backData = useSelector((state) => state?.cart?.item);
  const product = backData.filter(
    (value, index, self) =>
      value.id == useid && index === self.findIndex((r) => r.id === value.id)
  );
  const Stars = [
    {
      id: 1,
      stars: <FaRegStar />,
    },
    {
      id: 2,
      stars: <FaRegStar />,
    },
    {
      id: 3,
      stars: <FaRegStar />,
    },
    {
      id: 4,
      stars: <FaRegStar />,
    },
    {
      id: 5,
      stars: <FaRegStar />,
    },
  ];
  const setTime = () => {
    window.scrollTo(0, 150);
  };
  setTimeout(() => {
    setTime();
  }, 0);
  const [Setimage, Getimage] = useState(false);
  const fixed = () => {
    if (window) {
      Getimage(!Setimage);
      // console.log("welcome");
    }
  };
  const [Setshare, Getshare] = useState(false);
  const share = () => {
    // i knew i can make same event in verbal fixed but im trining for ideas events
    if (window) {
      Getshare(!Setshare);
      // console.log("Hello");
    }
  };

  // Here for Alaram to Succssfully or info
  const succ = () => {
    toast.success("succcesfully to Added The Card", {
      position: "bottom-left",
    });
  };
  // End for Alaram to Succssfully or info
 const [setCount, getCount] = useState(0);
  return (
    <div>
      <Address />
      <div className={Css.parent}>
        <div className={Css.container}>
          {product?.map((r) => (
            <div className={Css.card} key={r.id}>
              <div className={Css.img}>
                <img src={r.imageOne} alt="" />
              </div>
              <div className={Css.boximg}>
                <img onClick={() => fixed()} src={r.imageTwo} alt="" />
                <div className={`${Setimage ? Css.show : ""} ${Css.openSize} `}>
                  <div className={Css.cardimg}>
                    <button onClick={() => fixed()}>
                      <IoIosCloseCircleOutline />
                    </button>
                    <img src={r.imageTwo} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {product?.map((r) => (
            <div data-aos="fade-left" className={Css.card} key={r.id}>
              <h3>{r.title}</h3>
              <div className={Css.boxSallery}>
                <div className={Css.Sallery}>
                  <h6>
                    <del>{r.delet}</del>
                  </h6>
                  <h5>£{r.Salle}</h5>
                </div>
                <div className={Css.Sallery}>
                  {Stars?.map((r) => (
                    <button key={r.id}>{r.stars}</button>
                  ))}
                  <p>(1 customer review)</p>
                </div>
              </div>
              <div className={Css.info}>
                <div className={Css.addCard}>
                  <div className={Css.increase}>
                    <button onClick={()=>  getCount(setCount - 1)} disabled={setCount ===  0}  >
                      <FaArrowDown />
                    </button>
                    <p>{setCount}</p>
                    <button onClick={()=> getCount(setCount + 1)}>
                      <FaArrowUp />
                    </button>
                  </div>
                  <button
                    onClick={() =>
                      succ() || dispatch(CartSlice.actions.cart(r))
                    }
                    className={Css.cart}
                  >
                    <FiShoppingCart /> ADD TO CART
                  </button>
                </div>
                <div className={Css.text}>
                  <div className={Css.paragraph}>
                    <h3>
                      SKU: <Link>{r.id}</Link>
                    </h3>
                    <h3>
                      Categories: <Link>{r.paragraph}</Link>
                    </h3>
                  </div>
                  <div className={Css.share}>
                    <button onClick={() => share()}>
                      <CiShare2 className={Css.share2} /> SHARE
                    </button>
                    <div className={Css.social}>
                      <div
                        className={`${Setshare ? Css.showicons : Css.icon} ${
                          Css.icon
                        } `}
                      >
                        <Link to="https://www.facebook.com/profile.php?id=100012706116123">
                          <FiFacebook />
                        </Link>
                        <Link to="https://www.linkedin.com/in/mohamed-adel-226611286/">
                          <SlSocialLinkedin />
                        </Link>
                        <Link to="">
                          <CiMail />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${Css.src} src`}>
                  <NavLink to="">DESCRIPTION</NavLink>
                  <NavLink to="information">ADDITIONAL INFORMATION</NavLink>
                  <NavLink to="review">REVIEWS (1)</NavLink>
                </div>
                <div className={Css.outlet}>
                  <Outlet></Outlet>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingalProducts;
// ana kda m7tag arbot el add to cart fe kol el Page's
