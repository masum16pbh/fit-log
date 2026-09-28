'use client'

import { usePlan } from "@/contexts/todayContext"
import { useState } from "react"
import TodayPlanCard from "../components/plans/todayPlanCard"
import PlanCard from "../components/plans/planCard"
import { exec } from "child_process"
import Link from "next/link"

export default function MyPlan() {
    const { todayPlan, savePlan,setTodayPlan,setSavePlan } = usePlan()
    const [activeTab, setActiveTab] = useState<"tab1" | "tab2">("tab1")
    const handleTabChange = (tab: "tab1" | "tab2") => {
        setActiveTab(tab)

    }

    const handelDeleteFromToday=(id:number)=>{
        setTodayPlan((oldPlan)=>oldPlan.filter((exec)=>exec.id !== id))
    
    }
    const TodayPlancard = () => {
        const { todayPlan } = usePlan()
        return (
            <div className="w-full">
                {todayPlan.map((exec) => {
                    return <div key={exec.id} className="p-2 m-2 flex items-center  justify-between gap-20  w-full border border-gray-100 rounded ">
                        <PlanCard {...exec} key={exec.id}></PlanCard>
                        <div className="flex items-center justify-end gap-4">
                           <Link href={`/works/${exec.id}`} className="cursor-pointer px-3  bg-gray-600 rounded-2xl ">view</Link>
                            <button className="cursor-pointer px-3 bg-limon rounded-2xl text-black">mark as done</button>
                            <button className="cursor-pointer" onClick={()=>handelDeleteFromToday(exec.id)} >X</button> 
                        </div>
                    </div>
                })}
            </div>
        )
    }

    return (
        <>
            <section className="container mx-auto ">
                <div>
                    <h1>MY PLAN</h1>
                    <p>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div className="grid grid-cols-3 border p-3 rounded ">
                    <section>
                        <p>Exercises</p>
                        <h2>{
                            activeTab === "tab1" ? todayPlan.length : savePlan.length
                        }</h2>
                    </section>
                    <section>
                        <p>Minutes</p>
                        <h2>
                            {activeTab === 'tab1' ? todayPlan.reduce((total, exec) => total + exec.duration, 0)
                                :
                                savePlan.reduce((total, exec) => total + exec.duration, 0)}
                        </h2>
                    </section>
                    <section>
                        <p>Calories</p>
                        <h2>
                            {activeTab === "tab1" ? todayPlan.reduce((total, exec) => total + exec.caloriesBurned, 0)
                                :
                                savePlan.reduce((total, exec) => total + exec.caloriesBurned, 0)}
                        </h2>
                    </section>
                </div>
                <div className="flex">
                    {/* name of each tab group should be unique */}
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-box bg-[#151921] text-[#8A92A0]">
                        <input type="radio" name="my_tabs_1"
                            className="tab text-white bg-[#1F242D]"
                            aria-label="Today's plan"
                            checked={activeTab === "tab1"}
                            onChange={() => handleTabChange("tab1")}
                        />
                        <input type="radio" name="my_tabs_1" className="tab text-white bg-[#1F242D]" aria-label="Saved"
                            checked={activeTab === "tab2"}
                            onChange={() => handleTabChange("tab2")} />

                    </div>
                </div>
                <div>
                    {activeTab === "tab1" ?
                        <TodayPlancard></TodayPlancard>
                        :
                        ""
                    }
                </div>
            </section>
        </>
    )
}