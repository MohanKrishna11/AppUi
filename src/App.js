import logo from './logo.svg';
import './App.css';
import { Router } from 'react-router-dom';
import Home from './components/Home';
import NavBar from './components/NavBar';
import ProductsAndCart from './components/ProductsAndCart';
import UserDetails from './components/UserDetails';


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         React Learning 
        </a> */}
         <NavBar/>
         <Router exact path = "/" component={Home}></Router>
         <Router exact path = "/productAndCard" component={ProductsAndCart}></Router>
         <Router exact path = "/userDetails" component={UserDetails}></Router>
      </header>
      
    </div>
   </>     
       
  );
}

export default App;
