
import type { WorkoutCardProps } from "../types/fighter-training-tracker.interface";
import { clearWorkouts } from "../utils/storage";
import Button from "./Button";


const WorkoutCard = ({workouts}: WorkoutCardProps) =>{

const handleDelete = () =>{
    clearWorkouts()
}


const recentWorkout = workouts.map((workout)=>(
    <article className="flex justify-center" key={workout.id}>
        <div className="w-full h-32 bg-zinc-100 p-6 flex items-center justify-between">
            <div>
            <h1 className="text-xl font-bold text-violet-800">{workout.title}</h1>
            <h3 className="font-bold">{workout.discipline}</h3>
            <div className="flex gap-4 font-thin">
            <span>{workout.date}</span>
            <span>{workout.duration} min</span>
            <span>{workout.notes}</span>
            </div>  
            </div>
            <div>
            <Button 
            text="Edit" 
            className=" 
            bg-violet-600
            hover:bg-violet-500
            text-white
            rounded-lg
            px-4
            py-2
            transition-colors
            duration-300
            "/>
            <Button 
            text="Delete"
            onClick={handleDelete} 
            className="
            bg-red-600
            hover:bg-red-500
            text-white
            rounded-lg
            px-4
            py-2
            transition-colors
            duration-300
            mx-4
            "/> 
            </div>
        </div>
        <div className="flex items-center gap-3">

        </div>
    </article>
));

    return (
        <>
        
           {recentWorkout}

        </>
    )
}


export default WorkoutCard;