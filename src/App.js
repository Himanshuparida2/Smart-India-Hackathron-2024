import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Help from "./components/Help";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Background from "./components/Background";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./components/Login";
import Signin from "./components/Signin";
import Booking from "./components/Booking";
import Profile from "./components/Profile";
import { LoggedInProvider } from "./context/Logged";
import Loginas from "./components/Loginas";

function App() {
  return (
    <div className="App">
      <Router>
      <LoggedInProvider>
        <Navbar />
        <Sidebar />
        <Background/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/help" element={<Help/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/loginas"element={<Loginas/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
          <Route path="/profile" element={<Profile name={'Adyasha'}/>}></Route>
        </Routes>
        </LoggedInProvider>
      </Router>
    </div>
  );
}

export default App;
