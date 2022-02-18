//ランダム出題の開始画面

import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class RANDOM_Q100 extends React.Component {
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
export default RANDOM_Q100;