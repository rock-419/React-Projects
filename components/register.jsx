"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Button from "react-bootstrap/Button"

function Register() {
  const [error, setError] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [isRegistered, setIsRegistered] = useState(false)

  const router = useRouter()

  useEffect(() => {
    if (isRegistered) {
      router.push("/")
    }
  }, [isRegistered, router])

  const handleRegisteration = () => {
    if (!firstName || !lastName || !email || !password || !gender) {
      setError("Certain Fields are undone.")
      return
    }

    localStorage.setItem("firstName", firstName)
    localStorage.setItem("lastName", lastName)
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    localStorage.setItem("gender", gender)

    setIsRegistered(true)
    setError("")
  }

  return (
    <div className='min-h-screen flex items-center justify-center p-0 m-0'>
      <div className='w-full max-w-md bg-white rounded-xl shadow-2xl p-8'>
        {isRegistered ? (
          <div className='text-center'>
            <p className='text-green-600 text-lg font-semibold'>
              Registration successful.
            </p>
          </div>
        ) : (
          <>
            <h2 className='text-center text-black'>Register</h2>

            <input
              className='w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none text-black focus:ring-2 focus:ring-blue-400'
              type='text'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              className='w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none text-black focus:ring-2 focus:ring-blue-400'
              type='text'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
              className='w-full mt-2 rounded-lg py-2'
              onClick={handleRegisteration}
            >
              Register
            </Button>

            <Button
              variant='secondary'
              className='w-full mt-2 rounded-lg py-2'
              onClick={() => router.push("/login")}
            >
              Back to Login
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export default Register
