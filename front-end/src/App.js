// src/App.js
import './App.css';
import Nav from './Nav.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignIn from './components/SignIn.js';
import PrivateComponent from './components/PrivateComponent.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SignUp from './components/Signup.js';
import UserData from './components/UserData.js';
import Products from './components/Products.js'
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>


function App() {
    return ( 
        <div className="App">
            <BrowserRouter >
                <Nav />
                <Routes>
                    <Route element={<PrivateComponent />}>
                    <Route path="/" element={<Products />} />
                    </Route>
                    <Route path="/signin" element={<SignIn />} />   
                    <Route path="/signup" element={<SignUp />} />    
                    <Route path="/userdata" element={<UserData />} />      
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
