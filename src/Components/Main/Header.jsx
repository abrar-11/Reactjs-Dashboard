import React from "react";

const Header = () => {
    return (
        <div className="h-32 md:h-24 py flex flex-col md:flex-row  items-center justify-around md:justify-between ">
            <div className="w-full  md:w-4/12 flex items-center bg-gray-100 p-3 rounded shadow-md hover:shadow-lg overflow-hidden ">
                <img src="/images/search.png" alt="" className="h-4 w-4" />
                <input
                    type="text"
                    className="text-sm outline-none bg-gray-100 pl-4"
                    placeholder="search"
                />
            </div>
            <div className="w-6/12   md:w-3/12  flex items-center justify-around">
                <img src="/images/header1.png" alt="" className="icon" />
                <img src="/images/header2.png" alt="" className="icon" />
                <img
                    src="/images/header3.png"
                    alt=""
                    className=" h-4 hover:scale-105 cursor-pointer"
                />
            </div>
            <div className="w-full  md:w-3/12  items-center justify-around hidden  md:flex">
                <p className="text-gray-500">Wallets</p>
                <p className="text-gray-500">Invoice</p>
            </div>
        </div>
    );
};

export default Header;
