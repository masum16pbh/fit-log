"use client"
import { IExercise } from "@/app/type";
import { usePlan } from "@/contexts/todayContext";
import { BiBookmark } from "react-icons/bi";

export default function AddSaveBtn({ exec }: { exec: IExercise }) {
    const { savePlan, setSavePlan } = usePlan()
    const handelSave = () => {
        setSavePlan([...savePlan, exec])
    }
    const added = savePlan.some((item)=>item.id===exec.id)
    return (
        <>
            <button
            disabled={added}
            className="btn bg-[#1E2330] text-white border-[#374151]" 
            onClick={() => handelSave()

            }> {added? <h4 className="flex items-center">✓ <BiBookmark /> Saved for later</h4>:<h4 className="flex items-center"> <BiBookmark /> Save for later</h4> }</button>
        </>
    )
}