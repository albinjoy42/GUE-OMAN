import {Routes,Route,Link} from 'react-router-dom'
import '../components/Navbar.css'
import pic from '../images/logo.png'
import fb from '../images/facebook.png'
import wh from '../images/whatsapp.png'
import ig from '../images/instagram.png'
import tw from '../images/twitter.png'
import Home from './Homepage'
import About from './Aboutpage'
import Signin from './Signinpage'
import Signup from './Signuppage'
import Contact from './Contactpage'
import Cust_Profile from './Cust_Profile'
import Adm_Profile from './Adm_Profile'
import Products from './Products'
import Machinery from './Machinery'
import Category from './Category'
import Emp_reg from './Emp_reg'
import Supplier_reg from './Supplier_reg'
import Stock_update from './Stock_update'

function Navba(){
    return(
        <>
        <nav className='navbar'>
            <div className='logo'>
                <img src={pic} className="logimg"/>
                <b><Link to="" className='logotext'>GUE OMAN</Link></b>
            </div>
            <ul className='navs'>
                <li className='navitems'>
                    <Link to="">Home</Link>
                </li>
                <li className='navitems'>
                    <Link to="/Aboutpage">About Us</Link>
                </li>
                <li className='navitems'>
                    <Link to="/Signinpage">Sign In</Link>
                </li>
                <li className='navitems'>
                    <Link to="/Signuppage">Sign Up</Link>
                </li>
                <li className='navitems'>
                    <Link to="/Contactpage">Contact Us</Link>
                </li>
            </ul>
            <div className='socialmedia'>
            <a href="https://www.facebook.com"><img src={fb} className="social"/></a>
            <a href="https://www.whatsapp.com"><img src={wh} className="social"/></a>
            <a href="https://www.instagram.com"><img src={ig} className="social"/></a>
            <a href="https://www.twitter.com"><img src={tw} className="social"/></a>
            </div>
            </nav>
            <Routes>
            <Route path='' element={<Home/>}></Route>
            <Route path='/Aboutpage' element={<About/>}></Route>
            <Route path='/Signinpage' element={<Signin/>}></Route>
            <Route path='/Signuppage' element={<Signup/>}></Route>
            <Route path='/Contactpage' element={<Contact/>}></Route>
            <Route path='/Cust_Profile' element={<Cust_Profile/>}></Route>
            <Route path='/Adm_Profile' element={<Adm_Profile/>}></Route>
            <Route path='/Products' element={<Products/>}></Route>
            <Route path='/Machinery' element={<Machinery/>}></Route>
            <Route path='/Category' element={<Category/>}></Route>
            <Route path='/Employee_registration' element={<Emp_reg/>}></Route>
            <Route path='/Supplier_registration' element={<Supplier_reg/>}></Route>
            <Route path='/Stock_Update' element={<Stock_update/>}></Route>
        </Routes>
        </>
    );
}
export default Navba;