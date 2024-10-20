import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from "./components/screens/Home";
import Profile from "./components/screens/Profile";
import Signin from "./components/screens/Signin";
import Signup from "./components/screens/Signup";
import CreatePost from "./components/screens/CreatePost";
import "./App.css";
import { reducer, initialState } from "./reducer/userReducer";

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const {state,dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload:user });
    }else{
      navigate("/signin")
    }
    
  }, );
return(
  <Routes>
      <Route exact path="/" element={state.user? <Home /> : <Signin/>} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={(state.user)? <Profile /> :  <Signin/>} />
      <Route path="/createpost" element={state.user? <CreatePost /> :  <Signin/>} />
    </Routes>
)
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <NavBar />
        <Routing/>
        
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;