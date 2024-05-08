import { IoTrashOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

const BasketCart = ({ data }) => {
  return (
    <div className="flex gap-4 border rounded-md border-gray-200 py-3 px-3">
      <div className="bg-red-100 rounded-md">
        <img
          className="w-28 h-28 object-contain"
          src={data.photo}
          alt={data.title}
        />
      </div>
      <div className="w-full flex flex-col justify-between">
        <h1 className="text-xl text-red-500 font-semibold">{data.title}</h1>
        <h3 className="text-gray-500">{data.restaurantName}</h3>
        <h2 className="font-semibold">{data.price} TL</h2>
        <div className="self-end border rounded-md flex items-center justify-between gap-3 ">
          {data.amount > 1 ? (
            <button className="text-red-500 p-3 rounded-md hover:bg-red-100 transition"><FaMinus className="text-lg" /></button>
            
          ) : (
            <button className="text-red-500 p-3 hover:bg-red-100 rounded-md transition"><IoTrashOutline className="text-lg"  /></button>
          )}
          <span>{data.amount}</span>
          <button className="text-red-500 p-3 hover:bg-red-100  rounded-md transition"><FaPlus className="text-lg"  /></button>
        </div>
      </div>
    </div>
  );
};

export default BasketCart;
