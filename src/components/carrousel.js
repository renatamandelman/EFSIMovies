import React from 'react'
import Card from './card'
import Filters from './Filters'

const Carrousel = ({ filters, peliculas, titulo }) => {
    return (
        <div className='my-3 mx-3'>
            <div className='d-flex'>
                <h3 className='pr-3'>{titulo}</h3>
                <Filters  filters={filters}  />
            </div>
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