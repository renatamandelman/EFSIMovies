import React from 'react'

const card = ({ pelicula }) => {
    return (
        <div className="card" style={{ 'minWidth': '15vw' }}>
            <img src={`https://www.themoviedb.org/t/p/w200/${pelicula.poster_path}`} className="" width='100%' alt="..."></img>
            <div className="card-body">
                <h4 className="card-title">{pelicula.title}</h4>
                <p className="card-text">{pelicula.vote_average}/10</p>
            </div>
        </div>

    )
};

export default card