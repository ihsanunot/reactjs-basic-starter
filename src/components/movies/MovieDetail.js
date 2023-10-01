import React from 'react'

const MovieDetail = () => {
  return (
    <>
        <div className='float-start'>
        <small>Rating:</small>
    </div>

    <div className='float-end'>
        <span className='badge bg-secondary me-1'>Action</span>
    </div>

    <div className='clearfix'>
        <hr/>
        <table className='table table-dark table striped table-sm-mt-4'></table>
        <thead></thead>
        <tbody>
            <tr>
                <td>Title:</td>
            </tr>
            <tr>
                <td>Description:</td>
            </tr>
            <tr>
                <td>Runtime:</td>
            </tr>
        </tbody>
    </div>
    </>
  )
}

export default MovieDetail
