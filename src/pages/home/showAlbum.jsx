const ShowAlbum = ({albumInfo}) =>  {
    return (
      <>
        <div className="musik">
            <div className="imggg">
                <img className="img2" src={albumInfo.album.images[0].url} alt="img" width="170" height="170"/>
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
      </>
    );
  }

  export default ShowAlbum;