import { format, isAfter, startOfDay } from "date-fns";

import { clearWorkouts, getCurrentStreak  } from "../utils/storage";
import type { WeeklyWorkout } from "../types/fighter-training-tracker.interface";


const RecentWorkout = ({workouts, text}: WeeklyWorkout) =>{

  const WeeklyWorkout =()=>{

    const getWorkoutByDate = () => {
    if (!(text instanceof Date)) return undefined;


    if (isAfter(startOfDay(text), startOfDay(new Date()))) {
        return undefined;
    }

    return workouts.find(
        (w) => w.date === format(text, "yyyy-MM-dd")
    );
    };
    

    const workoutWeek = getWorkoutByDate();
    
  const isFutureDate =
  text instanceof Date &&
  isAfter(startOfDay(text), startOfDay(new Date()));

   const getStatValue = () => {
    switch (text) {
      case "Total Workout":
      workouts.forEach(workout => {
      console.log(workout.duration, typeof workout.duration);
    });
        return workouts.length;

      case "Total Training Minutes":
        return workouts.reduce((sum, workout) => sum + Number(workout.duration), 0);

      case "Current Streak":
        return getCurrentStreak(workouts);

      default:
        return "";
    }
  };


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
            text instanceof Date && workoutWeek
            ? "border-violet-600 bg-violet-950/40"
            : "border-zinc-700 bg-zinc-800"
        }
        `}
>
        <h2 className="text-m font-medium text-zinc-600">
          {text instanceof Date ? format(text, "MMM d") : text}
        </h2>

        {text instanceof Date ? (
        isFutureDate ? null : workoutWeek ? (
    <>
      <h3 className="mt-4 text-xl font-bold text-white">
        {workoutWeek.title}
      </h3>

      <p className="mt-2 text-sm text-white">{workoutWeek.discipline}</p>

      <p className="mt-2 text-sm text-white">{workoutWeek.duration} min</p>
    </>
  ) : (
    <p className="mt-4 text-zinc-500">No Workout</p>
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

return(
  <>
  <WeeklyWorkout />
  </>
)
}

export default RecentWorkout;