import React from "react";
import LeftBar from "./Components/Left bar/LeftBar";
import Main from "./Components/Main/Main";
import SideBar from "./Components/Side Bar/SideBar";

const App = () => {
    return (
        <div className=" text-gray-600 flex">
            <LeftBar />
            <Main />
            <SideBar />
        </div>
    );
};

export default App;
