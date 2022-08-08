import Shirt1 from './Shirts/Shirt1'
import Shirt2 from './Shirts/Shirt2'
function Header() {
  document.querySelector('.form-body').style.display = 'none'
  document.querySelector('.footer').style.display = 'none'
  document.querySelector('.header').style.display = 'none'
    return(
          <div className="welcomePage">
          <h1>
            Hiii !
          </h1>
          <center>
          <Shirt1/>
          <Shirt2/>
          </center>
          </div>
    )
}
export default Header;

