import Axios from 'axios';
import React, { useState } from 'react';

const IMDb_api_API_KEY = 'k_0H358DEO';
const IMDb_base_url = 'https://imdb-api.com/';

function getMostPopularMovies(lang: string): Promise<any> {
    return Axios.get(`${IMDb_base_url}${lang}/API/MostPopularMovies/${IMDb_api_API_KEY}`);
}

function App() {
    const [movies, setMovies] = useState<any[]>([]);

    const refreshList = () => {
        getMostPopularMovies('en').then((response: any) => {
            setMovies([{ title: 'First' }]);
            console.log(movies);
        });
    };

    return (
        <div className="App text-snow">
            <div>
                {movies.map((movie: any, index: number) => {
                    return <div key="index">{movie.title}</div>;
                })}
            </div>
            <button
                className="bg-primaryColor text-white font-bold py-2 px-4 rounded"
                onClick={() => refreshList()}
            >
                Refresh
            </button>
            Hello
        </div>
    );
}

export default App;
