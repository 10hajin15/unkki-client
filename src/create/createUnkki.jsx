import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const CreateUnkki = () => {
  return (
    <>
      <div className="main">
        <div className="top-space"></div>
        <div className="main-layout">
          <div className="icon-area">
            <a href="/">
              <div className="home-icon">
                <img className="home-icon-image" src="../img/icon-home.png" alt="HOME"></img>
              </div>
            </a>
            <div className="link-icon">
              <img className="link-icon-image" src="../img/icon-link.png" alt="링크복사"></img>
            </div>
          </div>
          <div className="rollingpaper-header">
            <div className="rollingpaper-header-text">2023년 새해를 맞아</div>
            <div className="rollingpaper-header-text"><span className="header-text-title">하진이</span><span>에게</span></div>
            <div className="rollingpaper-header-text header-text-exp">칸을 아끼지 마세요❣</div>
          </div>
          <div className="rollingpaper-contents">
            <div className="rollingpaper-img-area rollingpaper-img-light"><img className="rollingpaper-img" src="../img/streetlight-off.png" /></div>
            <div>
              <div className="rollingpaper-img-post-sub">우체통을 눌러보세요!</div>
              <div className="rollingpaper-img-area rollingpaper-img-post">
                  <Link to="/readLetters" className="rollingpaper-img"><img src="../img/post-close.png" className="rollingpaper-img"/></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateUnkki;