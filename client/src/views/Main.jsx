import React, { useState } from "react";
import ProductList from "../components/ProductList/ProductList";
import ProductForm from "../components/ProductForm/ProductForm";

const Main = (props) => {
    const [product, setProduct] = useState([]);

    return (
        <div>
            <ProductForm product={product} setProduct={setProduct} />
            <br />
            <ProductList product={product} setProduct={setProduct} />
        </div>
    );
};

export default Main;
