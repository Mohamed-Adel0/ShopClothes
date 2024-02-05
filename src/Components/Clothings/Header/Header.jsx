import React from "react";
import Css from "./Header.module.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Header = () => {

  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <h3>Shop</h3>
            <div className={Css.src}>
              <Link to="/">Home</Link>
              <button>
                <MdOutlineKeyboardArrowRight />
              </button>
              <p>Accessories</p>
            </div>
          </div>
          <form action="">
            <div className={Css.search}>
              <input
                id="search"
                type="search"
                placeholder="Search Products.."
              />
              <label htmlFor="search">
                <CiSearch />
              </label>
            </div>
            <h5>
              Showing all <span>4</span> results
            </h5>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
