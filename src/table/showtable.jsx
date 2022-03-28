

const ShowTable = ({albummusicInfo}) =>  {
    return(
    <div className="albumtable">
        {/* {albummusicInfo.map((data) => (
                <div className="teble"><tr key={data.id}>
                   <td ><p className="tabl trackName">{data.name}</p></td>
                    
                    <td> <p className=" tabl trackArtist">{data.artists.map((data)=>
                        (
                            <span key={data.id}>{data.name}</span>
                        ))}
                    </p>
                    </td>

                    <td ><p className="tabl albumName">{data.album.name}</p></td>
                </tr> 
                </div>
        ))} */}
        {albummusicInfo.map((data) => (
           <>
            <div className="musik">

                <div className="imggg">
                    <img className="img2" src={data.album.images[1].url} alt="img" width="170" height="170"/>
                </div>

                <div className="album">
                    <h3 className="tabl trackName">{data.name}</h3>
                </div>

                <p>{data.album.name}</p>
                
                <div className="name">
                    <p>{data.artists.map((data)=>(
                        <span key={data.id}>{data.name}</span>
                    ))}</p>
                </div>

            </div>

            <div style={{textAlign:'center'}}>
                <button type="button" className="btn-track-info">Select</button>
            </div>
            </>
        ))}
    </div>
    );
}



  export default ShowTable;