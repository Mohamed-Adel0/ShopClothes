import React from "react";
import Css from "../TwoSeaction/TwoSeaction.module.css";
import Picture1 from "./Pictures/img_1.jpg";
import Picture2 from "./Pictures/img_2.jpg";
import Picture3 from "./Pictures/img_3.jpg";
import { Link } from "react-router-dom";
const TwoSeaction = () => {
  const Products = [
    {
      id: 1,
      title: "Clothings",
      image: Picture2,
      numb: "5",
      src: "clothings",
    },
    {
      id: 2,
      title: "Accessories",
      image: Picture1,
      numb: "4",
      src: "clothings/accessories",
    },
  ];
  const timer = [
    {
      id: 1,
      title: "WEEKS",
      hour: "0",
      minte: "0",
    },
    {
      id: 2,
      title: "DAYS",
      hour: "0",
      minte: "0",
    },
    {
      id: 3,
      title: "HOURS",
      hour: "0",
      minte: "0",
    },
    {
      id: 4,
      title: "MINUTES",
      hour: "0",
      minte: "0",
    },
    {
      id: 5,
      title: "SECONDS",
      hour: "0",
      minte: "0",
    },
  ];

  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={Css.cards}>
            {Products?.map((r) => (
              <Link
                onClick={() => window.scrollTo(0, 195)}
                to={`${r.src}`}
                key={r.id}
              >
                <div className={Css.card}>
                  <div className={Css.img}>
                    <img src={r.image} alt="" />
                    <div className={Css.text}>
                      <div className={Css.paragraph}>
                        <h4>{r.title}</h4>
                        <p>{r.numb}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div data-aos="zoom-in-right" className={Css.cardd}>
            <div className={Css.bg}>
              <img src={Picture3} alt="" />
              <div className={Css.text}>
                <div className={Css.paragraph}>
                  <h3>Sale for this fall starts in</h3>
                  <div className={Css.box}>
                    {timer?.map((r) => (
                      <div className={Css.boxCard} key={r.id}>
                        <div className={Css.timer}>
                          <h1>{r.hour}</h1>
                          <h1>{r.minte}</h1>
                        </div>
                        <h4>{r.title}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoSeaction;
