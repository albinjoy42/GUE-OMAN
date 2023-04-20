import AXIOS from 'axios';
import React, { useState } from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Cust_Profile.css'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
function Supplier_reg(){
    const navigate=useNavigate();
    const [name,setSname]=useState("");
    const [contact,setScontact]=useState("");
    const [mail,setSmail]=useState("");
    const [address,setSaddress]=useState("");
    const [uname,setSuname]=useState("");
    const [pwd,setSpwd]=useState("");

    function add_supplier(){
        AXIOS.post("http://localhost:9000/addsupplier",{ename:name,contact:contact,mail:mail,address:address,uname:uname,pwd:pwd}).then((response)=>{
        console.log(response.data);
        if(response.data==="supregsuccess")
        {
            alert("Supplier added successfully")
        }
        navigate("/Adm_Profile");
    })
    .catch((error) => {
        console.log(error);
      });
    }
    return(
        <>
        <center>
        <h2 class="p-3 mb-2 bg-dark text-white">
            <a href="/Adm_Profile" class="btn btn-info btn-md" style={{float:"left"}}>
            <IoMdArrowRoundBack/> <b>Back</b></a>
            Supplier Registration
        </h2>
        </center>
        <div class='container'>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="empname" id="empname" onChange={
                        (event)=>{setSname(event.target.value);
                            }} required></input>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Contact Number</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="contact" id="contact" onChange={
                        (event)=>{setScontact(event.target.value);
                    }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Email ID</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="mail" id="mail" onChange={
                        (event)=>{setSmail(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Address</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="address" id="address" onChange={
                        (event)=>{setSaddress(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="uname" id="uname" onChange={
                        (event)=>{setSuname(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="pwd" id="pwd" onChange={
                        (event)=>{setSpwd(event.target.value);
                        }} required/>
                </div>
        </div>
        <center>
            <button type="button" class="btn btn-warning" onClick={add_supplier}>Submit</button>
        </center>
        </div>
    </>
    );
}
export default Supplier_reg;