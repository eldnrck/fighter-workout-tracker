import { Link } from "react-router-dom";
import Button from "./Button";
import type { NavbarProps } from "../types/fighter-training-tracker.interface";
const Navbar = ({}: NavbarProps
) => {
    return(
        <nav>
            <header className="flex justify-around bg-zinc-200 px-6 py-4 gap-15">
            <h1 className="text-2xl font-bold flex-start text-zinc-800"><Link to="/">Fighter Training Tracker</Link></h1>
            <ul className="flex items-center gap-8 text-base mt-1">
            <li><Button text="Add Button"
            className="
            bg-violet-600
            hover:bg-violet-500
            text-white
            rounded-lg
            px-4
            py-2
            transition-colors
            duration-300
            "
            /></li>    
            <li
            className="
            relative
            w-fit
            cursor-pointer
            text-zinc-700
            transition-colors
            duration-300
            hover:text-violet-600

            after:absolute
            after:left-1/2
            after:-translate-x-1/2
            after:-bottom-1
            after:h-0.5
            after:w-0
            after:bg-violet-600

            after:transition-all
            after:duration-300
            after:ease-out

            hover:after:w-full
            ">
            <Link to="/">Dashboard</Link></li>
            <li
            className="
            relative
            w-fit
            cursor-pointer
            text-zinc-700
            transition-colors
            duration-300
            hover:text-violet-600

            after:absolute
            after:left-1/2
            after:-translate-x-1/2
            after:-bottom-1
            after:h-0.5
            after:w-0
            after:bg-violet-600

            after:transition-all
            after:duration-300
            after:ease-out

            hover:after:w-full
            ">
            <Link to="/workout">Workouts</Link></li>
            </ul>
            </header>
        </nav>
    )
}

export default Navbar;