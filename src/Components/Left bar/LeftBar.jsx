import React from "react";
import LeftBarIcon from "./LeftBarIcon";

const LeftBar = () => {
    return (
        <div
            className="bg-yellow-50 h-screen  w-1/5 lg:w-1/12 
           
        flex flex-col items-center justify-start
        
        "
        >
            <div className="h-24 text-center flex items-center justify-center">
                <img src="/images/logo.png" alt="logo" />
            </div>

            <div className="py-8 space-y-7 ">
                <LeftBarIcon img="home" title="Home" />
                <LeftBarIcon img="account" title="Account" />
                <LeftBarIcon img="wallets" title="Wallets" />
                <LeftBarIcon img="buy" title="Buy/Sell" />
                <LeftBarIcon img="markets" title="Markets" />
                <LeftBarIcon img="settings" title="Settings" />
                <LeftBarIcon img="pages" title="Add Pages" />
            </div>
        </div>
    );
};

export default LeftBar;
