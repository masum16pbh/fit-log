import Link from "next/link";
import { IExercise } from "../type";
import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { BiSolidHot } from "react-icons/bi";




export default function ExeciseCard({exer}:{exer:IExercise}){
return(
    <>
    <Link href={`/works/${exer.id}`} className="block">
    <div className="bg-[#15171D] border border-[#15171D] rounded-2xl">
  <div className="relative w-full h-40 "> {/*image div*/}
    
    <Image src={exer.image} alt={exer.name}
    
     fill
      className="object-cover rounded-t-2xl"
    >
      </Image> 
  </div>
  
  <div className="card-body">
  <div className="flex flex-wrap gap-2">
  {exer.muscleGroups.map((muscle) => (
    <span
      key={muscle}
      className="badge bg-limon px-3 py-1  text-black"
    >
      {muscle}
    </span>
  ))}
</div>
    <h2 className="card-title">
      {exer.name}
      
    </h2>
    <p>{exer.equipment}</p>
    <div className="flex justify-self-end-safe">
    <p className="flex gap-1 items-center"> <BiTimeFive /> {exer.duration} min</p>
 <p className="flex gap-1 items-center"><BiSolidHot />{exer.caloriesBurned} kcal</p>
     <p className="flex gap-1 items-center"> <BiStar /> {exer.rating} </p>
   
    </div>
  </div>
</div>
</Link>
    </>
)
}