import { Link } from "react-router-dom";


function Navbar({ user, setUser }) {
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => setUser())
  }

  if (!user)
    return (
      <header>
        <div>
          <h1 class="logo-name"> BnKicks 🔥</h1>
          <h5 class="logo-sub">"Never a bad day for some feet heat!"</h5>
        </div>

        <div class="navbar">
          <Link to="/">Home</Link>
          <Link to="/kicks">Kicks</Link>
        </div>

      </header>
    )
  else {
    return (

      <header>
        <div>
          <h1 class="logo-name"> BnKicks 🔥</h1>
          <h5 class="logo-sub">"Never a bad day for some feet heat!"</h5>
          { user.id && <h3>Hi {user.username}</h3> }
        </div>
        <div class="navbar">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/kicks">Kicks</Link> </li>
            <li> <Link to="/kicks/new">Sell Your Kicks </Link> </li>
            <li> <Link to="/cart">Cart</Link> </li>
            <li> <Link to="/" onClick={handleLogout}>Logout</Link> </li>
          </ul>
        </div>

      </header>

    );
  }
}

export default Navbar;