import React from 'react'
import Card from './card'

const Carrousel = ({ peliculas, titulo }) => {
    return (
        <div className='my-3 mx-3'>
            <h3>{titulo}</h3>
            <div className='flex row flex-nowrap overflow-auto'>
                {
                    peliculas.map((pelicula) => {
                        return (
                            <Card key={pelicula.id} pelicula={pelicula} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Carrousel