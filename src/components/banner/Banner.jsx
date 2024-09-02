import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div class="flex items-center h-96 bg-cover bg-center bg-[url('https://wallpapers.com/images/high/money-heist-nairobi-poster-fu8844bhtgm75weu.webp')]">
            <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
            <div className='content pl-10  '>
                <h1 className='heading text-white text-4xl font-semibold text-left mb-8'>Money Heist</h1>
                <div className='buttons'>
                    <button className='play  px-5 py-2 mr-5 rounded cursor-pointer'>Play</button>
                    <button className='myList  px-5 py-2 rounded cursor-pointer'>My List</button>
                </div>
                <h1 className='discription mt-5 text-white'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual</h1>
            </div>
        </div>
    )
}

export default Banner
