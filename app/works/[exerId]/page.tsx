import AddSaveBtn from "@/app/components/execDetels/saveBtn";
import AddTodayPlanBtn from "@/app/components/execDetels/todayBtn";
import { IExercise } from "@/app/type";
import Image from "next/image";


export default async function ExecDetailPage({ params }: { params: Promise<{ exerId: string }> }) {
    const { exerId } = await params;
    console.log(exerId); // "3"
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${exerId}`);
    const exec: IExercise = await res.json();

    return (
        <>
            <div className="container mx-auto ">
                <div className="flex flex-col gap-3 items-center md:flex md:flex-row">
                    {/* left */}
                    <div className="w-full md:w-1/2 h-150 md:h-150 flex justify-center">
                        <div className="relative w-[90%] md:w-[80%] h-full">
                            <Image
                                src={exec.image}
                                alt={exec.name}
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </div>
                    </div>
                    {/* right */}
                    <div className="flex flex-col gap-2 flex-1">
                        <h2>{exec.name}</h2>
                        <p>{exec.description}</p>
                        <div className="flex justify-self-start gap-2">    {exec.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="badge bg-limon px-3 py-1 text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                        </div>


                        <div className="">
                            <div className="flex justify-between border bg-[#1E1E1E] border-[#1E2330] px-4 py-1.5 rounded-t-2xl">
                                <p>EQUIPMENT</p>
                                <span>{exec.equipment}</span>
                            </div>

                            <div className="flex justify-between border bg-[#1E1E1E] border-[#1E2330] px-4 p-1.5">
                                <p>DIFFICULTY</p>
                                <span>{exec.difficulty}</span>
                            </div>

                            <div className="flex justify-between border bg-[#1E1E1E] border-[#1E2330] px-4 p-1.5">
                                <p>SETS</p>
                                <span>{exec.sets}</span>
                            </div>

                            <div className="flex justify-between border bg-[#1E1E1E] border-[#1E2330] px-4 p-1.5">
                                <p>REPS</p>
                                <span>{exec.reps}</span>
                            </div>

                            <div className="flex justify-between border bg-[#1E1E1E] border-[#1E2330] px-4 p-1.5">
                                <p>DURATION</p>
                                <span>{exec.duration}</span>
                            </div>

                            <div className="flex justify-between border bg-[#1E1E1E] border-[#1E2330] px-4 p-1.5">
                                <p>CALORIES</p>
                                <span>{exec.caloriesBurned}</span>
                            </div>

                            <div className="flex justify-between border bg-[#1E1E1E] border-[#1E2330] px-4 p-1.5 rounded-b-2xl">
                                <p>RATING</p>
                                <span>{exec.rating}</span>
                            </div>
                        </div>
                        <div>
                            <h2>INSTRUCTIONS</h2>
                            <ol className="list-decimal list-inside">
                                {exec.instructions.map((ins, ind) => <li key={ind}>{ins}</li>)}
                            </ol>
                        </div>
                        <div className="flex gap-2">
                            <AddTodayPlanBtn exec={exec}></AddTodayPlanBtn>
                            <AddSaveBtn exec = {exec}></AddSaveBtn>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )

}