import React from "react";
import { Link, useLocation } from "react-router-dom";

const ReadId = () => {
  const location = useLocation();

  const id = location.state.id;
  const subTitle = location.state.subTitle;
  const title = location.state.title;
  const exp = location.state.exp;
  const letters = location.state.letters;

  const onCopyLinkClick = () => {
    let copyLink = `http://www.unkki.com/sendMessage?${id}`;

    navigator.clipboard.writeText(copyLink)
      .then(() => {
        console.log("Success Copied!");
        alert("링크가 복사되었습니다.");
      })
      .catch(() => console.log("Fail Copied!"))    
  };

  return (
    <>
      <div className="main">
        <div className="top-space"></div>
        <div className="main-layout">
          <div className="icon-area">
            <a href="/">
              <div className="home-icon">
                <img
                  className="home-icon-image"
                  src="../img/icon-home.png"
                  alt="HOME"
                ></img>
              </div>
            </a>
            <div className="link-icon" onClick={onCopyLinkClick}>
              <img
                className="link-icon-image"
                src="../img/icon-link.png"
                alt="링크복사"
              ></img>
            </div>
          </div>
          <div className="rollingpaper-header">
            <div className="rollingpaper-header-text">{subTitle}</div>
            <div className="rollingpaper-header-text">
              <span className="header-text-title">{title}</span>
              <span>에게</span>
            </div>
            <div className="rollingpaper-header-text header-text-exp">
              {exp}
            </div>
          </div>
          <div className="rollingpaper-contents">
            <div className="rollingpaper-img-area rollingpaper-img-light">
              <img
                className="rollingpaper-img"
                src="../img/streetlight-off.png"
              />
            </div>
            <div>
              <div className="rollingpaper-img-post-sub">
                우체통을 눌러보세요!
              </div>
              <div className="rollingpaper-img-area rollingpaper-img-post">
                <Link
                  to="/readLetters"
                  state={{ id, subTitle, title, exp, letters }}
                  className="rollingpaper-img"
                >
                  <img
                    src="../img/post-close.png"
                    className="rollingpaper-img"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadId;
