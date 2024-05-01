import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import Axios from "axios";
import { Movie } from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

export const Row = ({ title, fetchURL, rowId }) => {
    const [movies, setMovies] = useState([])
    


    useEffect(() => {
        Axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])
    // console.log(movies)

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowId)
        slider.scrollLeft = slider.scrollLeft + 500;
    }
    
    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
                <div style={{scrollbarWidth:"none"}} id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap relative'>
                    {movies.map((item, id) => (
                        <Movie key={id} item={item}/>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40}/>
            </div>
        </>
    )
}
