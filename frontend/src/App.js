import './App.css';
import { BrowserRouter , Routes, Route, redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import GuestRoute from './components/authentication/GuestRoute/GuestRoute';
import SemiProtectedRoute from './components/authentication/SemiProtectedRoute/SemiProtectedRoute';
import ProtectedRoute from './components/authentication/ProtectedRoute/ProtectedRoute';
import Rooms from './pages/Rooms/Rooms';
function App() {
  return (
    <div className='app'>
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<GuestRoute Component={Home}/>}/>
            <Route path="/authenticate" element={<GuestRoute Component={Authenticate}/>}/>
            <Route path="/activate" element={<SemiProtectedRoute Component={Activate}/>}/>
            <Route path="/rooms" element={<ProtectedRoute Component={Rooms}/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}



export default App;
