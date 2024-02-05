import React from "react";
import Css from "./ThreeSeaction.module.css";
import { NavLink, Outlet } from "react-router-dom";
import Home from "../Home/Home";
import TwoSeaction from "../TwoSeaction/TwoSeaction";
import SixSeaction from "../SixSeaction/SixSeaction";
import SevenSeaction from "../SevenSeaction/SevenSeaction";
import EightSeaction from "../EightSeaction/EightSeaction"
const ThreeSeaction = () => {
  return (
    <div>
      <Home />
      <TwoSeaction />
      <div className={Css.parent}>
        <div className={Css.container}>
          <header className="outlet">
            <h3>Check out what's new</h3>
            <p>Latest of the trends we have to offer</p>
            <nav className="checkOut">
              <ul>
                <li>
                  <NavLink to="/">All</NavLink>
                </li>
                <li>
                  <NavLink to="accessories">Accessories</NavLink>
                </li>
                <li>
                  <NavLink to="clothing">Clothings</NavLink>
                </li>
                <li>
                  <NavLink to="shirts">Shirts</NavLink>
                </li>
                <li>
                  <NavLink to="shoes">Shoes</NavLink>
                </li>
                <li>
                  <NavLink to="shorts">Shorts</NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <div className={Css.card}>
            <Outlet></Outlet>
            {/* Hna m7tag a3ml el card's ly outlet */}
          </div>
        </div>
      </div>
      <SixSeaction />
      <SevenSeaction />
      <EightSeaction />
    </div>
  );
};

export default ThreeSeaction;
