import "./movieCard.css";

function MovieCard({ movie }) {
  function onClickFav() {
    alert("favourite button clicked");
  }
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src="" alt="my-movie" />
        <div className="movie-overlay">
          <button className="fav-btn" onClick={onClickFav}>
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
