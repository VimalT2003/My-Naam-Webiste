import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HoverCard.css";

const HoverCards = () => {

  const navigate = useNavigate()
  const cards = [
    {
      id: 1,
      title: "ES83AC Auto Soap Dispenser",
      image:
        "https://euronics.co.in/wp-content/uploads/2024/04/ES83AC-IMG1-1-jpg.webp",
      description:
        "The ES83AC Auto Soap Dispenser is a cutting-edge hygiene solution designed...",
      badge:
        "https://dt-multispare.myshopify.com/cdn/shop/files/slider_quote_image.png?v=1665378595&width=1500",
      isPopular: true,
      ProductId: 7,
    },
    {
      id: 2,
      title: "Non-sparking Tools",
      image:
        "https://image.made-in-china.com/202f0j00NruRnotgOQpO/Non-Sparking-Pincers-End-Cutting-Pliers-End-Cutting-Nippers.webp",
      description:
        "Electrical and Non-Sparking Products are specialized tools and equipment designed to operate safely in explosive....",
      // badge: "https://image.similarpng.com/very-thumbnail/2021/05/Best-choice-golden-label-badge-design-on-transparent-background-PNG.png",
      ProductId: 28,
    },
    {
      id: 3,
      title: "FRP Single Side Self Supporting Ladder",
      image:
        "https://www.ymfg.co.in/web/image/product.product/100885/image_1024/%5B8301%5D%20FRP%20Single%20Side%20Self%20Supporting%20Ladder%20%282%20Step%29?unique=bd177e7",
      description:
        "The FRP Single Side Self Supporting Ladder is lightweight and sturdy, offering stability for safe....",
      badge:
        "https://dt-multispare.myshopify.com/cdn/shop/files/slider_quote_image.png?v=1665378595&width=1500",
      isPopular: true,
      ProductId: 15
    },
    {
      id: 4,
      title: "Metal Detector",
      image:
        "https://www.staticsystems.in/assets/img/products/top/metal-detector/3.jpg",
      description:
        "The Metal Detector quickly finds metal objects with high precision. It's lightweight and easy..",
      ProductId: 13
    },
    {
      id: 5,
      title: "Wheelie Bin",
      image:
        "https://5.imimg.com/data5/ND/KL/MY-5315025/wheelie-bin-500x500.png",
      description:
        "Wheelie Bins offer easy waste collection and transport with a durable, mobile design...",
      ProductId: 12
    },
    {
      id: 6,
      title: "FCG Flameproof Lights",
      image: "https://fcghitech.com/wp-content/uploads/2021/10/LW-51200.jpg",
      description:
        "FCG Flameproof Lights are specialized lighting solutions designed to operate safely...",
      ProductId: 27
    },
    {
      id: 7,
      title: "Bed Side Locker",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyf5nsRbD0EPIkIYlIFPeOx93N8Kidz70OZ_cVyKILUDRIgqOPBcglaQwI0hABAj0TxI&usqp=CAU",
      description:
        "The Bed Side Locker is a compact and durable storage solution designed to provide easy...",
      ProductId: 23
    },
    {
      id: 8,
      title: "Lockout Tagout",
      image:
        "https://www.safetylock.net/wp-content/uploads/2023/08/standard-stations.png.webp",
      description:
        "Lockout Tagout is a safety system designed to prevent accidental machine startup...",
      ProductId: 18
    },
  ];

  const handlePageNav = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <div className="header-container mt-5">
        <img
          height="80px"
          width="80px"
          alt="best-seller"
          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-best-seller-badge-best-seller-icon-best-seller-vector-best-seller-png-image_3674159.jpg"
        />
        <h2 className="category-title">Pick Our Best One </h2>
        <img
          height="80px"
          width="80px"
          alt="best-seller"
          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-best-seller-badge-best-seller-icon-best-seller-vector-best-seller-png-image_3674159.jpg"
        />
      </div>
      <div className="wrapper">
        {cards.map((card) => (
          <div key={card.id} className="card">
            {/* Badge */}
            {card.isPopular && (
              <div className="badge">
                <img src={card.badge} alt="badge" />
              </div>
            )}

            {/* Card Image */}
            <img src={card.image} alt={card.title} />
            <div className="content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <button className="btn" onClick={() => handlePageNav(card.ProductId)}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HoverCards;
