import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = ({ item, setQuantities }) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Product name"
          price={100}
          description="Description!"
          item={item}
          setQuantities={setQuantities}
        />
      </ul>
    </section>
  );
};

export default Products;
