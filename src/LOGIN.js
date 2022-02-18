//LOGIN画面．今回はこの画面は問題演習モードの選択画面．

import React, { Component } from 'react';
import {Link} from "react-router-dom";

class LOGIN extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>GoldOEIC990</h1>
        <h4>TOEIC頻出英単語をランダムに出題．ゲーム感覚で勉強できる面白いWebサービスです．</h4>
        <Link to={"/ENSYU_MODE"}>
          <button>
            <h3>QUIZ START</h3>
          </button>
        </Link>
      </div>
    );
  }
}
export default LOGIN;