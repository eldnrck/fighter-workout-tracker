import { Link } from "react-router-dom";
import Button from "./Button";
import type { NavbarProps } from "../types/fighter-training-tracker.interface";
import logo from "../assets/29019565-576f-4182-8ccf-6242866a2ba9.png";
import Add from "./Add";

const Navbar = ({ 
    handleOpenModal, 
    isOpen, 
    setIsOpen, 
    handleCloseModal, 
    formData,
    setFormData,
    workouts,
    setWorkouts,
    handleSubmitForm
}: NavbarProps
) => {

    return(
        <nav>
            <header className="flex justify-around bg-zinc-200 p-0 gap-12">
            <img className="h-32 w-21 p-0 object-contain"src={logo}/>
            <ul className="flex items-center gap-8 text-base mt-1">
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
            
            <li>
                <Button 
                    text="Add Workout"
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
                    onClick={handleOpenModal}
                    formData={formData}
                    setFormData={setFormData}
                    workouts={workouts}
                    setWorkouts={setWorkouts}
                />
                {/* Conditional rendering based on state */}
                {isOpen && (
                    <Add 
                        isOpen={isOpen}
                        handleCloseModal={handleCloseModal}
                        setIsOpen={setIsOpen}
                        formData={formData}
                        setFormData={setFormData}
                        handleSubmitForm={handleSubmitForm}
                    />
                )}
            </li>
            </ul>
            </header>
        </nav>
        
    )
}

export default Navbar;