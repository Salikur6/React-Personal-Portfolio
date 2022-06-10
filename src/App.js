import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import CarManufacturer from './components/CarManufacturer';
import Navbar from './components/Navbar';
import FurnituresiteProject from './components/FurnituresiteProject';

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/projectdetails/:id' element={<ProjectsDetails></ProjectsDetails>}></Route> */}

        <Route path='/carproject' element={<CarManufacturer></CarManufacturer>}></Route>

        <Route path='/furnitureproject' element={<FurnituresiteProject></FurnituresiteProject>}></Route>
      </Routes>
    </div>
  );
}

export default App;
