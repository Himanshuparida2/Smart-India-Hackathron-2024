import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Background from './components/Background'
import Help from './components/Help';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import { LoggedInProvider } from './context/Logged';
import Loginas from './components/Loginas'
import Login from './components/Login'
import Signin from './components/Signin'
import Booking from './components/Booking'
import Profile from './components/Profile'
import { LoggedProvider } from './context/Loggedas';
import ManageInventory from './components/ManageInventory'
import Medco from './components/Medco'
import Blood from './components/Blood'
import BloodBridge from './components/BloodBridge'
import Order from './components/Order'
import Insurance from './components/Insurance'
import TrackInventory from './components/TrackInventory';
import Spinner from './components/Spinner';
import BookingAni from './components/BookingAni';

function App() {
  
  return (
    <div className="App">
      <Router>
        <LoggedInProvider>
          <LoggedProvider>
        <Background/>
        <Sidebar/>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/help' element={<Help/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact Address={' SOA, Khandagiri, Bhubaneswar, Odisha 751030'} Call={'1234567890'} Email={'healthharmonywebapp@gmail.com'} Website={'health-harmony.com'}/>}></Route>
          <Route path='/loginas' element={<Loginas/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/booking' element={<Booking/>}></Route>
          <Route path='profile' element={<Profile name={'Adyasha Muni'} Phone={'1234567890'} Email={'adyashamuni@gmail.com'} Address={'Unit-1, Bhubaneswar'} />}></Route>
          <Route path='/medco' element={<Medco/>}></Route>
          <Route path='/manage-inventory' element={<ManageInventory/>}></Route>
          <Route path='/blood' element={<Blood/>}></Route>
          <Route path='/bloodbridge' element={<BloodBridge/>}></Route>
          <Route path='/order' element={<Order/>}></Route>
          <Route path='/insurance' element={<Insurance/>}></Route>
          <Route path='/stock' element={<TrackInventory/>}></Route>
          <Route path='/spinner' element={<Spinner/>}></Route>
          <Route path='/booking-ani'element={<BookingAni/>}></Route>
        </Routes>
        </LoggedProvider>
        </LoggedInProvider>
      </Router>
    </div>
  );
}

export default App;
