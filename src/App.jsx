import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import {Register} from "./pages/Register.jsx";
import {Home} from "./pages/Home.jsx";
import {Login} from "./pages/Login.jsx";
import {Users} from "./pages/Users.jsx";
import {UserEdit} from "./pages/UserEdit.jsx";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/users" element={<Users/>}/>
            <Route path="/user/:id" element={<UserEdit/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
