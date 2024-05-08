import { BsBasket3 } from "react-icons/bs";
import { useSelector } from "react-redux";
const Basket = () => {

    const state = useSelector((state) => state.basketReducer);
    const basketCount = state.basket.length;

    return (
        <div className="relative">
            <BsBasket3 className="text-xl text-red-500" />
            <span className="absolute text-sm bottom-2 left-[18px] text-red-500">{basketCount}</span>
        </div>
    )
}

export default Basket