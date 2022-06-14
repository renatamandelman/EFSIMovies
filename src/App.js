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
        <div className='overflow-hidden w-100 h-100 ' style={{ backgroundColor: '#1597E5',color:"white"}}>
            <Navbar />
            {peliculasNowPlaying && <Carrousel titulo="Las mejores peliculas"  peliculas={peliculasNowPlaying} />}
            {peliculasPopulares && <Carrousel titulo="Las mas populares" peliculas={peliculasPopulares} />}
            <Footer />
        </div>
    );
}

export default App;
