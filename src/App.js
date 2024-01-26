import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home'
import OurTeam from './Component/OurTeam/OurTeam';
import ContactUs from './Component/ContactUs/ContactUs'
import Login from './Component/Login/Login';
import Booking from './Component/Booking/booking';
import SignUpForm from './Component/SignUpForm/SignUpForm';
import Footer from './Component/Footer/Footer';
import Parties from './Component/Parties/Parties';
import Marriages from './Component/Marriages/Marriages';
import BParty from './Component/BParty/Bparty';
import UsersForm from './Component/UsersForm/UsersForm';
import Admin from './Component/Admin/Admin';
import SuccessPage from './Component/SuccessPage/SuccessPage';
import CancelPage from './Component/CancelPage/CancelPage';


function App() {
  return (
    <Router>
      <Routes>
       <Route path="/" element={
       <>
       <Layout/>
       <Footer/>
       </>
      }>  
       <Route path="/" element={<Home/>}/>     
       <Route path="/home" element={<Home/>}/>
       <Route path="OurTeam" element={<OurTeam/>}/>
       <Route path="ContactUs" element={<ContactUs/>}/>
       <Route path="Login" element={<Login/>}/> 
       <Route path="SignUpForm" element={<SignUpForm/>}/> 
       <Route path="Parties" element={<Parties/>}/>  
       <Route path="Marriages" element={<Marriages/>}/>  
       <Route path="Booking" element={<Booking/>}/>  
       <Route path="BParty" element={<BParty/>}/>  
       <Route path ="UsersForm" element={<UsersForm/>}/>
       <Route path ="Admin" element={<Admin/>}/>
       <Route path ="booking" element={<Booking/>}/>
       <Route path ="successCheckout" element={<SuccessPage/>}/>
       <Route path ="cancelCheckout" element={<CancelPage/>}/>
     </Route>
   </Routes>
    </Router>
  );
}

export default App;
