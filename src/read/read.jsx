import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ReadId from "./readId";

const Read = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePwd = (e) => {
    setPwd(e.target.value);
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
        <div className="read-title">롤링페이퍼 보러가기</div>
        <div className="account-area">
          <div className="account-id-area">
            <div className="account-value">닉네임</div>
            <label>
              <input className="account-input" type="text" value={id} onChange={onChangeId} placeholder="닉네임을 입력해 주세요."/>
            </label>
          </div>
          <div className="account-pwd-area">
            <div className="account-value">비밀번호</div>
            <input className="account-input" type="password" value={pwd} onChange={onChangePwd} placeholder="비밀번호를 입력해 주세요." />
          </div>
        </div>
        <div className="next-area">
            <Link to="/readId" className="button-read-id">다음</Link>
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/readId" element={<ReadId/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Read;