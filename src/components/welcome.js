import Iframe from 'react-iframe'

function Header(props) {
  document.querySelector('.form-body').style.display = 'none'
  document.querySelector('.footer').style.display = 'none'
    return(
          <div className="welcomePage">
          <h1>
            Hello {props.name} !
          </h1>
          <center>
          <img
          height={200}
          src="https://images.pexels.com/photos/65006/pexels-photo-65006.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Welcome Cat"
          ></img>
          <Iframe className="song" 
          src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b?utm_source=generator" 
          width="50%" 
          height="80" 
          frameBorder="0" 
          allowfullscreen="0" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
          </center>
          </div>
    )
}
export default Header;

