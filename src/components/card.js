import React from 'react'
import { Link } from 'react-router-dom';

const card = ({ pelicula }) => {
    return (
        <Link to={`/${pelicula.id}`}>
            <div className="p-6 border bg-light">
                <div className="card border-0" style={{ minWidth: '15vw' }}>
                    <img src={`https://www.themoviedb.org/t/p/w200/${pelicula.poster_path}`} className="" width='100%' alt="..."></img>
                    <div className="card-body" style={{color:"black" }}>
                        <h4  className="card-title" >{pelicula.title}</h4>
                        <p className="card-text">{pelicula.vote_average}/10</p>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default card