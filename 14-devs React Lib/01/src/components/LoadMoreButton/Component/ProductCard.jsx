import { memo } from "react";

const ProductCard=memo(({ title, price, description, image })=>{
    return(
        <>
        <div className="product-card">
           <div className="product-image">
             <img src={image} alt={title} />
           </div>
           <div className="product-content">
             <h3 className="product-title">{title}</h3>
             <p className="product-description">{description}</p>
             <div className="product-pricing">
               <span className="product-price">${price}</span>
               <button className="add-to-cart">Add to Cart</button>
             </div>
           </div>
         </div>
     </>
     )
})

ProductCard.displayName="ProductCard"

export default ProductCard;