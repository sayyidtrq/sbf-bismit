import Image from 'next/image'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className='w-full h-20 flex items-center justify-between px-5 shadow-2xl'>
        <p className='text 2xl font-bold cursor-pointer '> RISTEK </p>
        <button className=' text-gray-500  pl-4 pr-10 rounded-md hover:text-blue-700 '>
          Homepage
        </button>
        <button className='text-gray-500 px-6 py-1 rounded-md hover:text-blue-700 '>
          Friends
        </button>
        <button className='text-gray-500 ps-6 rounded-md hover:text-blue-700' >
          Tasks 
        </button>
        <button className='text-gray-500 ps-6 rounded-md hover:text-blue-700'>
          Events
        </button>
        <button className='text-gray-500 ps-6 rounded-md hover:text-blue-700'>
          About Fasilkom UI
        </button>
        <button className='text-gray-500 ps-6 rounded-md hover:text-blue-700' >
          Welcome, Sayyid Thariq Gilang Muttaqien
        </button>
      </nav>
      <div className='bg-gray-400 h-screen w-full flex justify-center py-20 '>
        <p className='text-[#1A202C] text-[32px] font-bold'>Sayyid Thariq Gilang Muttaqien</p>
        <p className='text-[#1A202C] text-[16px] font-sans '> Class of 2023 </p>
      </div>
    </main>
  )
}
