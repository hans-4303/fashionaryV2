import React from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* 레이아웃 */}
        <Route path="/" element={<></>}></Route>
        {/* 홈 */}
        <Route index element={<></>}></Route>
        {/* 가입 */}
        <Route path="signup" element={<></>}></Route>
        {/* 로그인 */}
        <Route path="login" element={<></>}></Route>
        {/* 마이페이지, id로 넘어가기 */}
        <Route path="my-page/:memberIndex" element={<></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
