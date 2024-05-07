import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import Axios from "axios";
import { Movie } from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import TrailerModal from './TrailerModal';
import { arrayUnion, doc, updateDoc } from "firebase/firestore";


export const Row = ({ title, fetchURL, rowId }) => {
    const [movies, setMovies] = useState([])
    const [trailer, setTrailer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleMovie = async (id) => {
        try {
            const trailerResponse = await Axios.get(
                `http://api.themoviedb.org/3/movie/${id}/videos?api_key=de6aa365c3a8b8a53dc8204c32c1d18b&language=en-US`
            );
            setTrailer(trailerResponse.data.results[0]);
            setIsModalOpen(!isModalOpen);
        } catch (error) {
            console.log("Error fetching trailer:", error);
        }
    };

    const closeModal = () => {
        setIsModalOpen(!isModalOpen);
    };



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
                <MdChevronLeft onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
                <div style={{ scrollbarWidth: "none" }} id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap relative'>
                    {movies.map((item, id) => (
                        <div key = {id} onClick={() => handleMovie(item.id)} className='w-[160px] sm:w-[200px] md:w-[240] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                            <Movie key={id} item={item} />
                        </div>
                    ))}
                </div>
                <MdChevronRight onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' size={40} />
            </div>
            {isModalOpen && (
                <TrailerModal
                    visible={isModalOpen}
                    trailer={trailer}
                    onClose={closeModal}
                />
            )}
        </>
    )
}
