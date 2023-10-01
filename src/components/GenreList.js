import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const GenreList = () => {
  
    const [genres, setGenres] = useState([])
  
    useEffect(() => {
        setGenres([
            {id:1, genre_name: 'Action'},
            {id:2, genre_name: 'Thriller'},
            {id:3, genre_name: 'Horror'}
        ])
    }, [])
    

    return (
    <div className='row'>
        {genres.map((genre, index) => (<div className='col-sm-2 mb-3'>
            <div className='card' key={index}>
                <div className='card-body text-center'>
                    <Link to={`/genres/${genre.id}`}>{genre.genre_name}</Link>
                </div>
            </div>
        </div> 
        ))}
    </div>
  )
}

export default GenreList