import React, { useEffect, useState } from 'react';
import axios from './axiosInstance';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            {products.map(product => (
                <div key={product._id}>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <img src={product.imageUrl} alt={product.name} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
