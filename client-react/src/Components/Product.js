import { FaHeart } from "react-icons/fa";

function Product() {
  return (
    <div className="w-full relative rounded-md border-2 border-gray-tertiary p-3">
      <img className="w-full" src="https://gtl-uk.prod.myauroraassets.com/p/39787/mens-rs-2k-internet-exploring-trainers-37330901puma-mens-rs-2k-internet-exploring-trainers.jpg?t=rp&w=300&h=300"/>
      <div className="w-full font-bold">Internet Exploring Trainers</div>
      <div className="w-full text-sm">Reebok Mens Liquifect 180 2 SPT Running Shoes</div>
      <FaHeart className="absolute top-2 right-2 text-2xl text-gray-tertiary cursor-pointer" />
    </div>
  );
}

export default Product;