import React from "react";
import Css from "./SixSeaction.module.css";
import Picture1 from "./img_4.jpg";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";

const SixSeaction = () => {
  const Products = [
    {
      id: 1,
      title: "Subscribe to get discount coupons & new offers!",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt erat volutpat.",
      subscript: "SUBSCRIPT",
      follow: "Follow us on",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <img src={Picture1} alt="" />
          <div className={Css.container_text}>
            <div className={Css.cards}>
              {Products?.map((r) => (
                <div className={Css.card} key={r.id}>
                  <h3>{r.title}</h3>
                  <p>{r.paragraph}</p>
                  <form action="">
                    <input type="email" placeholder="Enter your email.." />
                    <button>{r.subscript}</button>
                  </form>
                  <h4>{r.follow}</h4>
                  <div className={Css.social}>
                    <Link to="">
                      <CiTwitter />
                    </Link>
                    <Link to="">
                      <FaFacebookF />
                    </Link>
                    <Link to="">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixSeaction;
