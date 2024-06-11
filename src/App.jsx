import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import TopNavigationBar from "./components/NavigationBar/TopNavigationBar"
import Footer from "./components/Footer/Footer"
import Contact from "./Pages/Contact/Contact"
import VetPartnerPage from "./Pages/Vet-Partner/VetPartnerPage"
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp"
import ForgotPassword from "./components/ForgotPassword/ForgotPassword"
import About from "./Pages/About/About"
import SelectAddress from "./Pages/Form/SelectAddress"




function App() {


  return (
    <div className='App'>
      <Router>
        <TopNavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SelectAddress" element={<SelectAddress />} />
          <Route path="/About" element={<About />} />
          <Route path="/VetPartnerPage" element={<VetPartnerPage />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        {/*  <Footer /> */}
      </Router>
    </div>
  )
}

export default App
