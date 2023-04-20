import avatar from '../images/img_avatar2.png';
import AXIOS from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.css'

function Signin(){
    const [uname,uname_log]=useState('');
    const [pwd,pwd_log]=useState('');
    const navigate=useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    function loginact(){
    AXIOS.post("http://localhost:9000/login",{uname:uname,pwd:pwd}).then((response)=>{
      console.log(response.data.result);
      if(response.data.result==1){
        navigate("/Cust_Profile");
      }
      else if(response.data.result==2){
        navigate("/Adm_Profile");
      }
      else if(response.data.result==3){
        navigate("/Employee_Profile");
      }
      else if(response.data.result==4){
        navigate("/Supplier_Profile");
      } 
      else
      {
        setErrorMessage("Invalid username or password!");
        console.log("login not success")
      }
  })
}
    return(
        <>
        <center>
        <div className='body'>
        <div className="containersign">
            <div className="left"></div>
            <div className="center"><br></br>
            <p class="fs-3">Sign In</p>
            <div className="imgcontainer">
            <img src={avatar} alt="Avatar" className='avatar'/>
            </div>
            <input type={Text} name="uname" id="uname" placeholder="Enter Username"
             onChange={
              (event)=>{
                uname_log(event.target.value);
              }
             }
            className="signtbox" required></input><br></br>
            <input type={"password"} name="pwd" id="pwd" placeholder="Enter Password" 
             onChange={
              (event)=>{
                pwd_log(event.target.value);
              }
             }
            className="signtbox" required></input><br></br>
            <button type="submit" className="signbtn" onClick={loginact}><b>Sign In</b></button><br></br>
            <div class="text-danger"> {errorMessage} </div>
            <span className="crt">Need an account..? <a href="/Signuppage" className='crt'>Sign Up!</a></span>
            <span className="psw">Forgot <a href="" className='psw'>password?</a></span><br></br><br></br>
            </div>
            </div></div></center>
            <div className="footer">
                <p>Copyright @ 2023 by Albin & Tony. All Rights Reserved.
                   GUE Oman is Powered by Camerinfolks  Pvt Ltd.
                </p>
            </div>
        </>
    );
}
export default Signin;