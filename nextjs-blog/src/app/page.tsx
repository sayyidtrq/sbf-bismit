import Image from 'next/image'


export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center">
      <nav className='w-full h-20 flex items-center justify-between px-5 shadow-md'>
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
      <div className='w-full h-screen flex  justify-center py-[60px]'>
      <div className='w-full flex justify-center gap-9'>
        <div className='w-40 h-40 rounded-full border border-black '></div>
        <div className='items-center'>
        <p className='text-[#1A202C] text-[32px] font-bold mt-8'>Sayyid Thariq Gilang Muttaqien </p>
        <p className='text-[#1A202C] text [16px] font - bold m-15'>Edit Profile</p>
        <p className='text-[#1A202C] text-[18px] font-sans '>Class of 2023</p>
        </div>
        </div>
      </div>
    </main>
  )
}
