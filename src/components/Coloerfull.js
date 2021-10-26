import React from "react";

// 外部から新たなタグとして呼び出される
// 呼び出されるときにpropsに値をわたされ処理できる
const Colorfull = (props) => {
    // プロップスを受け取り分割代入で取り出し
    const { color, children } = props;
    const content = {
        color, //オブジェクト名と変数名が同じなら名称宣言省略
    }
    // 属性の値、タグの内容　どちらも{}で代入できる
    return <p style={content}>{children}</p>
}
// 外部公開
export default Colorfull;