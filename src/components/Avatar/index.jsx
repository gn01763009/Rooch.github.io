import React from 'react'
import img1 from '../../assets/Nfts/head-5.webp';
import img2 from '../../assets/Nfts/head-4.webp';
import img3 from '../../assets/Nfts/head-2.webp';
import { useNavigate } from 'react-router-dom';

const avatars = [
  {
    "name": "Walter White",
    "url": img2,
    "language": "English",
    "position": "Front-end",
    "country": "USA 🇺🇸"
  },
  {
    "name": "Rajesh Gupta",
    "url": img1,
    "language": "English",
    "position": "Back-end",
    "country": "India 🇮🇳"
  },
  {
    "name": "Jesse Chen",
    "url": img3,
    "language": "Chinese",
    "position": "Product Manager",
    "country": "Taiwan 🇹🇼"
  }
]

function Avatar() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-5'>
      <h1 className="text-5xl font-bold text-center mb-6">Our Interviewers</h1>
      <div className="flex flex-wrap justify-between w-full gap-5">
        {avatars.map((avatar, idx) => {
          return (
            <div style={{ animationDelay: `${idx * 0.2}s` }}
            className="border flex flex-col items-center gap-3 p-3 rounded-2xl flex-1 animate__animated animate__fadeInUp"
            key={idx}>
            <img src={avatar.url} alt={avatar.name} className="w-auto h-48 border border-gray-400 rounded-2xl" />
            <h1 className="text-xl font-bold">{avatar.name}</h1>
            <p className="text-sm">Position : {avatar.position}</p>
            <p className="text-sm">Language : {avatar.language}</p>
            <p className="text-sm">Country : {avatar.country}</p>
            <button onClick={() => {navigate('/loading')}} className="w-full p-3 bg-gray-100 rounded-md hover:bg-gray-300">
              Start 🚀
            </button>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Avatar