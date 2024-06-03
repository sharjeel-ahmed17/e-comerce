// src/components/Product.js
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    return (
        <div className='container mt-5'>

            <div className="card mb-3">
                <div className="card-body">
                    <h3 className="card-title">{product.title}</h3>
                    <p className="card-text">{product.description}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
