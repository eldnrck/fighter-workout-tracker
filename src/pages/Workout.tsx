import WorkoutCard from "../components/WorkoutCard"
import type { WorkoutCardProps } from "../types/fighter-training-tracker.interface";

const Workout = ({workouts}: WorkoutCardProps) =>{
    return (
        <>
         <h3 className="text-3xl text-zinc-700 tracking-tight mt-12 mx-4">Recent Workout</h3>
        <WorkoutCard
        workouts={workouts}
         />
        </>
    )
}

export default Workout;
