import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Cust_Profile.css'
import AXIOS from 'axios';
import { useEffect, useState } from 'react';
function Cust_Profile(){
  const [produ,setProducts]=useState([]);
  const [emptyMessage,setEmptyMessage] = useState('');
  useEffect(()=>{
    AXIOS.get("http://localhost:9000/displayproducts")
    .then(response =>  {setProducts(response.data);
      console.log(produ[0]);
    })
    .catch((err) => {
      setEmptyMessage("No products to show!");
  })
    },[])
    return(
        <>
        <center>
            <div class='relative pb-3'>
            <h2 class="p-3 mb-2 bg-dark text-white">Customer Profile</h2><br></br>
            <div class="text-danger"> {emptyMessage} </div>
            <div class="text-center container py-5">
            <div class="row">
            {produ.map((ls)=>(
                  <div class="col-lg-4 col-md-12 mb-4" key={ls.id}>
                    <div class="card">
                      <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" >
                        {console.log(ls.image)}
                        <img class="card-img-top" src={ls.image} alt={ls.name}/>
                        <a href="#!">
                          <div class="hover-overlay">
                            <div class="mask" style={{backgroundColor: "rgb(251, 251, 251, 0.15)"}}></div>
                          </div>
                        </a>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title mb-3">{ls.name}</h5>
                        <p class="card-text" style={{height:"100"}}>{ls.desc}</p>
                        <p class="card-text">Qty {ls.qty}</p>
                        <p>Category - {ls.cat}</p>
                        <h6 class="mb-3">${ls.price}</h6>
                        <div><button class="btn btn-primary">Add to cart</button></div>
                      </div>
                    </div>
                  </div>
            ))}
            </div>
            </div>
            </div>
            </center>
        </>
    );
}
export default Cust_Profile;