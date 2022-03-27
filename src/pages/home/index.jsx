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

        
        <ShowAlbum albumInfo={albumInfo} />
        <ShowTable albummusicInfo={albummusicInfo}/>

        <div style={{textAlign:'center'}}>
            <button type="button" className="btn-track-info">Select</button>
        </div>
    </div>
  );
};

export default Home;
