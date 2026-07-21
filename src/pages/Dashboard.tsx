import { format, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import RecentWorkout from "../components/RecentWorkout";
import SectionHeader from "../components/SectionHeader";
import type { WeeklyWorkout } from "../types/fighter-training-tracker.interface";

const Dashboard = ({workouts, setWorkouts, handleSubmit}: WeeklyWorkout) =>{

    console.log("Dashboard workouts:", workouts);
    const visibleDates = eachDayOfInterval({ start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    })

    return (
        <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <RecentWorkout 
                handleSubmit={handleSubmit}
                text="Total Workout"
                workouts={workouts}
                setWorkouts={setWorkouts} />
                <RecentWorkout text="Total Training Minutes"
                workouts={workouts}
                handleSubmit={handleSubmit}
                setWorkouts={setWorkouts} />
                <RecentWorkout text="Current Streak"
                workouts={workouts}
                handleSubmit={handleSubmit}
                setWorkouts={setWorkouts} />
            </div>
            <SectionHeader title="This week's workouts"/>
            <div className="grid grid-cols-7 gap-4">              
            {visibleDates.map((dates)=>(
            <RecentWorkout
            handleSubmit={handleSubmit}
            key={dates.toISOString()}
            text={dates}
            workouts={workouts}
            setWorkouts={setWorkouts}
            >
            <span className="font-medium">{format(dates, "EEE")}</span>
            <span>{format(dates, "d")}</span>
            </RecentWorkout>
            ))}  
            </div>
        </div>
    )
}

export default Dashboard;
