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
          </div>
    )
}
export default Header;
