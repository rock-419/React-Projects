"use client"

import { CiShoppingCart } from "react-icons/ci"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "react-bootstrap"

export default function PurchasedItems() {
  const router = useRouter()
  const [cartCount, setCartCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const updateCart = () => {
      const storedCartCount = parseInt(localStorage.getItem("cartCount")) || 0
      const storedCartItems =
        JSON.parse(localStorage.getItem("cartItems")) || []

      setCartCount(storedCartCount)
      setCartItems(storedCartItems)
    }

    updateCart()
    const interval = setInterval(updateCart, 2500)
    return () => clearInterval(interval)
  }, [])

  if (cartCount === 0) {
    return (
      <div className='flex flex-col items-center justify-center text-center p-8 rounded-2xl shadow-md bg-white max-w-md mx-auto mt-10'>
        <div className='flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4'>
          <CiShoppingCart className='text-4xl text-gray-500' />
        </div>
        <h3 className='text-xl font-semibold text-gray-800'>
          Your cart is empty
        </h3>
        <p className='text-gray-500 mt-2 text-sm'>
          Return to the homepage to choose your wanted items. On the top right,
          you can see how many items you have stored inside the cart.
        </p>
        <Button variant='secondary' onClick={() => router.push("/")}>
          Go Shopping
        </Button>
      </div>
    )
  }

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price.toString().replace("$", "")),
    0
  )

  return (
    <div className='flex flex-col items-center justify-center p-8 rounded-2xl shadow-md bg-white max-w-md mx-auto mt-10 space-y-4'>
      <h2 className='text-xl font-semibold text-gray-700'>Your Picked Items</h2>

      {cartItems.map((item, index) => (
        <div
          key={index}
          className='flex justify-between items-center p-4 bg-gray-50 rounded-xl shadow-sm w-full'
        >
          <div className='flex flex-col'>
            <span className='font-semibold text-gray-800'>{item.name}</span>
            <span className='text-sm text-gray-500'>{item.nickname}</span>
          </div>
          <span className='font-medium text-gray-700'>${item.price}</span>
        </div>
      ))}

      <div className='mt-4 w-full flex justify-between items-center border-t pt-4'>
        <span className='font-semibold text-gray-800'>Total:</span>
        <span className='font-bold text-gray-900 text-lg'>
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <Button
        variant='primary'
        className='mt-4 w-full'
        onClick={() => router.push("/")}
      >
        Purchase
      </Button>
    </div>
  )
}
