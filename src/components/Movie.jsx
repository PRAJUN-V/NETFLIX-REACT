import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { userAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'

export const Movie = ({ item }) => {

    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = userAuth()

    const movieID = doc(db, 'users', `${user?.email}`)

    const saveShows = async (e) => {
        e.stopPropagation();
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: item.id,
                    title: item.title,
                    img: item.backdrop_path,
                }),
            });
        } else {
            alert("Please log in to save a movie");
        }
    };


    return (
        <>
            <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
            <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {item?.title}
                </p>
                <p onClick={saveShows}>
                    {like ? <FaHeart className='absolute top-4 left-4 text-gray-300' /> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}
                </p>
            </div>
        </>
    )
}
