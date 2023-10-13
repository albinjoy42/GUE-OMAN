import React, {useState, useEffect} from 'react';
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Cust_Profile.css'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function Adm_Profile(){
  const navigate = useNavigate();
    return(
        <>
            <div><center>
            <h2 class="p-3 mb-2 bg-dark text-white">
              <a href="/Signinpage" class="btn btn-info btn-md" style={{float:"left"}}><IoMdArrowRoundBack/> <b>Logout</b> </a>
              Admin Profile
            </h2></center>
            <br></br>
            <table style={{width:"40%"}}>
            <br></br>
            <tr><td><button type="button" class="btn btn-warning btn-lg" onClick={() => navigate("/Employee_registration")}>Add Employee</button></td>
            <td><button type="button" class="btn btn-warning btn-lg" onClick={() => navigate("/Supplier_registration")}>Add Supplier</button></td></tr>
            <tr><td><button type="button" class="btn btn-warning btn-lg" onClick={() => navigate("/Category")}>Add Category</button></td>
            <td><button type="button" class="btn btn-warning btn-lg" onClick={() => navigate("/Products")}>Add Product</button></td></tr>
            <tr><td><button type="button" class="btn btn-warning btn-lg" onClick={() => navigate("/Stock_Update")}>Manage Stock</button></td>
            <td><button type="button" class="btn btn-warning btn-lg" onClick={() => navigate("/Machinery")}>Add Machinery</button></td></tr>
            </table>
            <table style={{width:"60%"}}></table>
            </div>
        </>
    );
}
export default Adm_Profile;