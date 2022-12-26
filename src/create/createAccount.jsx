import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import CreateRollingpaper from "./createRollinpaper";
import axios from "axios";

const CreateAccount = () => {
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [duplication, setDuplication] = useState(''); // 'duplication', 'notDuplication'

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const onConfirmButtonClick = (e) => {
    console.log(id);
    if(id.trim() === ''){
      alert('닉네임을 입력해 주세요!');
      return;
    }
    axios({
      url: 'http://localhost:8080/confirmAccountId',
      method: 'get',
      params: {
        account_id: id
      }
    })
    .then((result) => {
      console.log(result.data);
      if (result.data.result === 'Y') {
        setDuplication('notDuplication');
      } else {
        setDuplication('duplication');
      }
      
    })
    .catch(() => {
      console.log("실패")
    })
  }


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
        <div className="account-area">
          <div className="account-id-area">
            <div className="account-value">닉네임</div>
            <label>
              <input className="account-input" type="text" value={id} onChange={onChangeId} placeholder="닉네임을 입력해 주세요."/>
              <button className="check-id-button" onClick={onConfirmButtonClick}>중복확인</button>
            </label>
            {
              duplication === ""
              ? <div className="check-id-result"></div>
              : duplication === "notDuplication" 
                ? <div className="check-id-result" style={{color:"#123FD6"}}>사용 가능한 닉네임입니다.</div>
                : <div className="check-id-result" style={{color:"#A61F12"}}>이미 사용 중인 닉네임입니다.</div>
            }
          </div>
          <div className="account-pwd-area">
            <div className="account-value">비밀번호</div>
            <input className="account-input" type="password" value={pwd} onChange={onChangePwd} placeholder="비밀번호를 입력해 주세요." />
          </div>
        </div>
        <div className="next-area">
            {
              duplication==="notDuplication" && pwd !==""
              ? <Link to="/createRollingpaper" className="button-create-rollingpaper">다음</Link>
              : <Link to="/createAccount" className="button-create-rollingpaper">다음</Link>
            }
        </div>
      </div>
      <div>
        <Routes>
          <Route path="/createRollingpaper" element={<CreateRollingpaper/>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default CreateAccount;