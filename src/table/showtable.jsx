

const ShowTable = ({albumMusicInfo}) =>  {
    return(
    <>
        {albumMusicInfo.map((data) => (
                <div key={data.id}>
                    <div className="trackName">{data.name}</div>
                    <div className="trackArtist"> <p>{albumMusicInfo.artists.map((data)=>(
                    <span key={data.id}>{data.name}</span>
                ))}</p></div>
                    <div className="albumName">{data.album.name}</div>
                </div> 
        ))}
    </>
    );
}


  export default ShowTable;