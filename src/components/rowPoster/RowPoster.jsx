import React, { useEffect } from 'react'
import axios from '../../axios'
import { API_KEY } from '../../constants/constants'
import './RowPoster.css'


const RowPoster = () => {

  useEffect(()=>{
    axios.get(`movie/top_rated?api_key=${API_KEY} `).then((response)=>{
      console.log(response.data);
    })
  })
  
  return (
    <div className='container'>
      <div className='heading mt-20'>
        <h1 className='subHeadings text-white mb-8 text-xl ml-5'>Recommend</h1>
      </div>
      <div className='posters ml-5  flex w-screen space-x-6 overflow-x-auto overflow-y-hidden '>
        <div className='flex w-96 space-x-4'>
        <img className='rounded' src="https://i0.wp.com/tshirtsyndicate.com/wp-content/uploads/2016/05/Breaking-Bad-banner-e1510061278959.jpg?resize=768%2C340&ssl=1" alt=" 1" />
        <img className='rounded' src="https://i0.wp.com/tshirtsyndicate.com/wp-content/uploads/2016/05/Breaking-Bad-banner-e1510061278959.jpg?resize=768%2C340&ssl=1" alt=" 2" />
        <img className='rounded' src="https://i0.wp.com/tshirtsyndicate.com/wp-content/uploads/2016/05/Breaking-Bad-banner-e1510061278959.jpg?resize=768%2C340&ssl=1" alt=" 3" />
        <img className='rounded' src="https://i0.wp.com/tshirtsyndicate.com/wp-content/uploads/2016/05/Breaking-Bad-banner-e1510061278959.jpg?resize=768%2C340&ssl=1" alt=" 4" />
        </div>
      </div>
    </div>
  )
}

export default RowPoster
