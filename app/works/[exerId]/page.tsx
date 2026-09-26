import { IExercise } from "@/app/type";
import Image from "next/image";
export default async function ExecDetailPage({params}:{params:Promise<{exerId:string}>}){
    const {exerId} = await params;
    console.log(exerId); // "3"
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${exerId}`);
    const exec:IExercise = await res.json();
    console.log(exerId)
    return(
        <>
        <div>
            {/* left */}
            <div>
                <Image src ={exec.image}
                alt={exec.name}
                width={500}
                height={600}
                >

                </Image>
            </div>
            {/* right */}
            <div></div>
        </div>
        
        </>
    )

}