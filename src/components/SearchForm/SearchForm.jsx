import React from 'react'
import PropTypes from 'prop-types'; 

export const SearchForm = ({requestInfo}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        requestInfo(e.target.search.value)
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="search">
            <input name="search" type="text" placeholder='Ingresar pelicula'/>
        </label>
        <button type='submit'>
            Buscar
        </button>
    </form>
  )
}

SearchForm.protoTypes = {
    requestInfo: PropTypes.func
}