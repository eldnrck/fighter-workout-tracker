import { format, eachDayOfInterval, endOfWeek, startOfWeek } from "date-fns";
import WorkoutCard from "../components/WorkoutCard";
import SectionHeader from "../components/SectionHeader";

const Dashboard = () =>{

        const visibleDates = eachDayOfInterval({ start: startOfWeek(new Date()),
        end: endOfWeek(new Date())
    })

    return (
        <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <WorkoutCard text="Total Workout" />
                <WorkoutCard text="Total Training Minutes" />
                <WorkoutCard text="Current Streak" />
            </div>
            <SectionHeader title="This week's workouts"/>
            <div className="grid grid-cols-7 gap-4">              
            {visibleDates.map((dates)=>(
            <WorkoutCard
            key={dates.toISOString()}
            text={dates}
            >
            <span className="font-medium">{format(dates, "EEE")}</span>
            <span>{format(dates, "d")}</span>
            </WorkoutCard>
            ))}  
            </div>
        </div>
    )
}

export default Dashboard;
