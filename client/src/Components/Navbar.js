import { Link } from "react-router-dom";

function Navbar({user, setUser}) {
  function handleLogout() {
    fetch("/logout",{
      method: "DELETE",
    }).then(() => setUser())
  }

  if(!user) 
  return(
    <header>
      <div>
        <h1 class="logo-name"> BnKicks </h1>
        <h5 class="logo-sub">"Never a bad day for some feet heat!"</h5>
      </div>
       
        <div class="container green borderXwidth">
          {/* <Link to="/">Home</Link> */}
           {/* <Link to="/kicks">Kicks</Link>  */}
          
          {/* <Link to="/signinpage">Sign-In</Link>  */}
        </div>
    
  </header>
  )
  else{
  return (
  
      <header>
          <div>
          <h1 class="logo-name"> BnKicks </h1>
          <h5 class="logo-sub">"Never a bad day for some feet heat!"</h5>
          </div>
       

        <div class="container green borderXwidth">
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/kicks">Kicks</Link> */}
          
          {/* <Link to="/" onClick={handleLogout}>Logout</Link> */}
        </div>

      </header>

  );
}}

export default Navbar;