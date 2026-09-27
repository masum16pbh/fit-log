'use client'

import { usePlan } from "@/contexts/todayContext"
import { useState } from "react"
import TodayPlanCard from "../components/plans/todayPlanCard"

export default function MyPlan() {
    const {todayPlan,savePlan } = usePlan()
    const [activeTab, setActiveTab] = useState<"tab1"|"tab2">("tab1")
    const handleTabChange =(tab:"tab1"|"tab2")=>{
        setActiveTab(tab)

    }

    return (
        <>
            <section className="container mx-auto ">
                <div>
                    <h1>MY PLAN</h1>
                    <p>Cap of five lifts for today. Finish them, then load more.</p>
                </div>
                <div></div>
                <div className="flex">
                    {/* name of each tab group should be unique */}
                    {/* name of each tab group should be unique */}
                    <div className="tabs tabs-box bg-[#151921] text-[#8A92A0]">
                        <input type="radio" name="my_tabs_1"
                         className="tab text-white bg-[#1F242D]"
                          aria-label="Today's plan"
                          checked={activeTab==="tab1"}
                          onChange={()=> handleTabChange("tab1")}
                          />
                        <input type="radio" name="my_tabs_1" className="tab text-white bg-[#1F242D]" aria-label="Saved"
                            checked={activeTab === "tab2"}
                            onChange={() => handleTabChange("tab2")} />

                    </div>
                </div>
                <div>
                    {activeTab==="tab1"?
                    <TodayPlanCard></TodayPlanCard>
                    :
                    ""
                    }
                </div>
            </section>
        </>
    )
}