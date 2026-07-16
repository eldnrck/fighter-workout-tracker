import type { ButtonProps } from "../types/fighter-training-tracker.interface";

const Button = ({text, className}:ButtonProps) =>{
    return(
        <button className={className}>{text}</button>
    )
}

export default Button;