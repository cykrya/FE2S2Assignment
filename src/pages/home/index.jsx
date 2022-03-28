// import React, { useState } from "react";
import ShowAlbum from "./showAlbum";
import albumInfo from "./albumInfo";
import ShowTable from "../../table/showtable";
import albummusicInfo from "./albummusicInfo";
const Home = () => {
  return (
    <div>
        <div className="title">
            <h1>Dotify</h1>
        </div>

        {/* <div className="clearfix"><ShowAlbum albumInfo={albumInfo} /></div> */}
        <div className="clearfix"><ShowTable albummusicInfo={albummusicInfo}/></div>
    </div>
  );
};

export default Home;
