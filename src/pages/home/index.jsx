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

        <div className="clearfix"><ShowAlbum albumInfo={albumInfo} /></div>
        
       
        
        <div style={{textAlign:'center'}}>
            <button type="button" className="btn-track-info">Select</button>
        </div>
        <tr>
          <td className="TT">Name</td>
          <td className="TT">Artist </td>
          <td className="TT">Album</td>
        </tr> 
        <ShowTable albummusicInfo={albummusicInfo}/>
    </div>
  );
};

export default Home;
