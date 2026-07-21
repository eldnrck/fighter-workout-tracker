import type { ComponentProps, Dispatch, SetStateAction } from "react";

export interface NavbarProps extends ComponentProps<"nav">{
    img ?: string
    handleOpenModal: () => void;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleCloseModal: () => void;
    formData: WorkoutDetails;
    setFormData: React.Dispatch<React.SetStateAction<WorkoutDetails>>;
    workouts: any[];
    setWorkouts: Dispatch<SetStateAction<any[]>>;
    handleSubmitForm: () => void;

}

export interface WorkoutDetails {
    id: string;
    title: string;
    discipline: string;
    date: string;
    duration: string;
    notes?: string;
}

export interface ButtonProps extends ComponentProps<"button">{
    text:string;
    formData?: WorkoutDetails;
    setFormData?: React.Dispatch<React.SetStateAction<WorkoutDetails>>;
    workouts?: any[];
    setWorkouts?: Dispatch<SetStateAction<any[]>>;


}

export interface WeeklyWorkout extends ComponentProps<"article">{
    workouts: any[];
    setWorkouts: any;
    text?: any;
    handleSubmit: () => void;
}

export interface SectionHeaderProps {
  title: string;
}

export interface WorkoutCardProps {
  workouts: any[];
}

export interface AddProps{
    isOpen: boolean;
    handleCloseModal: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    formData: WorkoutDetails;
    setFormData: React.Dispatch<React.SetStateAction<WorkoutDetails>>;
    handleSubmitForm: () => void;


}
