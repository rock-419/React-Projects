"use client"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Image } from "react-bootstrap"

const PlayerCard = ({
  id,
  name,
  jerseyPrice,
  description,
  nickname,
  image,
  direction = "right",
}) => {
  const router = useRouter()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  const handlePurchase = () => {
    const currentCount = parseInt(localStorage.getItem("cartCount")) || 0
    const newCount = currentCount + 1
    localStorage.setItem("cartCount", newCount.toString())

    let cart = JSON.parse(localStorage.getItem("cartItems")) || []
    cart.push({ name, price: jerseyPrice, nickname })
    localStorage.setItem("cartItems", JSON.stringify(cart))

    window.dispatchEvent(new CustomEvent("cartUpdated", { detail: newCount }))
  }

  const handleMore = () => {
    router.push(`/products/${id}`)
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
        <p className='text-black text-lg'>{name}</p>
        <p className='text-sm text-gray-500 mb-2'>{nickname}</p>
        <p className='text-sm text-gray-400'>{description}</p>
      </div>

      <div className='flex flex-col items-center mt-2 gap-2'>
        <div className='flex gap-2'>
          <button
            className='border text-black border-black rounded p-1.5'
            onClick={handleMore}
          >
            More
          </button>
          <button
            className='border text-black border-black rounded p-1.5'
            onClick={handlePurchase}
          >
            Add Jersey To Cart
          </button>
        </div>
        <p className='text-black'>{jerseyPrice}</p>
      </div>
    </div>
  )
}

export default PlayerCard
