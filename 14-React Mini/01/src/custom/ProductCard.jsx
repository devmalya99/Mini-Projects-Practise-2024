// ProductCard.js
import { memo } from "react";

const ProductCard = memo(({ title, price, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden sm:max-w-xs lg:max-w-sm">
      <div className="h-64 sm:h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 truncate">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-800">${price}</span>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = "ProductCard";
export default ProductCard;