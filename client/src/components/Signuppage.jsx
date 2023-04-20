import AXIOS from 'axios';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
  
  function Signup(){
    const [nam,nam_set]=useState('');
    const [contact,contact_set]=useState('');
    const [address,address_set]=useState('');
    const [uname,uname_set]=useState('');
    const [pwd,pwd_set]=useState('');
    const navigate=useNavigate();
    function user_reg(){
    AXIOS.post("http://localhost:9000/create",{nam:nam,contact:contact,address:address,uname:uname,pwd:pwd}).then((response)=>{
      console.log("success"+response.data);
      navigate("/Signinpage");
  })
  }
    return(
        <>
        <center>
        <div className='body'>
        <div className="containersign">
            <div className="left"></div>
            <div className="center"><br></br>
            <p class="fs-3">Sign Up</p>
            <input type={Text} name="nam" id="nam" placeholder="Enter Name : " onChange={
            (event)=>{
              nam_set(event.target.value);
            }
           }
            className="signtbox" required></input><br></br>
            <input type={Text} name="contact" id="contact" onChange={
            (event)=>{
              contact_set(event.target.value);
            }
           }
           placeholder="Enter Contact Number : " className="signtbox" required></input><br></br>
            <textarea name='address' id="address" onChange={
            (event)=>{
              address_set(event.target.value);
            }
           }
           placeholder='Enter Address : ' className='signtbox' required></textarea><br></br>
            <input type={Text} name="uname" id="uname" onChange={
            (event)=>{
              uname_set(event.target.value);
            }
           }
           placeholder="Enter Username : " className="signtbox" required></input><br></br>
            <input type={"password"} name="pwd" id="pwd" 
            onChange={
              (event)=>{
                pwd_set(event.target.value);
              }
             }
             placeholder="Enter Password : " className="signtbox" required></input><br></br>
            <button type="submit" className="signbtn" onClick={user_reg} ><b>Sign Up</b></button><br></br>
            <span className="crt">Already have an account..? <a href="/Signinpage" className='crt'>Sign In!</a></span>
            </div>
            </div></div></center>
            <div class="footer">
  <p>Copyright @ 2023 by Albin & Tony. All Rights Reserved.
GUE Oman is Powered by Camerinfolks  Pvt Ltd.
  </p>
</div>
        </>
    );
}
export default Signup;