import React, {useState} from 'react'
import { useNavigate , Routes, Route } from "react-router-dom"
import './styles.css'
import Header from './header'
import Welcome from './welcome'
<Route path="/welcome" component={Welcome} />

function RegistrationForm() {
 // const [register, setRegister ] = useState(false);
 const navigate = useNavigate()
 const [title, setTitle] = useState('')
 const welcomePage = () => {
//  {register ? setRegister(false): setRegister(true) && navigate('/welcome')}
//  setRegister(true)
 navigate('/welcome')
 // //    window.location.href = "/welcome"
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
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              </div>
              <div class="footer">
              <button className="btn" onClick={welcomePage} >Register</button>
              <Routes>
              <Route path="/welcome" element={<Welcome name={title}/>} />
              </Routes>
              </div>
        {/* <div>
        {register ? navigate('/welcome') : null}
        </div> */}
      </div>      
    )       
}
export default RegistrationForm
