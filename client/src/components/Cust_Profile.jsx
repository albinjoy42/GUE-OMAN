import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '../components/Cust_Profile.css'
import AXIOS from 'axios';
import { useEffect, useState } from 'react';
function Cust_Profile(){
  const [produ,setProducts]=useState([]);
  const [emptyMessage, setEmptyMessage] = useState('');
  useEffect(()=>{
    AXIOS.get("http://localhost:9000/displayproducts")
    .then(response =>  {setProducts(response.data);
      console.log(produ);
    })
    .catch((err) => {
      setEmptyMessage("No products to show!");
  });
    },[])
    return(
        <>
        <center>
            <div>
            <h2 class="p-3 mb-2 bg-dark text-white">Customer Profile</h2><br></br>
            <div class="text-danger"> {emptyMessage} </div>

            {produ.map((ls)=>(
              <div class="text-center container py-5">
                <div class="row">
                  <div class="col-lg-4 col-md-12 mb-4">
                  
                    <div class="card">
                      <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light">
                        <img src={ls.image} class="w-100" />
                        <a href="#!">
                          <div class="hover-overlay">
                            <div class="mask" style={{backgroundColor: "rgb(251, 251, 251, 0.15)"}}></div>
                          </div>
                        </a>
                      </div>
                      <div class="card-body">
                        <h5 class="card-title mb-3">{ls.name}</h5>
                        <h5 class="card-title mb-3">{ls.qty}</h5>
                        <p>{ls.desc}</p>
                        <p>{ls.cat}</p>
                        <h6 class="mb-3">{ls.price}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            </div>
            </center>
            <div class="footer">
  <p>Copyright @ 2023 by Albin & Tony. All Rights Reserved.
GUE Oman is Powered by Camerinfolks  Pvt Ltd.
  </p>
</div>
        </>
    );
}
export default Cust_Profile;