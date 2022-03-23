// import React, { useState } from "react";
import albumInfo from "./albumInfo";
const Home = () => {
  return (
    <div>
        <div className="title">
            <h1>Dotify</h1>
        </div>

        <div className="musik">
            <div className="imggg">
                <img className="img2" src={albumInfo.album.images[0].url} alt=""/>
            </div>

            <div className="album">
                <h3>{albumInfo.album.name}</h3>
            </div>
            <div className="name">
                <p>{albumInfo.artists.map((data)=>(
                    <span key={data.id}>{data.name}</span>
                ))}</p>
            </div>
        </div>

        <div style={{textAlign:'center'}}>
            <button type="button" className="btn-track-info">Select</button>
        </div>
    </div>
  );
};

export default Home;
