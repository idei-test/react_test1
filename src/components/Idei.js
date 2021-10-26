import React from "react";



export const Idei = (props) => {
    console.log(props);
    const { color, fontSize, children } = props;
    const contents = {
        color,
        fontSize,
    }
    return <p color="green">{children}</p>
}

// デフォルト　エクスポートしない
// export default Idei;