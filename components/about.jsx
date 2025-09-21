import { Image } from "react-bootstrap"

export default function About() {
  return (
    <div className='max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-md'>
      <h2 className='text-2xl font-bold text-gray-800 mb-4'>About Us</h2>
      <p className='text-gray-600 leading-relaxed mb-6'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
        reprehenderit officia illo ea cupiditate tempora consequuntur delectus
        quam necessitatibus alias quasi veritatis natus dicta deleniti commodi
        cum praesentium officiis saepe iusto fugit, aspernatur quidem ipsa.
        Esse, non. Ad unde, debitis commodi odit distinctio qui incidunt.
      </p>
      <div className='flex justify-center'>
        <Image
          width={700}
          height={700}
          src='/images/random.jpg'
          alt='About us'
          className='rounded-xl shadow-sm'
        />
      </div>
    </div>
  )
}
