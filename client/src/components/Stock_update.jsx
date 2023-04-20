import AXIOS from 'axios';
import React, { useEffect, useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Cust_Profile.css'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function Stock_update(){

    const [srchid,setSid]=useState("");
    const [pname,setName]=useState("");
    const [pdesc,setDesc]=useState("");
    const [pcat,setCat]=useState("");
    const [pqty,setQty]=useState("");
    const [pprice,setPrice]=useState("");
    const [image,setImage]=useState({ preview: '', data: '' });
    const [stock,setStock]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        AXIOS.get("http://localhost:9000/displaystock")
        .then(response =>  {setStock(response.data)});
    },[])

    function update_product(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image.data);
        formData.append("pname",pname)
        formData.append("pdesc",pdesc)
        formData.append("pcat",pcat)
        formData.append("pqty",pqty)
        formData.append("pprice",pprice)
        console.log(image.data)
        AXIOS.post("http://localhost:9000/updateproduct",formData).then((response)=>{
        console.log(response.data);
        if(response.data==="productsuccess")
        {
            alert("Product updated successfully")
        }
        navigate("/Stock_update");
    })
    .catch((error) => {
        console.log(error);
      });
    }
    const handleFileChange = (e) => {
        const img = {
          preview: URL.createObjectURL(e.target.files[0]),
          data: e.target.files[0],
        }
        setImage(img)
      }
  return (
    <>
        <center>
    <h2 class="p-3 mb-2 bg-dark text-white">
        <a href="/Adm_Profile" class="btn btn-info btn-md" style={{float:"left"}}>
            {/* <span class="bi bi-arrow-bar-left">Back</span> */}
            <IoMdArrowRoundBack/> <b>Back</b>
        </a>Stock Management</h2>
        </center>

        <div class="container">
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Image</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td><label name="prod_id" id="prod_id"></label></td>
                <td><label name="prod_name" id="prod_name"></label></td>
                <td><label name="desc" id="desc"></label></td>
                <td><label name="cat" id="cat"></label></td>
                <td><label name="qty" id="qty"></label></td>
                <td><label name="price" id="price"></label></td>
                <td><img src="" name="prod_img" id="prod_img"/></td>
                <td><button type="button" class="btn btn-primary col-10">Edit</button></td>
                <td><button type="submit" class="btn btn-danger col-10">Delete</button></td>
            </tr>
        </table>
        </div>
        </>
  );
}
export default Stock_update;