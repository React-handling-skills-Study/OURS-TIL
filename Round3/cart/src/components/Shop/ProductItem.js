import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = ({ title, price, description, item, setQuantities }) => {
  const quantityUp = () => {
    setQuantities((prev) => (prev += 1));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={quantityUp}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
