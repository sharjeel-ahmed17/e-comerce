// src/pages/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProduct } from '../services/api';
import { toast } from 'react-toastify';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getProduct(id);
                setProduct(data);
            } catch (error) {
                toast.error('Failed to fetch product details');
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }


    return (
        <div className="card container mt-5">
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p className="card-text">{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
