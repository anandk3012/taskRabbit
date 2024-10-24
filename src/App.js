import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import SignUp from './pages/Signup';
import { useState,useContext, createContext } from 'react';

function App() {

  const UserContext = createContext();
  const [login,setLogin] = useState(false);

  return (

    // Manage user login using usecontext hook for global management of user state
    <UserContext.Provider value={login}  >

      {/*  Browser router for routing between pages  */}
      <BrowserRouter className="App">
        <Navbar />
        <Routes> {/* App routes */}
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
