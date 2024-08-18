import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlist, removeWishList } from '../../redux/Action';

const MovieCard = ({ movie }) => {
    const history = useHistory()
    const viewMovie = (id) => {
        history.push(`/movieDetails/${id}`)
    }
    const wishlist = useSelector(state => state.WishListReducer)
    console.log(wishlist);


    const dispatch = useDispatch()
    console.log(dispatch);

    const addToWish = (movie) => {
        dispatch(addWishlist(movie))
    }
    const removeFromWish = (id) => { 
        dispatch(removeWishList(id))
    }
    const inWishlist = wishlist.find(item => item.id === movie.id);
    console.log(inWishlist);


    return (
        <div className=' mb-1 position-relative shadow-lg'>
            <div className="card bg-dark  overflow-hidden">
                <a onClick={() => viewMovie(movie.id)}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className=" card-img-top" alt={movie?.original_title
                    } />
                </a>
                <div className='d-flex justify-content-between align-items-center '>
                    <div className=" card-body text-light">
                        <h5 className="card-title">{movie.original_title
                        }</h5>
                        <p className="card-text text-darklight">Year: {movie?.release_date
                        }</p>
                    </div>
                    <div className='me-3 fs-2' onClick={inWishlist ? () => removeFromWish(movie.id) : () => addToWish(movie)}>
                        <i className={inWishlist ? "fa-solid text-danger fa-heart" : "fa-regular fa-heart"}></i>
                    </div>
                </div>
            </div>
            <div className={`d-flex justify-content-center align-items-center position-absolute p-3  ${movie.vote_average > 7 ? 'bg-warning' : 'bg-danger'} top-0 rounded-circle`} style={{"width":"30px","height":"0px"}}>{Math.floor(movie.vote_average)
            }</div>
        </div>
    );
}

export default MovieCard;
