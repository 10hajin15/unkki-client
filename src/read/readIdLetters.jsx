import React, { useState } from "react";
import Modal from "./modalLetter";

const ReadLetters = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

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
          <div className="letters-area">
            <div className="letters-area-row letters-sub">편지를 눌러보세요!</div>
            <div className="letters-area-row letters-row">
              <div className="letters">
                <img className="letter-img" onClick={openModal} src="../img/icon-letter.png" alt="편지"/>
                <span className="letter-nickname">닉네임1</span>
              </div>
              <div className="letters">
                <img className="letter-img" onClick={openModal} src="../img/icon-letter.png" alt="편지"/>
                <span className="letter-nickname">닉네임1</span>
              </div>
              <div className="letters">
                <img className="letter-img" onClick={openModal} src="../img/icon-letter.png" alt="편지"/>
                <span className="letter-nickname">닉네임1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal open={modalOpen} close={closeModal}></Modal>
    </>
  );
}

export default ReadLetters;