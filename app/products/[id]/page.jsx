"use client"

import players from "../../data/page"
import { useParams } from "next/navigation"
import { Image } from "react-bootstrap"

export default function ProductPage() {
  const params = useParams()
  const playerId = parseInt(params.id)

  const player = players.find((p) => p.id === playerId)

  if (!player) {
    return <p className='text-center mt-10 text-gray-500'>Player not found.</p>
  }

  return (
    <div className='p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-lg mt-10'>
      <div className='overflow-hidden rounded-xl mb-4'>
        <Image
          src={player.image}
          alt={player.name}
          width={600}
          height={400}
          className='w-full h-auto object-cover rounded-xl'
        />
      </div>
      <div className='text-center'>
        <p className='text-black text-2xl font-bold'>{player.name}</p>
        <p className='text-sm text-gray-500 mb-2'>{player.nickname}</p>
        <p className='text-gray-600 mb-2'>{player.description}</p>
        <p className='text-black font-semibold'>{player.jerseyPrice}</p>
      </div>
    </div>
  )
}
