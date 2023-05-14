import Logo from '../assets/gravlogo.png'
function Navbar() {
  return (
    <>
      <nav id="navbar">
        <div id="nav-logo">
          <img id="logo" src={Logo} alt="Graviti Logo" />
        </div>
      </nav>
    </>
  )
}

export default Navbar
