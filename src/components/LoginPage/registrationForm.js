import React, {useState} from 'react'
import {useNavigate, Routes, Route} from "react-router-dom"

import '../styles.css'
import Header from './header.js'
import Welcome from '../welcome'

function RegistrationForm() {
 const navigate = useNavigate()
 const [email, setEmail] = useState('')
 const welcomePage = () => {
  !(/\S+@\S+\.\S+/.test(email)) ? navigate("/welcome") : alert("Please enter an valid email")
}
    return(
      <div className="form">
        <Header/>
        <center>
          <div className="form-body"  >
              <div className="email">
                 <h4> <label className="form__label" for="email"></label> </h4>
                <h5>  <input id="email" className="form__input" placeholder="Click below to Login" onChange={event => setEmail(event.target.value)} /></h5>
              </div>
          </div>
          <div className="footer">
                <button className="btn" onClick={welcomePage} >Login via Mail</button>
          </div>
          <Routes>
            <Route exact path="/welcome" element={<Welcome />} />
          </Routes>
        </center>  
      </div>      
    )       
}
export default RegistrationForm
