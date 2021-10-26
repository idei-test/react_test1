import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// index.jsは最初に読み込まれる
// index.html の id 属性が root のhtml属性を読み取る
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

