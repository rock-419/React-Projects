"use client"
import Carousel from "react-bootstrap/Carousel"
import Image from "next/image"
import { Button } from "react-bootstrap"
import { useRouter } from "next/navigation"

function MovingSlides() {
  const router = useRouter()
  return (
    <Carousel className='mt-19'>
      <Carousel.Item className='h-[500px] flex justify-center items-center relative'>
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            className='rounded-xl object-cover shadow-lg'
            src='/images/bron.jpg'
            alt='Goat'
            width={1000}
            height={400}
            priority
          />
        </div>
        <Carousel.Caption className='absolute flex justify-center items-center text-center'>
          <div className='backdrop-blur-xs bg-black/25 rounded-2xl p-6 '>
            <h2 className='text-3xl font-bold mb-2'>The Chosen One</h2>
            <p className='line-clamp-2 font-light mb-4'>
              LeBron James is widely considered one of the most complete players
              in NBA history. Known for his size, strength, athleticism, and
              basketball IQ, he can dominate as a scorer, passer, and rebounder.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-[500px] flex justify-center items-center relative'>
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            className='rounded-xl object-cover shadow-lg'
            src='/images/mj.jpg'
            alt='Second Goat'
            width={1000}
            height={400}
          />
        </div>
        <Carousel.Caption className='absolute flex justify-center items-center text-center'>
          <div className='backdrop-blur-xs bg-black/25 rounded-2xl p-6 '>
            <h2 className='text-3xl font-bold mb-2'>His Airness</h2>
            <p className='line-clamp-2 font-light mb-4'>
              Michael Jordan is often regarded as the greatest basketball player
              of all time. Famous for his clutch performances, scoring ability,
              and six NBA championships with the Chicago Bulls.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-[500px] flex justify-center items-center relative'>
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            className='rounded-xl object-cover shadow-lg'
            src='/images/kareem.jpg'
            alt='Third Goat'
            width={1000}
            height={400}
          />
        </div>
        <Carousel.Caption className='absolute flex justify-center items-center text-center'>
          <div className='backdrop-blur-xs bg-black/25 rounded-2xl p-6 '>
            <h2 className='text-3xl font-bold mb-2'>The Big ‘A’</h2>
            <p className='line-clamp-2 font-light mb-4'>
              Kareem Abdul-Jabbar held the NBA’s all-time scoring record for
              nearly 40 years until LeBron passed him in 2023. His skyhook
              remains one of the most unstoppable moves in basketball history.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-[500px] flex justify-center items-center relative'>
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            className='rounded-xl object-cover shadow-lg'
            src='/images/timmy.jpg'
            alt='4th'
            width={1000}
            height={400}
          />
        </div>
        <Carousel.Caption className='absolute flex justify-center items-center text-center'>
          <div className='backdrop-blur-xs bg-black/25 rounded-2xl p-6 '>
            <h2 className='text-3xl font-bold mb-2'>The Big Fundamental</h2>
            <p className='line-clamp-2 font-light mb-4'>
              Tim Duncan is widely regarded as the greatest power forward of all
              time. Known for his quiet leadership, consistency, and textbook
              fundamentals, he led the San Antonio Spurs to five NBA
              championships. A two-time MVP and three-time Finals MVP, Duncan
              built his legacy not on flash but on efficiency, defense, and
              teamwork — embodying steady excellence for nearly two decades.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className='h-[500px] flex justify-center items-center relative'>
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            className='rounded-xl object-cover shadow-lg'
            src='/images/shaq.jpg'
            alt='4th'
            width={1000}
            height={400}
          />
        </div>
        <Carousel.Caption className='absolute flex justify-center items-center text-center'>
          <div className='backdrop-blur-xs bg-black/25 rounded-2xl p-6 '>
            <h2 className='text-3xl font-bold mb-2'>The Diesel</h2>
            <p className='line-clamp-2 font-light mb-4'>
              Shaquille O’Neal was one of the most dominant centers in NBA
              history. Standing 7’1” and over 300 pounds, he combined size,
              strength, and surprising agility to overpower opponents in the
              paint. A four-time NBA champion and three-time Finals MVP, Shaq
              was also larger-than-life off the court — entertainer, rapper,
              actor, and analyst — making him one of basketball’s most
              recognizable personalities.
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default MovingSlides
