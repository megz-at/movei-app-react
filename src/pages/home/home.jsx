import { useEffect, useState } from "react";
import './style.css';
import axios from "axios";
import MovieCard from './../../components/movieCard/movieCard';

const Home = () => {
    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState(null);
    const [count, setCount] = useState(1);

    const fetchData = async (api) => {
        setLoading(true)
        try {
            const response = await axios.get(api);
            const data = response.data.results;
            setMoviesList(data);
            console.log(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = () => {
        let api = `https://api.themoviedb.org/3/search/movie?api_key=b932594aaa08e98c262cc502b4484e3d&query=${search}`;
        fetchData(api);
    };

    const handleReturn = () => {
        setSearch('');
        setCount(1);
        let api = `https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d&page=${count}`;
        fetchData(api);
    };

    useEffect(() => {
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=b932594aaa08e98c262cc502b4484e3d&page=${count}`;
        fetchData(url);
    }, [count]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <div className=" header col-lg-12">
                
                    <p className="text-center fs-1 text-light mb-4 pt-5">Megz Movei is Your address to movie worlds </p>
                    <p className=" fs-4 text-light  ps-5 pt-5">Trending movies  </p>
                    <p className=" fs-4 ps-5">to watch Right now</p>
                <div className=" d-flex  ms-5 pt-5 w-50 ">

                    <input
                        type="text"
                        className="form-control mt-3  "
                        style={{"height":"50px"}}
                        placeholder='Search for movies'
                        value={search}
                        onChange={handleSearch}
                    />
                    <button className="btn btn-primary   mx-2" onClick={handleSubmit}>Search</button>

                </div>
            </div>
            <div className="d-block">
                {moviesList.length > 0 ? (
                    <div className="row">
                        {moviesList.map((movie, key) => (
                            <div className="col-md-3 mb-4 " key={key}>
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>

                ) : (
                    <p className="text-center fs-5 text-danger">No movies found. Please try searching again.</p>

                )}
                {moviesList.length === 0 && search ? <button className="btn btn-light text-danger" onClick={handleReturn}>return</button> : <div className="d-flex justify-content-center align-items-center ">
                    {count > 1 && <button className="btn btn-primary mx-4 btn-lg px-4" onClick={() => setCount(count - 1)}>previous</button>}
                    <button className="btn btn-primary mx-4 btn-lg px-4" onClick={() => setCount(count + 1)}>next</button>

                </div>}
            </div>
        </div >
    );
};

export default Home;