import React from 'react';
import "./style.scss";

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
                    <div className={"example-title"}>
                        {title}
                    </div>
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