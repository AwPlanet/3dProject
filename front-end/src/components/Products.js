import React, { useEffect, useState } from "react";
import ChatBox from './ChatBox'; 

const Products = () => {
    const [products, setProducts] = useState([]);
    const [showChat, setShowChat] = useState(false); 
    const [selectedProduct, setSelectedProduct] = useState(null); 

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

    const handleChatOpen = (product) => {
        setSelectedProduct(product); 
        setShowChat(true); 
    };

    return (
        <div className="products-container">
            <div className="products-grid">
                {products.map((product) => (
                    <div key={product._id} className="product-card" style={{ backgroundImage: `url(${product.banner})` }}>
                        <h2 style={{ backgroundColor: 'rgba(211, 211, 211, 0.8)' }}>{product.header}</h2>
                        <h6 style={{backgroundColor: 'rgba(211, 211, 211, 0.8)', fontWeight: '100'}}>{product.subheader}</h6>
                        <button onClick={() => handleChatOpen(product)}>צור איתנו קשר</button>
                    </div>
                ))}
            </div>

            {showChat && (
                <ChatBox product={selectedProduct} onClose={() => setShowChat(false)} />  
            )}
        </div>
    );
}

export default Products;
