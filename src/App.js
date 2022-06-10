import './App.css';
import Home from './components/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import ProjectsDetails from './components/ProjectsDetails';

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/projectdetails/:id' element={<ProjectsDetails></ProjectsDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
