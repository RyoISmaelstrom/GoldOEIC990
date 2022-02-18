//問題出題と，回答画面．ここにfirebaseを差し込むことはできそうかな？
//範囲出題の画面

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Q100 extends React.Component {
  render() {
    return (
      <div>
        問題です.
        <Link to={"/RESULT100"}>
          <button>結果へ</button>
          </Link>
      </div>
    );
  }
}
export default Q100;