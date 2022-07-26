import React, {useState} from 'react'
import {useNavigate, Routes, Route} from "react-router-dom"

import './styles.css'
import Header from './header'
import Welcome from './welcome'

function RegistrationForm() {
 const navigate = useNavigate()
 const [email, setEmail] = useState('')
 const [title, setTitle] = useState('')
 const welcomePage = () => {/\S+@\S+\.\S+/.test(email) ? navigate("/welcome") : alert("Please enter an valid email")}
      
    return(
      <div className="form">
        <Header/>
        <center>
          <div className="form-body"  >
              <div className="username">
                 <h4> <label className="form__label" for="userName">Name</label> </h4>
                <h5>  <input className="form__input" type="text" id="userName" placeholder="Username" onChange={event => setTitle(event.target.value)} /></h5>
              </div>
              <div className="email">
                 <h4> <label className="form__label" for="email">Email </label> </h4>
                <h5>  <input  type="email" id="email" className="form__input" placeholder="Email" onChange={event => setEmail(event.target.value)} /></h5>
              </div>
              <div className="password">
                 <h4> <label className="form__label" for="password">Password </label> </h4>
                 <h5> <input className="form__input" type="password"  id="password" placeholder="Password"/> </h5>
              </div>
          </div>
          <div className="footer">
                <button className="btn" onClick={welcomePage} >Register</button>
          </div>
          <Routes>
            <Route exact path="/welcome" element={<Welcome name={title} />} />
          </Routes>
        </center>  
      </div>      
    )       
}
export default RegistrationForm
