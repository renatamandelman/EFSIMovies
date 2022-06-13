import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Carrousel from './components/Cards/carrousel';
import Footer from './components/footer';
import { obtenerPeliculaPorTipo } from './Fetch';


function App() {
    const [peliculasPopulares, setPeliculasPopulares] = useState([])
    const [peliculasNowPlaying, setPeliculasNowPlaying] = useState([])
    useEffect(() => {
        (async () => {
            const { data: populares } = await obtenerPeliculaPorTipo('popular');
            setPeliculasPopulares(populares.results);
            console.log('popular', populares.results);

            const { data: nowPlaying } = await obtenerPeliculaPorTipo('now_playing');
            setPeliculasNowPlaying(nowPlaying.results);
            console.log('peliculasLatest', nowPlaying.results);
        })();
    }, [])

    return (
        <div className='overflow-hidden'>
            <Navbar />
            {peliculasNowPlaying && <Carrousel peliculas={peliculasNowPlaying} />}
            {peliculasPopulares && <Carrousel peliculas={peliculasPopulares} />}
            <Footer />
        </div>
    );
}

export default App;
