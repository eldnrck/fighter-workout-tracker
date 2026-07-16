import { format, isAfter, startOfDay } from "date-fns";

import { loadWorkouts, getCurrentStreak  } from "../utils/storage";
import type { WorkoutCardProps } from "../types/fighter-training-tracker.interface";


const workouts = loadWorkouts();
const WorkoutCard =({text}:WorkoutCardProps)=>{

    const getWorkoutByDate = () => {
    if (!(text instanceof Date)) return undefined;


    if (isAfter(startOfDay(text), startOfDay(new Date()))) {
        return undefined;
    }

    return workouts.find(
        (w) => w.date === format(text, "yyyy-MM-dd")
    );
    };

const workout = getWorkoutByDate();


   const getStatValue = () => {
    switch (text) {
      case "Total Workout":
        return workouts.length;

      case "Total Training Minutes":
        return workouts.reduce((sum, workout) => sum + workout.duration, 0);

      case "Current Streak":
        return getCurrentStreak(workouts);

      default:
        return "";
    }
  };
  const isFutureDate =
  text instanceof Date &&
  isAfter(startOfDay(text), startOfDay(new Date()));

   return (
    <div className="flex justify-center flex-row">
<article
        className={`rounded-xl border w-full flex flex-col items-center text-center transition-all
        ${
            text instanceof Date
            ? "p-5 min-h-52"
            : "p-8 min-h-64"
        }
        ${
            text instanceof Date && workout
            ? "border-violet-600 bg-violet-950/40"
            : "border-zinc-700 bg-zinc-800"
        }
        `}
>
        <h2 className="text-m font-medium text-zinc-600">
          {text instanceof Date ? format(text, "MMM d") : text}
        </h2>

        {text instanceof Date ? (
        isFutureDate ? null : workout ? (
    <>
      <h3 className="mt-4 text-xl font-bold text-white">
        {workout.title}
      </h3>

      <p className="mt-2 text-sm text-white">{workout.discipline}</p>

      <p className="mt-2 text-sm text-white">{workout.duration} min</p>
    </>
  ) : (
    <p className="mt-4 text-zinc-500">Rest Day</p>
  )
) : (
  <h3 className="mt-6 text-6xl font-bold text-white">
    {getStatValue()}
  </h3>
)}
      </article>
    </div>
  );
}

export default WorkoutCard;