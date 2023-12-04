import React, {createRef, useCallback, useEffect, useRef} from "react";
import './styles.scss'
import UploadInfoContainer from "../UploadInfoContainer/UploadInfoContainer";
import axios from "axios";


interface UploadIFace{
    title : string;
    level : number;
    introduce : string;
    constraints : string;
    examInput : string;
    examOutput : string;
}

const UploadMainPage = () => {

    const onClickUpload = useCallback(async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        /**
         * 필수 - title, introduce, examOutput
         * 문자열이 '' 일 때, 묻기
         * - constraints(문제에 대해 더 이상 힌트를 주거나, 변수의 범위를 정할 필요가 없는지,
         * - examInput(문제에 입력 값은 필요 없는지.
         * 위의 두 조건에 대해 NOT NULL 표시를 해 놓았으므로, ALTER TABLE DDL을 통해 속성을 변경시킬 필요가 있어 보인다.
         * - constraints가 '' : 빈 문자열일 경우, SolvePage Component에서 아예 display : none 속성을 적용시키는 것도 좋은 방법이다.
         *
         * const data = await axios.post("url");
         * axios.post 를 통해 INSERT 문을 실행 시킬 때는 모든 것이 완벽 할 때 실행한다.
         * */

    }, []);

    // useRef를 통해 하위 컴포넌트에 모든 정보를 묶어서 Props로 내려보낼 경우,
    // 하나의 값을 제외한 모든 값을 다시 복사하는 비효율적인 상황이 연출된다.
    // 추후 useReducer 적용을 통해 최적화를 하는 것도 좋은 방법이라 생각된다.
    const titleRef = useRef<string>('');
    const levelRef = useRef<number>(0);
    const introduceRef = useRef<string>('');
    const constraintsRef = useRef<string>('');
    const examInputRef = useRef<string>('');
    const examOutputRef = useRef<string>('');

    return (
        <div className={"upload-main-page"}>
            <div className={"upload-page-header"}>
                <div className={"project-title"}>Data Creature</div>
                <div className={"upload-button"}>Upload</div>
            </div>
            <hr/>
            <div className={"upload-page-background"}>
                <div className={"upload-page-container"}>
                    <UploadInfoContainer
                        titleRef={titleRef}
                        levelRef={levelRef}
                        introduceRef={introduceRef}
                        constraintsRef={constraintsRef}
                        examInputRef={examInputRef}
                        examOutputRef={examOutputRef}
                    />
                </div>
            </div>
        </div>
    )
}
export default UploadMainPage;