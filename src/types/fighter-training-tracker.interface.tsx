import type { ComponentProps } from "react";

export interface NavbarProps extends ComponentProps<"nav">{}

export interface WorkoutDetails {
    id: string;
    title: string;
    discipline: string;
    date: string;
    duration: number;
    notes?: string;
}

export interface ButtonProps extends ComponentProps<"button">{
    text:string;
}

export interface WorkoutCardProps extends ComponentProps<"article">{
    text?: string | Date;
}

export interface SectionHeaderProps {
  title: string;
}
