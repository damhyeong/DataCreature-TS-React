import React, {createRef, useCallback, useEffect, useRef, useState} from "react";
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

    const [title, setTitle] = useState<string>('');
    const [level, setLevel] = useState<number>(0);
    const [introduce, setIntroduce] = useState<string>('');
    const [constraints, setConstraints] = useState<string>('');
    const [examInput, setExamInput] = useState<string>('');
    const [examOutput, setExamOutput] = useState<string>('');

    const onClickUpload = useCallback(async (e : React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        // 여기에 입력하지 않은 값이 있는지 확인하는 코드를 작성해야 완벽.

        const payload = {
            title, level, introduce, constraints, examInput, examOutput
        }

        try{
            const token = localStorage.getItem('token');
            const response = await axios.post("http://localhost:4000/api/examples/examUpload", payload, {
                headers : {
                    Authorization : `Bearer ${token}`
                }
            });
            console.log("response : " + response);
        } catch (e){
            console.log(e);
        }

    }, [title, level, introduce, constraints, examInput, examOutput]);

    return (
        <div className={"upload-main-page"}>
            <div className={"upload-page-header"}>
                <div className={"project-title"}>Data Creature</div>
                <div className={"upload-button"} onClick={onClickUpload}>Upload</div>
            </div>
            <hr/>
            <div className={"upload-page-background"}>
                <div className={"upload-page-container"}>
                    <UploadInfoContainer
                        title={title} setTitle={setTitle}
                        level={level} setLevel={setLevel}
                        introduce={introduce} setIntroduce={setIntroduce}
                        constraints={constraints} setConstraints={setConstraints}
                        examInput={examInput} setExamInput={setExamInput}
                        examOutput={examOutput} setExamOutput={setExamOutput}
                    />
                </div>
            </div>
        </div>
    )
}
export default UploadMainPage;