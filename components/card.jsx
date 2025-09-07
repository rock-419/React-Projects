import Image from "next/image"

const PlayerCard = ({ name, description, nickname, image }) => {
  return (
    <div className='border-1 rounded-2xl p-5 w-full gap-5'>
      {/* <Image
        alt='PlayerImage'
        src={image}
        width={280}
        height={160}
      /> */}
      <div>
        <h3 className='text-xs'>{nickname}</h3>
        <h3 className='text-xs'>{name}</h3>
        <p className='text-xs'>{description}</p>
      </div>
    </div>
  )
}

export default PlayerCard
