import { useCallback, useEffect, useState } from "react";
import ProductCard from "../../custom/ProductCard";
import axios from "axios";
import ProductCardShimmer from "../../custom/Simmerui";

export default function Pagination() {
  const [productArr, setProductArr] = useState([]);
  const [loading, setLoading] = useState(false);
 const [pageCount,setPageCount] = useState(0)
  const fetchData= useCallback(async()=>{
    setLoading(true);
    try {
      const { data } = await axios.get(
        "https://dummyjson.com/products?limit=0"
      );
      data && data.products.length && setProductArr(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }

  },[])

  const handlePageChange=(i)=>{
    setPageCount(i)
    
  }


  useEffect(() => {
    fetchData();
  }, []);
  console.log("arr is", productArr);

  return (
    <div>
    <h1 className="text-3xl font-bold mb-8">Pagination</h1>
    {loading ? (
      <ProductCardShimmer/>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productArr.slice(pageCount*20,(pageCount+1)*20).map((each) => (
          <ProductCard
            key={each.id}
            title={each.title}
            description={each.description}
            price={each.price}
            image={each.images[2]}
          />
        ))}
      </div>
    )}
     <div className="flex gap-4 justify-center mt-8">
        {
            [...Array(5)].map((_,i)=>
            {
                return(
                    <div key={i}
                className=
                {`p-2 font-bold text-2xl border-1 cursor-pointer px-2 py-1 ${i===pageCount ? 'bg-blue-400' : 'bg-gray-400'}`}
                
                onClick={()=>handlePageChange(i)}>
                    {i+1}
                </div>
                )
                
            })
        }
      </div>
  </div>
  );
}
// {[...Array(5)].map((_, index) => (
//     <div
//       key={index}
//       className={`px-4 py-2 cursor-pointer ${
//         pageCount === index ? "bg-blue-500 text-white" : "bg-gray-200"
//       }`}
//       onClick={() => handlePageChange(index)}
//     >
//       {index + 1}
//     </div>
//   ))}