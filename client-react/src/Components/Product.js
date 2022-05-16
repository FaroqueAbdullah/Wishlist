import { FaHeart } from "react-icons/fa";

function Product({ item }) {
  return (
    <div className="w-full relative rounded-md border-2 border-gray-tertiary opacity-75 text-gray-secondary hover:text-gray-primary hover:shadow-2xl hover:border-gray-primary hover:opacity-100 p-3">
      <img className="w-full" src={ item.image }/>
      <div className="w-full font-bold">{ item.name }</div>
      <div className="w-full text-sm">{ item.description }</div>
      <FaHeart className="absolute top-2 right-2 text-2xl text-gray-tertiary cursor-pointer" />
    </div>
  );
}

export default Product;