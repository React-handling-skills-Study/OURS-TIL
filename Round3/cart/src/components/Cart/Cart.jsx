import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = ({ item, setQuantities, quantities }) => {
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        <CartItem
          item={item}
          setQuantities={setQuantities}
          quantities={quantities}
        />
      </ul>
    </Card>
  );
};

export default Cart;
