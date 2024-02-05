import React from "react";
import Css from "./Address.module.css";
import { Link, useParams } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
const Address = () => {
  const numb = useParams();
  const useid = numb.id;
  const backData = useSelector((state) => state?.cart?.item);
  const text = backData.filter(
    (value, index, self) =>
      value.id == useid && index === self.findIndex((r) => r.id === value.id)
  );
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.card}>
            <h3>Shop</h3>
            <div className={Css.src}>
              <Link to="/">
                Home <MdOutlineKeyboardArrowRight className={Css.arrow} />
              </Link>
              <Link to="/clothings">
                Shop <MdOutlineKeyboardArrowRight className={Css.arrow} />
              </Link>
              {text?.map((r) => (
                <p key={r.id}>{r.paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
