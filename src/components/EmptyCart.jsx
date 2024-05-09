import { Link } from "react-router-dom"

const EmptyCart = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="font-semibold text-lg">Sepette herhangi bir ürün yok</h1>
            <Link className="p-2 border border-gray-300 rounded-md shadow-md hover:bg-gray-200 transition duration-300" to={'/'}>Ürün Ekle</Link>
        </div>
    )
}

export default EmptyCart