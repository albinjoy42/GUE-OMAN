import AXIOS from 'axios';
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Cust_Profile.css'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
function Emp_reg(){
    const navigate=useNavigate();
    const [name,setEname]=useState("");
    const [contact,setEcontact]=useState("");
    const [mail,setEmail]=useState("");
    const [dept,setEdept]=useState("");
    const [joindate,setEjoindate]=useState(new Date());
    const [address,setEaddress]=useState("");
    const [uname,setEuname]=useState("");
    const [pwd,setEpwd]=useState("");

    function add_employee(){
        AXIOS.post("http://localhost:9000/addemployee",{ename:name,contact:contact,mail:mail,dept:dept,joindate:joindate,address:address,uname:uname,pwd:pwd}).then((response)=>{
        console.log(response.data);
        if(response.data==="empregsuccess")
        {
            alert("Employee added successfully")
        }
        navigate("/Adm_Profile");
    })
    .catch((error) => {
        console.log(error);
      });
    }
  return (
    <>
    <center>
    <h2 class="p-3 mb-2 bg-dark text-white">
        <a href="/Adm_Profile" class="btn btn-info btn-md" style={{float:"left"}}>
            {/* <span class="bi bi-arrow-bar-left">Back</span> */}
            <IoMdArrowRoundBack/> <b>Back</b></a>
        Employee Registration
        </h2>
        </center>
        <div class='container'>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="empname" id="empname" onChange={
                        (event)=>{setEname(event.target.value);
                            }} required></input>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Contact Number</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="contact" id="contact" onChange={
                        (event)=>{setEcontact(event.target.value);
                    }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Email ID</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="mail" id="mail" onChange={
                        (event)=>{setEmail(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Department</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="dept" id="dept" onChange={
                        (event)=>{setEdept(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Joining Date</label>
                <div class="col-sm-4">
                    <DatePicker className='datepicker' selected={joindate} onChange={date => setEjoindate(date)} id="joindate" name="joindate"/>
                    {/* <input type="text" class="form-control" name="joindate" id="joindate" onChange={
                        (event)=>{setEjoindate(event.target.value);
                        }} required/> */}
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="address" id="address" onChange={
                        (event)=>{setEaddress(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="uname" id="uname" onChange={
                        (event)=>{setEuname(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="pwd" id="pwd" onChange={
                        (event)=>{setEpwd(event.target.value);
                        }} required/>
                </div>
        </div>
        <center>
            <button type="button" class="btn btn-warning" onClick={add_employee}>Submit</button>
        </center>
        </div>
        </>
  );
}
export default Emp_reg;