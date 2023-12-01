import React, {useCallback, useEffect, useState} from "react";
import './styles.scss';

interface PFace{
    onClickLevel : (id : number) => void;
    level : number;
}


const LevelSelector = ({onClickLevel, level} : PFace) => {
    const [levels, setLevels] = useState([
        {lv : 0}, {lv : 1}, {lv : 2}, {lv : 3}, {lv : 4}, {lv : 5}, {lv : 6}
    ]);
    const onClickDivBox = useCallback((id : number) => {
        onClickLevel(id);
    }, [onClickLevel]);

    useEffect(() => {
        console.log('테스팅 용 : 추후 지워야 함 level : ' + level);

    }, [level]);

    return (
        <div className={"level-container"}>
            {levels.map((value, index) =>
                (value.lv === level) ?
                    (<div onClick={()=> onClickDivBox(value.lv)} className={"selected"} key={value.lv}>{value.lv}</div>)
                    : (<div onClick={()=> onClickDivBox(value.lv)} className={"notSelected"} key={value.lv}>{value.lv}</div>)
            )}
        </div>
    )
};
export default LevelSelector;