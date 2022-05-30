import React, {useState, useEffect} from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Kicks from './Components/Kicks'
import Home from './Components/Home'
import Login from './Components/Login';
import KicksList from './Components/KicksList';
import Search from './Components/Search';
import KickCard from './Components/KickCard';
import SignUp from './Components/SignUp';
import SignInPage from './Components/SigninPage';
import Header from './Components/Header';

import Navbar from './Components/Navbar';

function setQuery(searchKey){ 
  console.log(searchKey);

}


function App() {
  
    const [user, setUser] = useState("");
    const [kicks, setKicks] = useState([]);

useEffect(() => {
    fetch('http://localhost:3000/items')
    .then(res => res.json())
    .then(data => setKicks(data));
  }, []);

console.log(kicks);
    
return (
    <div>Kicks
   {/* <Kicks  />  */}
      <Header />
      <Home />
      <Login />
      <Search useQuery={setQuery}/>
      <SignInPage />
      <Navbar user={user} setUser={setUser}/> 
      <KickCard kicks={kicks} />
      <KicksList kicks={kicks} setKicks={setKicks} />
      
      
      <SignUp />  
      


    </div>

  )
}

export default App




// on page load fetch kicks and store in stateful
// display all kicks 
// create a container component responsible for iterating over kicks and displaying  => KicksContainer
// create a show component => Kick 


// Signup - where should I start? where does it start in the frontend/client/user interaction

// create a form -> create a signup component that contains a form 
  // create the component -? 
  // create the form with all necessary input fields (email, password, username)
  // on change listeners to store values in state
  // send post request to /users with the values that are in state
  // make sure endpoint is set up to create user or send errors back if invalid
  // hanlde response in frontend
    // -> put user in state 
    // or display errors as to why user couldn't be created_at


    // Login - where should I start? login form
    // create a component to hold login
