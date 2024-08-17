// src/App.js
import './App.css';
import Nav from './Nav.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/Signup.js';
import PrivateComponent from './components/PrivateComponent.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
<script src="https://stackpath.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>


function App() {
    return ( 
        <div className="App">
            <BrowserRouter >
                <Nav />
                <Routes>
                    <Route element={<PrivateComponent />}>
                    <Route path="/" element={<h1>Product Component</h1>} />
                    <Route path="/add" element={<h1>Add Product Component</h1>} />
                    <Route path="/update" element={<h1>Update Product Component</h1>} />
                    <Route path="/logout" element={<h1>Logout Product Component</h1>} />
                    <Route path="/profile" element={<h1>Profile Product Component</h1>} />
                    </Route>
                    <Route path="/signup" element={<SignUp />} />    
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
