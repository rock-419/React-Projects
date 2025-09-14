"use client"
import { useEffect, useState } from "react"
import { Image } from "react-bootstrap"

const PlayerCard = ({
  name,
  jerseyPrice,
  description,
  nickname,
  image,
  direction = "right",
}) => {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])
  
    const handlePurchase = () => {

      const currentCount = localStorage.getItem("cartCount")
      const newCount = currentCount ? parseInt(currentCount) + 1 : 1
      localStorage.setItem("cartCount", newCount)
      window.dispatchEvent(new Event("storage"))
}

  return (
    <div
      className={`
        bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm mx-auto
        transition-transform transform
        ${
          animate
            ? "translate-x-0 opacity-100"
            : direction === "right"
            ? "translate-x-40 opacity-0"
            : "-translate-x-40 opacity-0"
        }
        duration-700 ease-out
        hover:shadow-2xl hover:-translate-y-1
      `}
    >
      <div className='overflow-hidden rounded-xl mb-4'>
        <Image
          src={image}
          alt={name}
          width={400}
          height={300}
          className='w-full h-auto object-cover rounded-xl'
        />
      </div>
      <div className='text-center'>
        <p className=' text-black text-lg'>{name}</p>
        <p className='text-sm text-gray-500 mb-2'>{nickname}</p>
        <p className='text-sm text-gray-400'>{description}</p>
      </div>
      <div className="flex gap-2">
        <p className="text-black ">{jerseyPrice}</p>
        <button
        className="border text-black border-black rounded p-2 "
        onClick={handlePurchase}
        >
          Purchase Jersey
        </button>
      </div>
    </div>
  )
}

export default PlayerCard
