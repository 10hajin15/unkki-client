import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './src/home';
import Read from './src/read/read';
import ReadId from './src/read/readId';
import ReadLetters from './src/read/readIdLetters';
import CreateAccount from './src/create/createAccount';
import CreateRollingpaper from './src/create/createRollinpaper';
import CreateUnkki from './src/create/createUnkki';
import SendMessage from './src/send/sendMessage';

const Unkki = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/read" element={<Read/>}></Route>
      <Route path="/readId" element={<ReadId/>}></Route>
      <Route path="/readLetters" element={<ReadLetters/>}></Route>
      <Route path="/createAccount" element={<CreateAccount/>}></Route>
      <Route path="/createRollingpaper" element={<CreateRollingpaper/>}></Route>
      <Route path="/createUnkki" element={<CreateUnkki/>}></Route>
      <Route path='/sendMessage' element={<SendMessage/>}></Route>
    </Routes>
  );
};

export default Unkki;