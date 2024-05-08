import { BsBasket3 } from "react-icons/bs";
const Basket = () => {
    return (
        <div className="relative">
            <BsBasket3 className="text-xl text-red-500" />
            <span className="absolute text-sm bottom-2 left-[18px] text-red-500">3</span>
        </div>
    )
}

export default Basket