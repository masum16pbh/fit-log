import { usePlan } from "@/contexts/todayContext"
import PlanCard from "./planCard"
import { IExercise } from "@/app/type"

export default function TodayPlanCard() {
    const { todayPlan } = usePlan()
    return (
        <div>
        {todayPlan.map((exec) =><div className="py-2"><PlanCard {...exec} key={exec.id}></PlanCard>
        <div>
            <p>View Details</p>
            <p>Mark as Done</p>
            <p></p>
        </div>
        </div>)}
        </div>
    )
}