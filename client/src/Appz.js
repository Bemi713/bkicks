import Home from './Components/Home'
import { Routes, Route } from 'react-router-dom'

function App(){
    return(
        <div>
            <h1>Hello World</h1> 
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App;