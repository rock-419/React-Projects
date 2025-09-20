"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"

function LogIn() {
  const [error, setError] = useState("")
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
    if (email === "1234" && password === "1234") {
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
            <h2 className='text-center text-black'>Log In</h2>s
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
              className='w-full mt-2 rounded-lg py-2'
              onClick={handleLogin}
            >
              Log In
            </Button>
            <Button
              variant='primary'
              className='w-full mt-2 rounded-lg py-2'
              onClick={() => router.push("/register")}
            >
              Register
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default LogIn