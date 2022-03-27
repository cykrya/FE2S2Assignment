

const ShowTable = ({albummusicInfo}) =>  {
    return(
    <>
        {albummusicInfo.map((data) => (
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
        ))}
    </>
    );
}



  export default ShowTable;