import React, { useState } from "react";
import Css from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FaSearch, FaGithub } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import Pictures from "./Pictures/Logo_shop.png";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { useSelector } from "react-redux";
const NavBar = () => {
  const total = useSelector((state)=> state?.cart?.cart)
  const [setClass, getClass] = useState(false);
  const Menu = () => {
    getClass(!setClass);
  };
  const [setShow, getShow] = useState(false);

  const ScrollY = () => {
    if (window.scrollY >= 500) {
      getShow(true);
    } else {
      getShow(false);
    }
  };
  window.addEventListener("scroll", ScrollY);
  // Here event for NavBar to make event in scroll add class Fixed
  const [SetScroll, GetScroll] = useState(false);
  const scrollNavBar = () => {
    if (window.scrollY >= 726) {
      GetScroll(true);
    } else {
      GetScroll(false);
    }
  };
  window.addEventListener("scroll", scrollNavBar);
  // End event for NavBar to make event in scroll add class Fixed

  return (
    <div>
      <div className={Css.header}>
        <header data-aos="fade-right" className={`${SetScroll ? Css.fixedNavBar : ""}`}>
          <nav>
            <div className={Css.img}>
              <img src={Pictures} alt="" />
            </div>
            <ul className={`${Css.hide} ${setClass ? Css.show : ""}`}>
              <li>
                <Link onClick={() => window.scrollTo(0, 0)} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 791)} to="">
                  Categories
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 1535)} to="">
                  Products
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 2683)} to="">
                  Subscript
                </Link>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 3354)} to="">
                  Partners
                </Link>
              </li>

              <li className={Css.dropBar}>
                Shop <IoIosArrowDown />
                <ul className={Css.dropdownMenu}>
                  <li>
                    <Link
                      onClick={() => window.scrollTo(0, 195)}
                      to="clothings"
                    >
                      Clothes
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => window.scrollTo(0, 195)}
                      to="/clothings/accessories"
                    >
                      Accessories
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => window.scrollTo(0, 195)}
                      to="/clothings/shirts"
                    >
                      Shirts
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => window.scrollTo(0, 195)}
                      to="/clothings/shorts"
                    >
                      Shorts
                    </Link>
                  </li>

                  <li>
                    <Link
                      onClick={() => window.scrollTo(0, 195)}
                      to="/clothings/shoes"
                    >
                      Shoes
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link onClick={() => window.scrollTo(0, 3759)} to="">
                  Shipment
                </Link>
              </li>
            </ul>
            <div className={Css.icons}>
              <div className={Css.icon}>
                <div className={Css.icon}>
                  <div className={Css.cart}>
                    <Link to="cart">
                      <BsCart />
                    </Link>
                    <div className={Css.total}>
                      <p>{total.length}</p>
                    </div>
                  </div>
                  <Link to="">
                    <FaSearch />
                  </Link>
                  <Link to="">
                    <FaGithub />
                  </Link>
                  <Link to="">
                    <CiLinkedin />
                  </Link>
                </div>
              </div>
              <div className={Css.menu}>
                <button onClick={() => Menu()}>
                  <AiOutlineMenu />
                </button>
              </div>
            </div>
          </nav>
        </header>
      </div>
      <div
        onClick={(r) => window.scrollTo(0, 0)}
        className={`${Css.arrowTop} ${setShow ? Css.shows : ""}`}
      >
        <button onClick={(r) => window.scrollTo(0, 0)}>
          <MdKeyboardDoubleArrowUp />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
