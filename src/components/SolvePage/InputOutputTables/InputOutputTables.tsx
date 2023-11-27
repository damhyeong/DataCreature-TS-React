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
                <td>Input Text</td>
                <td>Output Text</td>
                </thead>
                <tr>
                    <td>{input}</td>
                    <td>{output}</td>
                </tr>
            </table>
        </div>
    )
}
export default InputOutputTables;