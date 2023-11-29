import React from 'react';
import "./style.scss";
import {Link} from "react-router-dom";

interface PIFace{
    id : number;
    title : string;
    level : number;
}

const ExampleListItem = (props : PIFace) => {
    const {id, title, level} = props;

    return (
        <div className={"example-list-item"}>
            <div className={"main-box"}>
                <div className={"item-left"}>
                    <div className={"example-id"}>
                        {id}
                    </div>
                </div>
                <div className={"item-middle"}>
                    <Link to={`/solvePage?examId=${id}&title=${title}&level=${level}&nickname=담순`} className={"example-title"}>
                        {title}
                    </Link>
                </div>
                <div className={"item-right"}>
                    <div className={"example-level"}>
                        LV_{level}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExampleListItem;