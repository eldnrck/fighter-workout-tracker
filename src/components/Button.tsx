import type { ButtonProps } from "../types/fighter-training-tracker.interface";

const Button = ({text, className, onClick}:ButtonProps) =>{

   
    
    return(
        <button  className={className} onClick={onClick}>{text}</button>
    )
}

export default Button;