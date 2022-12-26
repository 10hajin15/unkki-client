import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreateUnkki from "./createUnkki";

const CreateRollingpaper = () => {
  const [subTitle, setSubTitle] = useState('');
  const [title, setTitle] = useState('');
  const [exp, setExp] = useState('');

  const onChangeSubtitle = (e) => {
    setSubTitle(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeExp = (e) => {
    setExp(e.target.value);
  };

  return (
    <>
      <div className="main">
        <div className="top-space"></div>
        <div className="icon-area">
            <a href="/">
              <div className="home-icon">
                <img className="home-icon-image" src="../img/icon-home.png"></img>
              </div>
            </a>
        </div>
        <div className="create-title">롤링페이퍼 만들기</div>
        <div className="create-rollingpaper-contents">
          <div className="rollingpaper-input-area">
            <input className="subtitle-input" type="text" value={subTitle} onChange={onChangeSubtitle} placeholder="ex) 2023년 새해를 맞아 / 사랑스러운 / 귀염뽀짝한"/>
            <span className="subtitle-input-sub">,</span>
          </div>
          <div className="rollingpaper-input-area">
            <input className="title-input" type="text" value={title} onChange={onChangeTitle} placeholder="이름"/>
            <span className="title-input-sub">에게</span>
          </div>
          <div className="rollingpaper-input-area">
            <div className="exp-input-sub">나만의 롤링페이퍼 규칙이 있다면</div>
            <textarea className="exp-input" value={exp} onChange={onChangeExp} placeholder='"칸을 아끼지 마세요❣"등등 자유롭게 규칙을 정해보세요!'></textarea>
          </div>
        </div>
        <div className="next-area">
            <Link to="/createUnkki" className="button-create-rollingpaper">저장</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/createUnkki" element={<CreateUnkki/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default CreateRollingpaper;