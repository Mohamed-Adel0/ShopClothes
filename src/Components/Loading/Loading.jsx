import React, { useState } from "react";
import Css from "./Loading.module.css";
const Loading = () => {
  const [Sethide, Gethide] = useState(false);
  const [setnone, getnone] = useState(false);
  const hide = () => {
    Gethide(true);
  };
  const none = () => {
    getnone(true);
  };
  setTimeout(() => {
    hide();
  }, 3500);
  setTimeout(() => {
    none();
  }, 4300);
  return (
    <div>
      <div
        className={`${Css.parent} ${Sethide ? Css.hiddenSlow : ""} ${
          setnone ? Css.none : ""
        }`}
      >
        <div className={Css.page}>
          <div className={Css.container}>
            <div className={Css.ring}></div>
            <div className={Css.ring}></div>
            <div className={Css.ring}></div>
            <div className={Css.ring}></div>
            <div className={Css.h3}>loading</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
