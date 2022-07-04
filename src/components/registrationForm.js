import React, {useState} from 'react'
import {useNavigate, Routes, Route, Navigate} from "react-router-dom"
import './styles.css'
import Header from './header'
import Welcome from './welcome'

function RegistrationForm() {
 const navigate = useNavigate()
 const [email, setEmail] = useState('')
 const [title, setTitle] = useState('')
 //const [register, setRegister] = useState(false);

 const welcomePage = () => {
    {/\S+@\S+\.\S+/.test(email) ? navigate("/welcome") : alert("Please enter an valid email")}
  }

return(
      <div className="form">
        <Header/>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="userName">First Name </label>
                  <input className="form__input" type="text" id="userName" placeholder="Username" onChange={event => setTitle(event.target.value)} />
              </div>
              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email" onChange={event => setEmail(event.target.value)} />
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
          </div>
          <div class="footer">
                <button className="btn" onClick={welcomePage} >Register</button>
          </div>
          <Routes>
          <Route exact path="/welcome" element={<Welcome name={title} />} />
        </Routes>
      </div>      
    )       
}
export default RegistrationForm
