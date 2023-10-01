import React from 'react'
import { useParams } from 'react-router-dom'
import MovieDetail from '../../components/movies/MovieDetail'

const ShowMovie = () => {

    let {id} = useParams();

  return (
   <>
    <h2>Movie: {id} </h2>
    <MovieDetail/>
   </>
  )
}

export default ShowMovie