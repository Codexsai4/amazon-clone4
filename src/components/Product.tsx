"use client";
import { useBasket } from "@/context/BasketContext";

interface Props {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const Product = ({ id, title, price, category, image }: Props) => {
  const { addToBasket } = useBasket();

  const addItemToBasket = () => {
    addToBasket({ id, title, price, category, image });
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
      <img src={image} alt={title} className="h-40 object-contain mb-4" />
      <h4 className="my-3 font-bold">{title}</h4>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500">★</span>
        ))}
      </div>
      <p className="text-xs mb-2 line-clamp-2">{title} - High quality product.</p>
      <div className="mb-5">{`$${price}`}</div>
      <button onClick={addItemToBasket} className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
