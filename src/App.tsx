import { saveWorkouts, loadWorkouts, clearWorkouts } from "./utils/storage";
import Navbar from './components/Navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";
import type { WorkoutDetails } from "./types/fighter-training-tracker.interface";
import { useEffect, useState } from "react";



const App = () =>{

  const [workouts, setWorkouts] = useState<WorkoutDetails[]>(() => loadWorkouts());
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [formData, setFormData] = useState<WorkoutDetails>({
        id: "",
        title: "",
        discipline: "",
        date: new Date().toISOString().split("T")[0],
        duration: "",
        notes: ""
  });

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () =>{
    setIsOpen(false);
  };

  const handleSubmitForm = () => {
    const newWorkout = {
      ...formData,
      id: crypto.randomUUID(),
    };

    setWorkouts((prev) => [...prev, newWorkout]);
  
    setFormData({
      id: "",
      title: "",
      discipline: "",
      date: new Date().toISOString().split("T")[0],
      duration: "",
      notes: "",
    });
    setIsOpen(false);
  }



  useEffect(() => {
    saveWorkouts(workouts);
  }, [workouts]);

          
  return (
    <Router>
      <Navbar
        handleOpenModal={handleOpenModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleCloseModal={handleCloseModal}
        formData={formData}
        setFormData={setFormData}
        workouts={workouts}
        setWorkouts={setWorkouts}
        handleSubmitForm={handleSubmitForm}
      />
      <Routes>
        <Route 
        path="/" 
        element={
        <Dashboard 
        setWorkouts={setWorkouts}
        handleSubmit={handleOpenModal}
        workouts={workouts}/>
        }
        />
        <Route 
        path="/workout" 
        element={
        <Workout 
        workouts={workouts}
        />
        } />
      </Routes>
    </Router>
  )
}

export default App;