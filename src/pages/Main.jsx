import { useDispatch, useSelector } from "react-redux"
import Container from "../components/Container"
import RestaurantCard from "../components/RestaurantCard"
import { useEffect } from "react"
import { getRestaurants } from "../store/actions/restaurantActions"
import Loader from "../components/Loader"
import Error from "../components/Error"

const Main = () => {

    const state = useSelector(state => state.restaurantReducer)
    const dispatch = useDispatch()

    const handleRestaurants = () => {
        dispatch(getRestaurants())
    }

    useEffect(() => {
        handleRestaurants()
    }, [])

    console.log("Değerler : ", state)

    if (state.isLoading) {
        return <Loader />
    }

    if (state.error) {
        return <Error message={state.error} event={handleRestaurants} />
    }

    return (
        <Container>
            <h1 className="text-3xl mb-4">Tüm Restoranlar</h1>
            <div className="grid  gap-6 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
                {
                    state.restaurants.map((item) => <RestaurantCard key={item.id} data={item} />)
                }
            </div>
        </Container>
    )
}

export default Main