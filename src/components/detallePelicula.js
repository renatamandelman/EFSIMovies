import React, {useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { obtenerPeliculaPorId } from "../Fetch";
import './styles.css';

const detallePelicula = () => {
    const {id} = useParams()
    const [pelicula, setPelicula] = useState()
    
    const fetchPelis = async() => {
        const results = await obtenerPeliculaPorId(id)
        console.log(results.data);
        setPelicula(results.data)
        

    }

    useEffect(() => {
        (async () => {
            await fetchPelis()
            console.log(pelicula);
        })()
    }, [])
    

    return (
        pelicula && <>
        <div className="w-100"   >
        <img alt={pelicula.title} className='fondoImg ' src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${pelicula.backdrop_path}`} />
        </div>
        <div className="informacion" > 
        <Link to="/" className="btn btn-secondary mb-3">Volver</Link> 
        <h1 className="titulo ">{pelicula.title}</h1>
    
        <div className="row">
        <img alt={pelicula.title} className="detalleImg" src={`https://image.tmdb.org/t/p/w200/${pelicula.poster_path}`} />
       <div className="row">
       <div className="col-md-2 listado">
        
        <p >
                     <h1>Fecha de estreno:</h1> <b>{ pelicula.release_date } | </b>   {/* Fecha De Salida */}
                        <b>({ pelicula.spoken_languages.map(lang => lang.iso_639_1.toUpperCase()).join(', ') }) | </b> {/* Idiomas */}
                        <b>{ pelicula.genres.map(genero => genero.name).join(', ') } | </b> {/* Generos */}
                        <b>{ pelicula.adult && <span> | <span className="mayor_edad">+18</span></span> }</b> {/* Es +18 */}
                    </p>
                    </div>
                    </div>
            </div>
         
            </div>
        </>
    )
    
}

export default detallePelicula