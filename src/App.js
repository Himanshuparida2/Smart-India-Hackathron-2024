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
import {IsLog} from "./context/Logged"

function App() {
  return (
    <div className="App">
      <Router>
      <IsLog>
        <Navbar />
        <Sidebar />
        <Background/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/help" element={<Help/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
        </Routes>
        </IsLog>
      </Router>
    </div>
  );
}

export default App;
