import React from 'react';
import '../styles/ProductGrid.css';

const products = [
  {
    title: "MODERN DESIGN TOOLS",
    description: "Quisque sagittis purus sit amet volutpat consequat mauris nunc.",
    image: "https://dt-multispare.myshopify.com/cdn/shop/files/maso-2_f526da75-ff87-4bfe-88c2-0f7eb1453d94.png?v=1666155370",
    type: "normal"
  },
  {
    title: "NEW HAMMER SET",
    specialOffer: "Special Offer",
    image: "https://dt-multispare.myshopify.com/cdn/shop/files/grid02_ea2e5d7f-3361-4c93-88d5-85ac5b12f7df.jpg?v=1669298581",
    type: "normal"
  },
  {
    title: "POPULAR DRILLING MACHINE",
    sale: "Sale Upto 15%",
    image: "/api/placeholder/400/300",
    type: "large"
  },
  {
    title: "CAST IRON CHAIN SAW",
    price: "36.00",
    startedPrice: "Started Price",
    image: "/api/placeholder/400/300",
    type: "normal"
  },
  {
    title: "ELETRIC WALT POWER DRILL",
    description: "Porttitor lacus luctus accumsan tortor posuere ac.",
    image: "/api/placeholder/400/300",
    type: "normal"
  }
];

const ProductCard = ({ product }) => {
  const cardClassName = `product-card ${product.type === 'large' ? 'large' : ''}`;
  
  return (
    <div className={cardClassName}>
      <div className="card-content">
        {product.specialOffer && (
          <p className="offer-text">{product.specialOffer}</p>
        )}
        {product.sale && (
          <p className="offer-text">{product.sale}</p>
        )}
        {product.startedPrice && (
          <p className="offer-text">{product.startedPrice}</p>
        )}
        
        <h2 className="title">{product.title}</h2>
        
        {product.description && (
          <p className="description">{product.description}</p>
        )}
        
        {product.price && (
          <p className="price">${product.price}</p>
        )}
        
        <button className="shop-button">Shop Now</button>
      </div>
      <img src={product.image} alt={product.title} />
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="product-grid-container">
      <div className="product-grid">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;