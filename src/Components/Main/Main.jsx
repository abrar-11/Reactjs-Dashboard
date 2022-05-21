import React from "react";
import Cards from "./Cards";
import Header from "./Header";

const Main = () => {
    return (
        <div className="bg-gray-50 h-screen  md:h-full w-8/12 px-10 lg:px-16 ">
            {/* Header */}
            <Header />

            {/* Cards */}
            <div className="flex flex-col md:flex-row items-center justify-between md:h-56 md:space-x-8 space-y-4 md:space-y-0  md:md-0 sbg-slate-400 overflow-hidden">
                {/* {title,name,perc,price,graph,perPortfolio */}
                <Cards
                    title="BTC"
                    name="Bitcoin"
                    perc="0.26"
                    price="22,710"
                    graph="graph1"
                    color='yellow'
                    perPortfolio="30"
                />
                <Cards
                    title="ETH"
                    name="Ethirium"
                    perc="0.26"
                    price="39,479"
                    graph="graph2"
                    color="emerald"
                    perPortfolio="40"
                />

                <Cards
                    title="LTC"
                    name="Litecoin"
                    perc="0.26"
                    price="29,170"
                    graph="graph3"
                    color="red"
                    perPortfolio="30"
                />
            </div>
        </div>
    );
};
// DAF7E8
// FFE1E1
export default Main;
