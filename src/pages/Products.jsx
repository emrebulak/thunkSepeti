import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Container from "../components/Container"
import { useDispatch, useSelector } from "react-redux"
import { getRestaurants } from "../store/actions/restaurantActions"
import { getProducts } from "../store/actions/productActions"
import ProductCard from "../components/ProductCard"
import { FaFire } from "react-icons/fa";


const Products = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const restaurantState = useSelector(state => state.restaurantReducer)
    const productState = useSelector(state => state.productReducer)

    console.log("Params : ", id)

    useEffect(() => {
        dispatch(getRestaurants(id))
        dispatch(getProducts(id))
    }, [])

    console.log("Restaurant : ", restaurantState)
    console.log("Product : ", productState)

    return (
        <div>
            <Container>
                <h1>Restaurant</h1>
            </Container>
            <hr className="border-gray-200 shadow-lg border-[1px]" />
            <Container>
                <div className="flex items-center gap-2 mb-1">
                    <FaFire className="text-2xl text-red-500" />
                    <h1 className="text-2xl font-semibold">Popüler</h1>
                </div>
                <p className="text-gray-600 mb-5">Restoranın en çok tercih edilen ürünleri</p>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                    {
                        productState.products.map((item) => <ProductCard key={item.id} data={item} />)

                    }
                </div>
            </Container>
        </div>
    )
}

export default Products