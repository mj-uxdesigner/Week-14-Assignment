import { Link } from 'react-router-dom';

const MovieList = ({movies}) => {
    return(
        <div className="movie-list">
            {movies.map((movie) => (
                <div className="movie-preview" key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <img className='movieImage' src={`images/${movie.image}`} />
                        <h2>{ movie.title }</h2>
                        <p>Made By { movie.author }</p>
                    </Link>
                    
                </div>
            ))}
        </div>
    )
};

export default MovieList;