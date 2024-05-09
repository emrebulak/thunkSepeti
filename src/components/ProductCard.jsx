import { FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { addBasket, updateBasket } from "../store/actions/basketActions";

const ProductCard = ({ data, restaurant }) => {

  const dispatch = useDispatch();
  const state = useSelector(state => state.basketReducer)

  const temp = state.basket.find(i => i.productId === data.id);

  const handleAdd = () => {

    if (temp) {
      const updated = {
        ...temp,
        amount: temp.amount + 1
      }

      dispatch(updateBasket(updated))
    } else {
      const addProduct = {
        id: v4(),
        productId: data.id,
        title: data.title,
        price: data.price,
        photo: data.photo,
        restaurantName: restaurant.name,
        amount: 1
      }

      dispatch(addBasket(addProduct))
    }

  }

  return (
    <div className="flex gap-5 border border-gray-300 shadow-md p-4 rounded-md cursor-pointer hover:bg-red-100 hover:scale-[1.02] transition duration-300">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="font-semibold text-xl mb-2">{data.title}</h1>
          <p className="text-gray-600">{data.desc}</p>
        </div>
        <h2 className="font-semibold">{data.price} TL</h2>
      </div>

      <div className="bg-red-100 rounded-md relative">
        <img
          className="w-32 h-32 object-contain"
          src={data.photo}
          alt={data.title}
        />
        <div onClick={handleAdd} className="absolute p-[10px] rounded-full bg-white bottom-[6px] right-[6px] hover:bg-red-500 hover:text-white transition duration-300">
          {
           temp && temp.amount > 0 ? <span className="font-semibold rounded-full px-2">{temp.amount}</span> : <FaPlus />
          }

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
