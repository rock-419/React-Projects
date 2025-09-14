"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import { FaRegLightbulb } from "react-icons/fa"

function LogIn() {
  const [error, setError] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("male")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/")
    }
  }, [isLoggedIn, router])

  const handleLogin = () => {
    if (
      email === "yes" &&
      firstname === "no" &&
      lastname === "hi" &&
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
    <div className='min-h-screen flex items-center justify-center p-0 m-0'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-2xl p-8'>
        {isLoggedIn ? (
          <div className='text-center'>
            <p className='text-green-600 text-lg font-semibold'>
              You have successfully logged in.
            </p>
          </div>
        ) : (
          <>
            <h2 className='text-center text-black'>Log In</h2>

            <button
            className="right-1 top-1">
              <FaRegLightbulb className='text-yellow-400 text-3xl' />
            </button>

            <input
              className='w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none text-black focus:ring-2 focus:ring-blue-400'
              type='text'
              placeholder='First Name'
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              className='w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none text-black focus:ring-2 focus:ring-blue-400'
              type='text'
              placeholder='Last Name'
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
            <input
              className='w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none text-black focus:ring-2 focus:ring-blue-400'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className='w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none text-black focus:ring-2 focus:ring-blue-400'
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className='flex items-center gap-6 mb-4'>
              <label className='flex items-center gap-1 text-gray-700'>
                <input
                  type='radio'
                  value='male'
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  className='accent-blue-500'
                />
                Male
              </label>

              <label className='flex items-center gap-1 text-gray-700'>
                <input
                  type='radio'
                  value='female'
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  className='accent-pink-500'
                />
                Female
              </label>
            </div>

            {error && (
              <p className='text-red-500 text-sm mb-4 text-center'>{error}</p>
            )}

            <Button
              variant='primary'
              onClick={handleLogin}
              
              className='w-full mt-2 rounded-lg py-2'
            >
              Log In
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default LogIn
