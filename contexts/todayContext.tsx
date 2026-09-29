"use client"
import { IExercise } from "@/app/type";
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
interface contextType {
    todayPlan: IExercise[];
    setTodayPlan: Dispatch<SetStateAction<IExercise[]>>;
    savePlan: IExercise[];
    setSavePlan: Dispatch<SetStateAction<IExercise[]>>;
    complited: number[];
    setComplited: Dispatch<SetStateAction<number[]>>;


}
export const planContext = createContext<contextType | undefined>(undefined);
export default function PlanProvider({ children }: { children: ReactNode }) {
    const [todayPlan, setTodayPlan] = useState<IExercise[]>([])
    const [savePlan, setSavePlan] = useState<IExercise[]>([])
    const [complited, setComplited] = useState<number[]>([])
    const sheardState = { todayPlan, setTodayPlan, savePlan, setSavePlan ,complited, setComplited}

    return <planContext.Provider value={sheardState}>{children}</planContext.Provider>
}

export const usePlan = () => {
    const constext = useContext(planContext)
    if (!constext) { throw new Error("usePlan must be use within a plan provider") };
    return constext;
}