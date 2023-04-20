import AXIOS from 'axios';
import React, { useEffect, useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Cust_Profile.css'
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

function Products(){
    const [pname,setName]=useState("");
    const [pdesc,setDesc]=useState("");
    const [pcat,setCat]=useState("");
    const [pqty,setQty]=useState("");
    const [pprice,setPrice]=useState("");
    const [image,setImage]=useState({ preview: '', data: '' });
    const [cat,setCats]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        AXIOS.get("http://localhost:9000/displaycategory")
        .then(response =>  {setCats(response.data)});
    },[])

    function add_product(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", image.data);
        formData.append("pname",pname)
        formData.append("pdesc",pdesc)
        formData.append("pcat",pcat)
        formData.append("pqty",pqty)
        formData.append("pprice",pprice)
        console.log(image.data)
        AXIOS.post("http://localhost:9000/addproduct",formData).then((response)=>{
        console.log(response.data);
        if(response.data==="productsuccess")
        {
            alert("Product added successfully")
        }
        navigate("/Adm_Profile");
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
        </a>Add Products</h2>
        </center>


    <form method='post' encType='multipart/form-data' onSubmit={add_product}>
        <div class="container">
        <div class="mb-3 row d-flex justify-content-center">
            <label for="name_lbl" class="col-sm-2 col-form-label">Product Name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="pname" id="pname" onChange={
                        (event)=>{
                            setName(event.target.value);
                            }} required></input>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="desc_lbl" class="col-sm-2 col-form-label">Product Description</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="pdesc" id="pdesc" onChange={
                        (event)=>{setDesc(event.target.value);
                    }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="cat_lbl" class="col-sm-2 col-form-label">Product Category</label>
                <div class="col-sm-4">
                <select name="pcat" id="pcat" class="form-select" onChange={
                    (event)=>{setCat(event.target.value);
                    }} required>
                        <option value="none" selected disabled hidden>Select Category</option>
                        {cat.map((ls)=>{
                        return <option>{ls.category_name}</option>
                        })}
                </select>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="qty_lbl" class="col-sm-2 col-form-label">Quantity</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="pqty" id="pqty" onChange={
                        (event)=>{setQty(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="price_lbl" class="col-sm-2 col-form-label">Product Price</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="pprice" id="pprice" onChange={
                        (event)=>{setPrice(event.target.value);
                        }} required/>
                </div>
        </div>
        <div class="mb-3 row d-flex justify-content-center">
            <label for="img_lbl" class="col-sm-2 col-form-label">Product Image</label>
                <div class="col-sm-4">
                    <input class="form-control" type="file" name="file" id="file" onChange={handleFileChange} required/>
                </div>
        </div>
        <center>
        {/* <div class="col-sm-4">
            {image.preview && <img src={image.preview} width='auto' height='100' />}
        </div> */}
        <button type="submit" class="btn btn-warning btn-lg">Submit</button>
        </center>
        </div>
        </form>
        </>
  );
}
export default Products;