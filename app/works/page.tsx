import ExeciseCard from "../components/exerciseCars";
import { IExercise } from "../type"; 
const getExercise = async()=>{
    const res= await fetch('https://api.abcz.workers.dev/api/fitlog')
    if(!res.ok){throw new Error("Data not fetch")}
    return res.json()

}

export default async function ExercisePage(){
    const exercises:IExercise[] = await getExercise()
    return(
        <>
       
        <div className="grid md:grid-cols-3 gap-2 items-center">
            {exercises.map(exe =><ExeciseCard exer={exe} key={exe.id}></ExeciseCard>) }
        </div>
        </>
    )


}