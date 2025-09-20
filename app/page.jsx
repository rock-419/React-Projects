"use client"
import MovingSlides from "@/components/carousel"
import PlayerCard from "@/components/card"
import players from "./data/page"

export default function Home() {
  return (
    <div>
      <div>
        <MovingSlides />
      </div>
      <div id="players-section"className='grid grid-cols-4 grid-rows-4 gap-5 mt-40'>
        {players.map((player, index) => (
          <PlayerCard key={index} {...player} />
        ))}
      </div>
    </div>
  )
}
