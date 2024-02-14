import React from 'react'

export function AvailableBadge() {
    return (
        <div className='inline text-center'>
          <div className='absolute w-[50vw] h-[40vh] bg-white-radial top-1/2 left-1/2 -translate-x-1/2 -translate-y-[84%]'></div>
          <a className='text-white z-10 w-fit m-auto leading-[1.2em] -tracking-[0.02em] flex gap-2 items-center justify-center bg-white/10 px-4 py-2 rounded-full border-thin'>
            <div className='w-[16px] h-[16px] bg-green-500/20 rounded-full flex items-center justify-center'>
                <div className='w-[8px] h-[8px] bg-green-500 rounded-full'></div>
            </div>
            <>Available for work</>      
        </a>
        </div>
    )
}

export default function Page() {
  return (
    <div className='bg-[#0F0E0E] w-full min-h-screen grid grid-rows-[56px_1fr]'>
      <div></div>
      <div className='w-full h-full flex flex-col gap-4 items-center justify-center'>
        <AvailableBadge />
        <h1 className='text-white font-medium text-[64px] w-[56%] max-lg:w-[80%] max-md:w-[96%] max-md:text-[48px] text-center tracking-tight leading-[1.6em]'>Hey, I&apos;m Samyabrata Maji, a software developer working from India 🇮🇳</h1>
      </div>
    </div>
  )
}
