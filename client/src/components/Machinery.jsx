import AXIOS from 'axios';
import React, { useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Products.css'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function Machinery(){
    const navigate=useNavigate();
    const [mname,setMname]=useState("");
    const [msupplier,setMsupplier]=useState("");
    const [mqty,setMqty]=useState("");
    const [mprice,setMprice]=useState("");
//  const [success,setSuccess]=useState("");

    function add_machine(){
        AXIOS.post("http://localhost:9000/addmachine",{mname:mname,msupplier:msupplier,mqty:mqty,mprice:mprice}).then((response)=>{
        console.log(response.data);
        if(response.data==="machinesuccess")
        {
            alert("Machine added successfully")
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
            <IoMdArrowRoundBack/> <b>Back</b>
        </a>Add Machinery
        </h2>
        </center>
        <div class="container">
        <div class="mb-3 row d-flex justify-content-center">
            <label for="name_lbl" class="col-sm-2 col-form-label">Machine Name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="mname" id="mname" onChange={
                        (event)=>{
                            setMname(event.target.value);
                            }} required></input>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="desc_lbl" class="col-sm-2 col-form-label">Supplier</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="msupplier" id="msupplier" onChange={
                        (event)=>{setMsupplier(event.target.value);
                    }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="qty_lbl" class="col-sm-2 col-form-label">Quantity</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="mqty" id="mqty" onChange={
                        (event)=>{setMqty(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="price_lbl" class="col-sm-2 col-form-label">Price</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="mprice" id="mprice" onChange={
                        (event)=>{setMprice(event.target.value);
                        }} required/>
                </div>
        </div>
        <center>
            <button type="button" class="btn btn-warning" onClick={add_machine}>Submit</button>
        </center>
        </div>
        </>
  );
}
export default Machinery;