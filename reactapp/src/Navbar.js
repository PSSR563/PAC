import {Link} from 'react-router-dom';
import './css/main.css';
import Login from './login';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
function Navbar(){
   
        return<>
        <nav>
        <div class="logo">
            <a href="home.html"><p>PAC</p></a>
               
        </div>
        <ul>
            <li><Link to="/engineering">Engneering</Link></li>
            <li><a href="medical.html">medical</a></li>
            <li><a href="#">science</a></li>
            <li><a href="#">management</a></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
        

        </nav> 
    </>

};

export default Navbar;