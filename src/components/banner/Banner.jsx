import React, { useEffect, useState } from 'react';
import './Banner.css'
import axios  from '../../axios';
import {API_KEY, imageUrl} from '../../constants/constants'



function Banner() {

    const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`discover/movie?api_key=${API_KEY}`).then((response) => {
            console.log(response.data.results[0]);
            setMovie(response.data.results[6])
        })

    },[]);
    return (
        <div class="flex items-center h-screen bg-cover bg-center " style={{backgroundImage:`url(${ movie ? imageUrl+movie.poster_path : "" })`, backgroundPosition: 'center top'}}>

            <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent h-screen"></div>
            <div className='content pl-10  '>
                <h1 className='heading text-white text-4xl font-semibold text-left mb-8'>{movie ? movie.title:""}</h1>
                <div className='buttons'>
                    <button className='play  px-5 py-2 mr-5 rounded cursor-pointer'>Play</button>
                    <button className='myList  px-5 py-2 rounded cursor-pointer'>My List</button>
                </div>
                <h1 className='discription mt-5 text-white'>{movie ? movie.overview:""}</h1>
            </div>
        </div>
    )
}   

export default Banner
