import { saveWorkouts, loadWorkouts } from "./utils/storage";
import Navbar from './components/Navbar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Workout from "./pages/Workout";


const App = () =>{
          console.log("nani", typeof(loadWorkouts()))

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workout" element={<Workout />} />
      </Routes>
    </Router>
  )
}

export default App;