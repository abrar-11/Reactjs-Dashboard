import React from "react";

const Cards = ({title,name,perc,price,graph,color,perPortfolio}) => {
    return (
        <div className={`lg:w-1/3 h-full shadow-md bg-${color}-100  rounded-lg  p-4 flex flex-col justify-between `}>
            {/* topBar */}
            <div className=" flex align-top justify-between">
                <div className="">
                    <p className={`text-lg font-bold  text-${color}-500 `}>{title}</p>
                    <p className="text-xs">{name} to USD</p>
                </div>

                <div className={`w-max h-max rounded-xl font-medium bg-${color}-200 text-${color}-300  px-1 sm:px-3 py-1 text-sm`}>
                    +{perc}%
                </div>
            </div>

            {/* Graph */}
            <div className="my-4">
                <img src={`/images/${graph}.png`} alt="" className="my-auto" />
            </div>

            <div className="">
                <h1 className="text-gray-800 font-bold text-xl">${price}</h1>
                <p className="text-gray-500 text-xs font-md">
                    {perPortfolio}% of your portfolio
                </p>
            </div>
        </div>
    );
};

export default Cards;
