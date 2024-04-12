import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../custom/ProductCard";
import ProductCardShimmer from "../../custom/Simmerui";

export default function InfinityScroll() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [count,setCount]= useState(0)

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`https://dummyjson.com/products?limit=10&skip=${count*10}`);
      if (data && data.products.length) {
        setProducts((prev)=> (count===0 ? data.products : [...prev, ...data.products]));
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };



  const handleInfinityscroll =()=>{
    console.log('scroll height: ',document.documentElement.scrollHeight)

    console.log("inner height: ", window.innerHeight)

    console.log("scroll top: ", document.documentElement.scrollTop);
    try {
        if ((window.innerHeight + document.documentElement.scrollTop+2)>=document.documentElement.scrollHeight){
            setCount(prev=>prev+1)
            console.log("end hit")
        }
        
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
    console.log(products);
  }, [count]);

  useEffect(()=>{
    window.addEventListener('scroll', handleInfinityscroll)
  },[])

  console.log(products);

  {
    loading ? <ProductCardShimmer/>
    :
    null
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

      {
       products.map((each) => (
        <div
          key={each.id}
          className=" "
        >
          <ProductCard title={each.title} description={each.description} image={each.images[3]}/>
        </div>
      ))
    }
    {
        products.length===100 ? <h1>This is end of product list</h1>  
        :
        null
    }
    </div>
  );
}
