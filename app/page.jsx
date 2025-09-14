import MovingSlides from "@/components/carousel"
import PlayerCard from "@/components/card"

export default function Home() {
  const players = [
    {
      name: "Lebron James",
      nickname: "The Chosen One",
      image: "/images/bron.jpg",
      jerseyPrice:"$459",
      description:
        "One of the greatest all-around players ever, known for his scoring, passing, basketball IQ, and leadership. Has multiple NBA championships and MVPs.",
    },
    {
      name: "Micheal Jordan",
      nickname: "His Airness",
      image: "/images/mj.jpg",
      jerseyPrice:"$439",
      description:
        "Widely considered the greatest basketball player of all time; dominated the 1990s with scoring ability, clutch performances, and six NBA championships.",
    },
    {
      name: "Kareem Abdul-Jabbar",
      nickname: "The Big 'A'",
      image: "/images/kareem.jpg",
      jerseyPrice:"$299",
      description:
        "NBA’s all-time leading scorer; famous for his unstoppable skyhook shot and longevity in the league.",
    },
    {
      name: "Tim Duncan",
      nickname: "The Big Fundemental",
      image: "/images/timmy.jpg",
      jerseyPrice:"$270",
      description:
        "“The Big Fundamental,” known for consistency, defense, and leadership. Five-time NBA champion with Spurs.",
    },
    {
      name: "Shaquille O'neal",
      nickname: "The Diesel",
      image: "/images/shaq.jpg",
      jerseyPrice:"$265",
      description:
        "Dominant physical presence in the paint; won four NBA titles and was a multiple-time MVP.",
    },
    {
      name: "Stephen Curry",
      nickname: "Chef Curry",
      image: "/images/curry.jpg",
      jerseyPrice:"$230",
      description:
        "Revolutionized basketball with his three-point shooting; two-time MVP and multiple-time NBA champion with the Golden State Warriors.",
    },
    {
      name: "Magic Johnson",
      nickname: "Magic",
      image: "/images/magic.jpg",
      jerseyPrice:"$225",
      description:
        "Legendary floor general; five-time NBA champion known for flashy passing and leadership.",
    },

    {
      name: "Larry Bird",
      nickname: "Larry Legend",
      image: "/images/bird.jpg",
      jerseyPrice:"$224",
      description:
        "Elite shooter and fierce competitor; three-time NBA champion and three-time MVP with Celtics.",
    },
    {
      name: "Hakeem Olajuwan",
      nickname: "The Dream",
      image: "/images/hakeem.jpg",
      jerseyPrice:"$200",
      description:
        "Known for the “Dream Shake”; two-time NBA champion and defensive dominance.",
    },

    {
      name: "Kobe Bryant",
      nickname: "Black Mamba",
      image: "/images/kobe.jpg",
      jerseyPrice:"$199",
      description:
        "Five-time NBA champion; legendary scorer and clutch performer.",
    },
    {
      name: "Wilt Chamberlian",
      nickname: "Big Dipper",
      image: "/images/wilt.jpg",
      jerseyPrice:"$185",
      description:
        "Physically dominant; scored 100 points in a single game and holds countless records.",
    },
    {
      name: "Kevin Durant",
      image: "/images/kd.jpg",
      nickname: "Easy Money Sniper",
      jerseyPrice:"$179",
      description:
        "Elite scorer with height and agility; multiple-time scoring champion and NBA champion.",
    },
  ]
  return (
    <div>
      <div>
        <MovingSlides />
      </div>
      <div className='grid grid-cols-4 grid-rows-4 gap-5 mt-40'>
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            image={player.image}
            nickname={player.nickname}
            jerseyPrice={player.jerseyPrice}
            description={player.description}
          />
        ))}
      </div>
    </div>
  )
}
