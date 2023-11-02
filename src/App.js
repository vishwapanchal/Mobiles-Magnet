import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Shop } from './Pages/Shop/Shop';
import { Cart } from './Pages/Cart/Cart';
import { ShopContextProvider } from './Context/ShopContext';
import './App.css';
import Login from './Components/Login';


function App() {
    return (
        <ShopContextProvider>
            <div className="App">
                Shopxcon
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Shop />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path='/login' element={<Login />} />


                    </Routes>
                </Router>
            </div>
        </ShopContextProvider>
    );
}

export default App;
