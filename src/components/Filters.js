import React from 'react'
import styled from 'styled-components'

const Filters = ({ filters }) => {
    return (
        filters.map(filter => (
            <div> { filter } </div>
        ))
    )
};

export default Filters