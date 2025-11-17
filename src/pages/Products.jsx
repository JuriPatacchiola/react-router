import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
        </>
    )
}

