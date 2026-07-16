import { Link } from "react-router-dom";

import type { NavbarProps } from "../types/fighter-training-tracker.interface";
const Navbar = ({}: NavbarProps
) => {
    return(
        <nav>
            <header className="flex justify-around bg-zinc-200 px-6 py-4 gap-15">
            <h1 className="text-2xl font-bold flex-start text-zinc-800"><Link to="/">Fighter Training Tracker</Link></h1>
            <ul className="flex gap-8 text-base mt-1">
            <li
            className="
                relative
                w-fit
                cursor-pointer

                after:absolute
                after:left-1/2
                after:-translate-x-1/2
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-violet-500

                after:transition-all
                after:duration-300
                after:ease-out

                hover:after:w-full
            "><Link to="/">Dashboard</Link></li>
            <li
            className="
                relative
                w-fit
                cursor-pointer

                after:absolute
                after:left-1/2
                after:-translate-x-1/2
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-violet-500

                after:transition-all
                after:duration-300
                after:ease-out

                hover:after:w-full
            "><Link to="/workout">Workouts</Link></li>
            </ul>
            </header>
        </nav>
    )
}

export default Navbar;