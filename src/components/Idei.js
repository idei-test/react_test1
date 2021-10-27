import React from "react";



export const Idei = (props) => {
    console.log(props);
    // style属性内の値はstyleとして渡される
    const { style, children } = props;

    return <p style={style}>{children}</p>
}

// デフォルト　エクスポートしない
// export default Idei;