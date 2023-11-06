import Image from 'next/image'

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between drop-shadow-md active:shadow-md ">
      <nav className='w-full h-20 flex items-center justify-between px-5 '>
        <p className='text 2xl font-bold cursor-pointer '> RISTEK </p>
        <button className=' bg-gray-300  pl-4 pr-10 rounded-md hover:shadow-lg active:shadow-none '>
          Homepage
        </button>
        <button className='bg-gray-300 px-6 py-1 rounded-full: shadow-lg active:shadow-none '>
          Friends
        </button>
      </nav>
      <div className='bg-gray-100 h-screen w-full flex justify-center py-5 '>
        <p className='font-bold'>Hello World</p>
        <p className='font-bold py-20 '> </p>
      </div>
    </main>
  )
}
