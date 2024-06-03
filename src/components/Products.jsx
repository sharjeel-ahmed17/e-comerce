// src/components/Products.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import Product from './Product';
import { toast } from 'react-toastify';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data.products);
            } catch (error) {
                toast.error('Failed to fetch products');
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='container'>
            <h2 className=''>Products</h2>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    );
};

export default Products;
