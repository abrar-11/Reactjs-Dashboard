import React from "react";

const LeftBarIcon = ({img,title}) => {
    return (
        <div className="text-center">
            <img src={`/images/${img}.png`} alt="" className="mx-auto pb-3 h-8 " />
            <p className="text-xs">{title}</p>
        </div>
    );
};

export default LeftBarIcon;
