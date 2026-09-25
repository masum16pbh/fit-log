import Image from 'next/image'
import baner from '../../public/banner.png'
export default function Baner(){
    return(
        <>
     <div className='flex justify-between container mx-auto'>
  <div className="flex">

    {/* Left Content */}
    <div className="flex flex-col gap-3">
        
      <div >
       
        <h3 className="text-sm font-semibold tracking-[0.25em] text-limon">
          WORKOUT LIBRARY
        </h3>
      </div>

      <h1 className="font-['Oswald'] text-[40px] font-bold uppercase leading-[1] tracking-[-1.5px] text-white md:text-[60px]">
            Train with intent. Log
            <br />
            every set.
          </h1>

      <p className="max-w-lg text-base leading-7 text-gray-400 md:text-lg">
        FitLog is a dark, no-nonsense gym companion. Pick a lift,
        lock it into today's plan, and watch the week's work add up.
      </p>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button className="btn bg-limon px-7 font-bold text-black transition hover:scale-105">
          BROWSE WORKOUTS
        </button>
 
      </div>

      

      </div>
    </div>

    <div className="relative">
     
      

      <div>
        <Image
          src={baner}
          alt="Workout"
          
        />

        
      </div>
    </div>
</div> 

        </>
    )
}