"use client"

import Button from "react-bootstrap/Button"
import { useState } from "react"
import { FaRegLightbulb } from "react-icons/fa"

function LogIn() {
  const [error, setError] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("male")
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [light, setLight] = useState(true)

  const handleLogin = () => {
    if (
      email === "chuluudai.lkh@gmail.com" &&
      firstname === "rock" &&
      lastname === "chuluudai" &&
      password === "1234"
    ) {
      if (gender === "male") {
        setIsLoggedIn(true)
        setError("")
      } else {
        setError("The admin is not a female")
      }
    } else {
      setError("Invalid username or password")
    }
  }
  return (
    <div className='max-w-md mt-100 border border-gray-300 rounded-xl shadow-lg p-6 bg-white'>
      {isLoggedIn ? (
        <p className='text-green-600'>You have successfully logged in.</p>
      ) : (
        <div>
          <h3 className='mb-4'>Log In Page</h3>
          <button className='bottom-1 left-1'>
            <FaRegLightbulb />
          </button>
          <input
            className='w-full border border-gray-300 rounded-lg p-2 mb-3'
            type='text'
            placeholder='First name'
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            className='w-full border border-gray-300 rounded-lg p-2 mb-3'
            type='text'
            placeholder='Last name'
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <input
            className='w-full border border-gray-300 rounded-lg p-2 mb-3'
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='w-full border border-gray-300 rounded-lg p-2 mb-3'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='flex items-center gap-6 mb-3'>
            <label className='flex items-center gap-1 text-gray-700'>
              <input
                type='radio'
                value='male'
                checked={gender === "male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>

            <label className='flex items-center gap-1 text-gray-700'>
              <input
                type='radio'
                value='female'
                checked={gender === "female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
          </div>

          {!isLoggedIn && error && (
            <p className='text-red-500 text-sm mb-3'>{error}</p>
          )}
        </div>
      )}
      <Button
        variant='primary'
        onClick={handleLogin}
        className='w-full mt-2 rounded-lg'
      >
        Log In
      </Button>
    </div>
  )
}

export default LogIn
