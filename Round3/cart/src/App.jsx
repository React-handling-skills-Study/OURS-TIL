import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useState } from "react";

function App() {
  const [quantities, setQuantities] = useState(1);
  const [display, setDisplay] = useState(true);

  const item = {
    title: "Test Item",
    quantity: quantities,
    total: 18,
    price: 6,
  };

  return (
    <Layout setDisplay={setDisplay}>
      {display ? (
        <Cart
          item={item}
          setQuantities={setQuantities}
          quantities={quantities}
        />
      ) : null
      }
      <Products item={item} setQuantities={setQuantities} />
    </Layout>
  );
}

export default App;
