import { useEffect } from "react";
import { BsBasket3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {getBasket} from '../store/actions/basketActions';
const Basket = () => {

    const state = useSelector((state) => state.basketReducer);
    const dispatch = useDispatch();
    const basketCount = state.basket.length;

    useEffect(() => {
        dispatch(getBasket())
    }, []);

    return (
        <div className="relative">
            <BsBasket3 className="text-xl text-red-500" />
            {
                basketCount > 0 && <span className="absolute text-sm bottom-2 left-[18px] text-red-500">{basketCount}</span>
            }
        </div>
    )
}

export default Basket