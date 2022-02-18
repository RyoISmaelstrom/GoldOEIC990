//メインメニュー．LOGINボタンと新規登録ボタンが存在．

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import LOG from "./LOGIN";
import ENSYU_MODE from "./ENSYU_MODE";
import Q100 from "./QUESTION100";
import RAM100 from "./RANDOM_Q100";
import RES from "./RESULT100";

function App(){
  return(
  <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LOG/>}/>
          <Route path="/ENSYU_MODE" element={<ENSYU_MODE/>}/>
          <Route path="/QUESTION100" element={<Q100/>}/>
          <Route path="/RANDOM_Q100" element={<RAM100/>}/>
          <Route path="/RESULT100" element={<RES/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App;