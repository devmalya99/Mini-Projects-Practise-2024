//import dependencies

import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";
import ProductCard from "./Component/ProductCard";



export default function LoadMoreButton() {
  const [imgArr, setImgArr] = useState([]);
  const [count,setCount] = useState(0)
  const [loading,setLoading] = useState(true)
  //const [loadComplete,setLoadComplete] = useState(false)


 
  async function fetchProducts(){
    setLoading(true);
    try {
      const {data} = await axios.get(`https://dummyjson.com/products?limit=20&skip=${count*20}`);
      setImgArr((prev)=> (count===0 ? data.products : [...prev, ...data.products]));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
    
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);


  console.log(imgArr);
  if(loading){
    return <h1>Loading your products Please wait...</h1>
  }
  return (
    <div>
      <h1>LoadMoreButton</h1>
      <div className="product-grid ">
      {Array.isArray(imgArr) &&
        imgArr.length &&
        imgArr.map((each) => {
          return (
            <div key={each.id}>
              <ProductCard
                title={each.title}
                price={each.price}
                description={each.description}
                image={each?.images?.[0]}
              />
            </div>
          );
        })}
        {
          imgArr.length ===100 ? <h1>Load Complete</h1> 
          :
          <span>
            <button
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>

          </span>
          
        }
      
      
      </div>
      
    </div>
  );
}


