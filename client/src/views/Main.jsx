import { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import ProductForm from "../components/ProductForm/ProductForm";

const Main = () => {
    const [product, setProduct] = useState([]);

    const removeFromDom = (productId) => {
        setProduct(product.filter((product) => product._id !== productId));
    };

    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <br />
            <ProductList
                product={product}
                setProduct={setProduct}
                removeFromDom={removeFromDom}
            />
        </div>
    );
};

export default Main;
