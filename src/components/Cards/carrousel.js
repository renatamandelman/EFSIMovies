import React from 'react'
import Card from './card'

const Carrousel = ({ peliculas }) => {
    return (
        <div className='flex row flex-nowrap overflow-auto'>
            {
                peliculas.map((pelicula) => {
                    return (
                        <Card key={pelicula.id} pelicula={pelicula} />
                    )
                })
            }
        </div>
    )
}

export default Carrousel