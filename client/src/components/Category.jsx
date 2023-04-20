import AXIOS from 'axios';
import React, { useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Products.css'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function Category(){
    const navigate=useNavigate();
    const [catname,setCatname]=useState("");

    function add_category(){
        AXIOS.post("http://localhost:9000/addcategory",{catname:catname}).then((response)=>{
        console.log(response.data);
        if(response.data==="categorysuccess")
        {
            alert("Category added successfully")
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
            {/* <span class="bi bi-arrow-bar-left">Back</span> */}
            <IoMdArrowRoundBack/> <b>Back</b>
        </a>
        Add Category
        </h2></center>
        <div class="container">
        <br></br><br></br>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="name_lbl" class="col-sm-2 col-form-label">Category Name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="catname" id="catname" placeholder='Enter a new category name' onChange={
                        (event)=>{
                            setCatname(event.target.value);
                            }} required></input>
                </div>
        <center>
        <br></br><br></br>
            <button type="button" class="btn btn-warning" onClick={add_category}>Submit</button>
        </center>
        </div>
        </div>
        </>
  );
}
export default Category;