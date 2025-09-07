import LogIn from "@/components/login"
import MovingSlides from "@/components/carousel"
import PlayerCard from "@/components/card"

export default function Home() {
  const players = [
    {
      name: "Lebron James",
      nickname: "The Chosen One",
      image: "./public/images/bron.jpg",
      description:
        "One of the greatest all-around players ever, known for his scoring, passing, basketball IQ, and leadership. Has multiple NBA championships and MVPs.",
    },
    {
      name: "Micheal Jordan",
      nickname: "His Airness",
      description:
        "Widely considered the greatest basketball player of all time; dominated the 1990s with scoring ability, clutch performances, and six NBA championships.",
    },
    {
      name: "Kareem Abdul-Jabbar",
      nickname: "The Big 'A'",
      description:
        "NBA’s all-time leading scorer; famous for his unstoppable skyhook shot and longevity in the league.",
    },
    {
      name: "Tim Duncan",
      nickname: "The Big Fundemental",
      description:
        "“The Big Fundamental,” known for consistency, defense, and leadership. Five-time NBA champion with Spurs.",
    },
    {
      name: "Shaquille O'neal",
      nickname: "The Diesel",
      description:
        "Dominant physical presence in the paint; won four NBA titles and was a multiple-time MVP.",
    },
    {
      name: "Stephen Curry",
      nickname: "Chef Curry",
      description:
        "Revolutionized basketball with his three-point shooting; two-time MVP and multiple-time NBA champion with the Golden State Warriors.",
    },
    {
      name: "Magic Johnson",
      nickname: "Magic",
      description:
        "Legendary floor general; five-time NBA champion known for flashy passing and leadership.",
    },

    {
      name: "Larry Bird",
      nickname: "Larry Legend",
      description:
        "Elite shooter and fierce competitor; three-time NBA champion and three-time MVP with Celtics.",
    },
    {
      name: "Hakeem Olajuwan",
      nickname: "The Dream",
      description:
        "Known for the “Dream Shake”; two-time NBA champion and defensive dominance.",
    },

    {
      name: "Kobe Bryant",
      nickname: "Black Mamba",
      description:
        "Five-time NBA champion; legendary scorer and clutch performer.",
    },
    {
      name: "Wilt Chamberlian",
      nickname: "Big Dipper",
      description:
        "Physically dominant; scored 100 points in a single game and holds countless records.",
    },
    {
      name: "Kevin Durant",
      nickname: "Easy Money Sniper",
      description:
        "Elite scorer with height and agility; multiple-time scoring champion and NBA champion.",
    },
  ]
  return (
    <div>
      <div>
        <MovingSlides />
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-5 mt-40">
        {players.map((player, index) => (
          <PlayerCard
            key={index}
            name={player.name}
            image={player.image}
            nickname={player.nickname}
            description={player.description}
          />
        ))}
      </div>
    </div>
  )
}
