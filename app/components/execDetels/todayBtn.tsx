"use client"
import { IExercise } from "@/app/type";
import { usePlan } from "@/contexts/todayContext";

import { LuCalendarPlus2 } from "react-icons/lu";

export default function AddTodayPlanBtn({exec}:{exec:IExercise}){
    const {todayPlan,setTodayPlan} = usePlan()
    const handelToDay=()=>{
        setTodayPlan([...todayPlan,exec])
    }
    const added = todayPlan.some((item)=>item.id===exec.id)
    return(
        <>
        <button
        disabled={added} 
        className="btn bg-limon" 
        onClick={()=>handelToDay()}
            >{added? <h4 className="flex items-center text-black">✓ <LuCalendarPlus2 /> Added to today's plan </h4> :<h4 className="flex items-center"><LuCalendarPlus2 /> Add to today's plan</h4>}</button>
        </>
    )
}