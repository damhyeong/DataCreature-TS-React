import React, {useCallback, useRef} from "react";
import './styles.scss'
import UploadInfoContainer from "../UploadInfoContainer/UploadInfoContainer";
import axios from "axios";


interface UploadIFace{
    title : string | null;
    level : number | null;
    introduce : string | null;
    constraints : string | null;
    examInput : string | null;
    examOutput : string | null;
}

const UploadMainPage = () => {

    const willUploadData : UploadIFace = {
        title : null,
        level : null,
        introduce : null,
        constraints : null,
        examInput : null,
        examOutput : null,
    }

    const onClickUpload = useCallback(async (e : React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();



        //const data = await axios.post("url");

    }, []);

    // willUploadData 그리고 infoContainerRef의 동일화 완료해야 함
    const infoContainerRef = useRef<UploadIFace>(willUploadData);

    return (
        <div className={"upload-main-page"}>
            <div className={"upload-page-header"}>
                <div className={"project-title"}>Data Creature</div>
                <div className={"upload-button"}>Upload</div>
            </div>
            <hr/>
            <div className={"upload-page-background"}>
                <div className={"upload-page-container"}>
                    <UploadInfoContainer ref={infoContainerRef}/>
                </div>
            </div>
        </div>
    )
}
export default UploadMainPage;