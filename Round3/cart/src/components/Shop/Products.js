import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = ({ item, setQuantities }) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
          item={item}
          setQuantities={setQuantities}
        />
      </ul>
    </section>
  );
};

export default Products;
