import { IExercise } from "@/app/type";
import Image from "next/image";
export default async function ExecDetailPage({ params }: { params: Promise<{ exerId: string }> }) {
    const { exerId } = await params;
    console.log(exerId); // "3"
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${exerId}`);
    const exec: IExercise = await res.json();

    const details = [
        ["EQUIPMENT", exec.equipment],
        ["DIFFICULTY", exec.difficulty],
        ["SETS", exec.sets],
        ["REPS", exec.reps],
        ["DURATION", exec.duration],
        ["CALORIES", exec.caloriesBurned],
        ["RATING", exec.rating],
    ];

    return (
        <>
            <div className="flex gap-3">
                {/* left */}
                <div>
                    <Image src={exec.image}
                        alt={exec.name}
                        width={500}
                        height={600}
                    >

                    </Image>
                </div>
                {/* right */}
                <div>
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

                </div>
            </div>

        </>
    )

}