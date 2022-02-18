//問題演習モードの選択画面．ランダム出題と範囲出題．

import React, { Component } from 'react';
import {Link} from "react-router-dom";;

class ENSYU_MODE extends React.Component {
  render() {
    return (
      <div>
        <h1>問題演習モード</h1>
        <Link to={"/RANDOM_Q100"}>ランダム出題モード[100]問</Link><br/>
        <Link to={"/QUESTION100"}>範囲出題モード[100]問</Link><br/>
      </div>
    );
  }
}
export default ENSYU_MODE;