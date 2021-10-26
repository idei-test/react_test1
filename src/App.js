/* eslint react-hooks/exhaustive-deps: off */
// 解析ツールでは、hooksに使用する変数はすべて記述しなければならないが
// 警告を無効化するために上記を追記する。

//ステートと、エフェクトが取り込まれる
import React, { useEffect, useState } from "react";

// 自分で作成したコンポーネント
import Colorfull from "./components/Coloerfull";

// デフォルトエクスポートでない場合は{}でインポートしなければならない
import { Idei } from "./components/Idei"

// Appコンポーネント
// コンポーネント名は必ず先頭を大文字から初めるようにすること
const App = () => {

  // HOOKS　フック
  //ステートから返される要素は　変数、更新関数
  // 引数で初期値
  const [num, setNum] = useState(0);
  const [flag, change] = useState(false);

  /* クラスコンポーネント
   いままでステートはこっちしか使えなかった
  
   関数コンポーネント
   Hooksにより、ステートが使えるようになったため← 現在主流な方法
  */

  // 更新関数を使用
  const onClickCount = () => setNum(num + 1);
  const onof = () => { change(!flag) }

  // 第二引数の配列に指定されている変数の変更のみ処理を行う
  // (空配列では最初のみレンダリングされる)
  useEffect(() => {

    // numの数値により表示するかフラグを操作
    // &&や||がないと再レンダリングが繰り返されてto many re render Error
    if (num % 3 === 0) {
      // フラグがfalseなら更新する
      flag || change(true);
    } else {
      // フラグがtrueなら更新する
      flag && change(false);
    }

    // 第二引数にnum変数を指定　numを監視
    // num以外の更新では無視される
  }, [num]);

  /* ------ コンポーネント再レンダリング ---
   ステートの更新を感知した場合、
   親コンポーネントの再レンダリングされた場合、
   propsの中身が変更された場合
  */

  // -- スタイル設定のオブジェクト ---------------
  const contentStyle = {
    color: 'blue',
    fontSize: '18px'
  }

  // ---------------- jsx記法-------------------------------------------------　
  // ()内でhtmlタグを記述でき、内部にjsを埋め込める
  return (
    // <React.Flagment>の省略で<> (reactでは返せるのは一つのタグのみ)
    // {}でjs記入を表す {{}}内部のカッコはjsのオブジェクト
    <>
      <h1 style={{ color: 'red' }}>こんにちは</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <p style={contentStyle}>お元気です！</p>
      <button onClick={onClickCount}>カウント</button>

      <Colorfull color='blue'>お元気そうで何よりです。</Colorfull>

      <Idei style={contentStyle}>私の名前は出射です</Idei>

      <button onClick={onof}>on off</button>
      <p>ステート{num}</p>

      <p hidden={!flag}>!(^^)!</p>
      {flag || <p>...</p>}
    </>
  );
};

// 上記の内容を外部に公開　Appコンポーネント
export default App;


