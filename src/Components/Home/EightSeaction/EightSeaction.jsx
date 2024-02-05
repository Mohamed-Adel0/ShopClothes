import React from "react";
import Css from "./EightSeaction.module.css";
import { TbPlaneTilt } from "react-icons/tb";
import { LiaCcVisa } from "react-icons/lia";
import Picture1 from "./Picture/payment_methods.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
const EightSeaction = () => {
  const Products = [
    {
      id: 1,
      title: "Payment method",
      icon: <LiaCcVisa />,
      paragraph: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`,
      image: Picture1,
    },
    {
      id: 2,
      title: "Shipment and delivery",
      paragraph: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.`,
      icon: <TbPlaneTilt />,
      text: "Lorem ipsum dolor sit amet",
      twotext: "Morbi rutrum ex ultricies, mollis magna sed",
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          {Products?.map((r) => (
            <div className={Css.card} key={r.id}>
              <button>{r.icon}</button>
              <h3>{r.title}</h3>
              <p>{r.paragraph}</p>
              <div className={Css.img}>
                <img src={r.image} alt="" />
              </div>
              <h4><MdKeyboardArrowRight className={Css.arrow}/> {r.text}</h4>
              <h4><MdKeyboardArrowRight className={Css.arrow}/> {r.twotext}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EightSeaction;
