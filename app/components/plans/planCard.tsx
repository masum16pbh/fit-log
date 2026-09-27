import Image from "next/image";
import { IExercise } from "../../type";
import { BiTimeFive } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import { BiSolidHot } from "react-icons/bi";

export default function PlanCard(exec:IExercise){
    return(
        <>
        <div className="flex gap-2 flex-col md:flex-row md:items-center">
            <div className="relative w-45 h-25 "> {/*vary importent for image*/}
                
                <Image src={exec.image} alt={exec.name}
                
                 fill
                  className="object-cover rounded-2xl"
                >
                  </Image> 
              </div>
            <div>
                <h2>{exec.name}</h2>
                <p>{exec.equipment}</p>
                <div className="flex justify-self-start">
                    <p className="flex gap-1 items-center"> <BiTimeFive /> {exec.duration} min</p>
                 <p className="flex gap-1 items-center"><BiSolidHot />{exec.caloriesBurned} kcal</p>
                     <p className="flex gap-1 items-center"> <BiStar /> {exec.rating} </p>
                   
                    </div>
            </div>
        </div>
        </>
    )
}