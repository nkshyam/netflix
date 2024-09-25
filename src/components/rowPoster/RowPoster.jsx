import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import {imageUrl } from '../../constants/constants'
import './RowPoster.css'


const RowPoster = (props) => {

  const [movies, setMovie] = useState([])

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results)
    }).catch(err => {
      alert('Network error')
    })
  })
  
  return (
    <div className=''>
      <div className='heading mt-5'>
        <h1 className=' subHeadings text-white mb-5 text-xl ml-5'>{props.title}</h1>
      </div>
      <div className='yscrollBar posters ml-5  space-x-4 overflow-x-auto  '>
        <div className=' flex  space-x-4'>
          {movies.map((obj)=>
              <img className='rounded w-40 h-60 md:w-44 md:h-66 lg:w-48 lg:h-72' src={`${imageUrl+obj.poster_path}`} alt=" 1" />
          )}
  
        </div>
      </div>
    </div>
  )
}

export default RowPoster
