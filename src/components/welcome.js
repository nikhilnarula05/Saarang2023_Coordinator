import Iframe from 'react-iframe'

function Header(props) {
    return(
          <div className="welcomePage">
          <h1>
            Hello {props.name} !
          </h1>
          <img
          height={200}
          src="https://images.pexels.com/photos/65006/pexels-photo-65006.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Welcome Cat"
          ></img>
          <Iframe 
          style="border-radius:12px" 
          src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b?utm_source=generator" 
          width="100%" 
          height="80" 
          frameBorder="0" 
          allowfullscreen="" 
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"/>
          </div>
    )
}
export default Header;

