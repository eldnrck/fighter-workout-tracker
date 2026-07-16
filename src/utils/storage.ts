import type { WorkoutDetails } from "../types/fighter-training-tracker.interface";
import {
  differenceInCalendarDays,
  parseISO,
  startOfDay,
} from "date-fns";

export const STORAGE_KEY = "fighter-workouts";

export const loadWorkouts = (): WorkoutDetails[] => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }

  return JSON.parse(data);
};

export const saveWorkouts = (workouts: WorkoutDetails[]) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(workouts)
  );
};

export const clearWorkouts = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getCurrentStreak = (workouts: WorkoutDetails[]): number => {
  if (workouts.length === 0) return 0;

  // Remove duplicate workout dates
  const uniqueDates = [
    ...new Set(
      workouts.map((workout) =>
        startOfDay(parseISO(workout.date)).toISOString()
      )
    ),
  ];

  // Sort newest first
  uniqueDates.sort((a, b) => b.localeCompare(a));

  let streak = 0;
  let expectedDate = startOfDay(new Date());

  // If the latest workout wasn't today, allow streak to start yesterday
  if (
    differenceInCalendarDays(
      expectedDate,
      parseISO(uniqueDates[0])
    ) === 1
  ) {
    expectedDate = parseISO(uniqueDates[0]);
  }

  for (const date of uniqueDates) {
    const workoutDate = parseISO(date);

    if (
      differenceInCalendarDays(expectedDate, workoutDate) === 0
    ) {
      streak++;
      expectedDate = new Date(expectedDate);
      expectedDate.setDate(expectedDate.getDate() - 1);
    } else {
      break;
    }
  }

  return streak;
};

