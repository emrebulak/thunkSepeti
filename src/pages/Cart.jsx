import { useEffect } from "react";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getBasket } from "../store/actions/basketActions";
import BasketCart from "../components/BasketCart";

const Cart = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.basketReducer);

  useEffect(() => {
    dispatch(getBasket());
  }, []);

  console.log("State : ", state);

  return (
    <Container>
      <h1 className="text-3xl mb-4">Sepet</h1>

      <div className="flex flex-col gap-4">
        {state.basket.map((item) => (
          <BasketCart key={item.id} data={item} />
        ))}
      </div>
    </Container>
  );
};

export default Cart;
