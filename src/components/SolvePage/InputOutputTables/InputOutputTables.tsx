import React from "react";
import './styles.scss';

interface PFace{
    input : string;
    output : string;
}

const InputOutputTables = ({input, output} : PFace) => {
    // 추후 input, output을 배열로 받았을 상황을 가정해야 한다.
    return (
        <div className={"container"}>
            <table>
                <thead>
                <td><div className={"header-input-title"}>Input Text</div></td>
                <td><div className={"header-output-title"}>Output Text</div></td>
                </thead>
                <tr>
                    <td><div className={"input-string"}>{input}</div></td>
                    <td><div className={"output-string"}>{output}</div></td>
                </tr>
            </table>
        </div>
    )
}
export default InputOutputTables;