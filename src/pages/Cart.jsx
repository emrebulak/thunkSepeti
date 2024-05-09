import { useEffect } from "react";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../store/actions/basketActions";
import BasketCart from "../components/BasketCart";
import Loader from "../components/Loader";
import Error from "../components/Error";
import EmptyCart from "../components/EmptyCart";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.basketReducer);

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  if (state.isLoading) {
   return <Loader/>
  }

  if (state.error) {
   return <Error message={state.error}/>
  }

  return (
    <Container>
      <h1 className="text-3xl mb-4">Sepet</h1>

      <div className="flex flex-col gap-4">
        {state.basket.length > 0 ? state.basket.map((item) => (
          <BasketCart key={item.id} data={item} />
        )) : <EmptyCart/>}
      </div>
    </Container>
  );
};

export default Cart;
