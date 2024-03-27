import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import  PrivateRoute  from './Components/PrivateRoute';

function App() {
  return (
    <div className="w-screen min-h-screen  bg-[#000814] flex flex-col">
      
      <Navbar/>

      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/signup' element={<SignUp/>} />
         <Route path='/dashboard' element={
                <PrivateRoute>
                   <Dashboard/>
                </PrivateRoute>

              }/>   
           </Routes>
    </div>
  );
}

export default App;
