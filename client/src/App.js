import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Components/Home';
import Header from './Components/Header';
import Login from './Components/Login';
import KicksList from './Components/KicksList';
import Search from './Components/Search';
import SignInPage from './Components/SigninPage';
import NewKickForm from './Components/NewKickForm';
import Navbar from './Components/Navbar';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart'; 
import './App.css';

function App() {
  
    const [user, setUser] = useState({});
    const [kicks, setKicks] = useState([]);
    const [filteredKicks, setFilteredKicks] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    useEffect(() => {
        fetch('/items')
        .then(res => res.json())
        .then(data => setKicks(data));
      }, []);

    useEffect(() => {
      const filteredKicks = kicks.filter(kick => kick.name.toLowerCase().includes(searchKey.toLowerCase()))
      setFilteredKicks(filteredKicks);
    }, [searchKey]);

    useEffect(() => {
      fetch("/me").then((resp) => {
        if (resp.ok) {
          resp.json().then((user) => {
            setUser(user)
          });
        }
      })
    }, []);


    function handleAddKick(newKick){
      const updatedKicksArray =[...kicks, newKick];
      setKicks(updatedKicksArray);

      console.log(newKick);


    }
    return (


                 
            <Router>
            <Header />
            <Navbar user={user} setUser={setUser} />
            
            <Switch>
            <Route path="/" exact component={() => <Home />} >                
                 <Home /> 
                
                 <SignInPage />
                
              </Route>
              <Route path="/kicks" exact component={() => <KicksList kicks={filteredKicks.length ? filteredKicks : kicks} setKicks={setKicks} />}>
              <Search setQuery={setSearchKey} />
              <KicksList kicks={filteredKicks.length ? filteredKicks : kicks} setKicks={setKicks} />
              
              </Route>              
              <Route exact path="/kicks/new" component={() => <NewKickForm />} />
              <NewKickForm onAddKick={handleAddKick}/>
              <Route path="/checkout" component={() => <Checkout />} />

              <Route path="/cart" component={() => <Cart />} />
              
              

            </Switch>
            </Router>
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
