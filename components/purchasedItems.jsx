"use client"

import { Image } from "react-bootstrap"

export default function PurchasedItems() {
  const storedCartCount = localStorage.getItem("cartCount")
  if (storedCartCount == 0)
    return (
      <div>
        <Image />
        <h3>Your card is empty</h3>
        <p>
          Return to the homepage to choose your wanted items. On the right top,
          you can see how many items you have stored inside the cart.
        </p>
      </div>
    )
  const storedPlayerName = localStorage.getItem("name")  
  return (
    <div className='border-red-100'>
      <h3>{storedPlayerName}</h3>
    </div>
  )
}