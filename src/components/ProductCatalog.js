import React, { useRef, useState } from "react";
import "../styles/ProductCatalog.css";
import { useNavigate } from "react-router-dom";

const ProductCatalog = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const [products] = useState([
    {
      id: 1,
      name: "NAAM-DL-Ramp MAT",
      price: 1499.99,
      description:
        "Ramp Mats are Anti-slip rubber mats with a​ raised circular surface.",
      image:
        "https://geckotred.co.nz/wp-content/uploads/2020/08/Safety-Cushion-150-x-90-Black-scaled-600x400.jpg",
      category: "MAT",
      rating: 4.6,
      features: ["DRH 110 J​", "90 X 150 CM​", "16 mm​"],
    },
    {
      id: 2,
      name: "NAAM- DL-Scraper Mat",
      price: 1499.99,
      description:
        "Scraper Entrance Mats are designed to stop mud and larger particles of dirt from being tracked inside​.",
      image:
        "https://th.bing.com/th/id/OIP.yJta_OPAb_LLufFXOLXjrgHaE6?rs=1&pid=ImgDetMain",
      category: "MAT",
      rating: 4.6,
      features: ["DRS 684​J​", "87 x 154 cm​​", "9 mm​​"],
    },
    {
      id: 3,
      name: "NAAM- DL-Ridge Scraper Mat​",
      price: 1499.99,
      description:
        "Scraper Entrance Mats are designed to stop mud and larger particles of dirt from being tracked inside​.Easy to clean with hose or brush.",
      image:
        "https://www.vikasrubbermats.com/uploads_vik/big-091023123307ridge-scrapper-mat.jpg",
      category: "MAT",
      rating: 4.6,
      features: ["DRS 631 C​​", "90 x 150 cm​​", "8 mm​​​"],
    },
    {
      id: 4,
      name: "NAAM- DL-Tiny Octagon Mat​​",
      price: 1499.99,
      description:
        "Excellent scrapper qualities coupled with superior anti-slippery property can be used in high foot traffic areas & wet surfaces.​",
      image:
        "https://static.wixstatic.com/media/b42d49_78a64fe1e2064ae8b99599091cc1e527~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      category: "MAT",
      rating: 4.6,
      features: ["DRH 124 B​​​", "100 x 150 cm​​​", "13 mm​​"],
    },
    {
      id: 5,
      name: "NAAM- DL-Waves Mat​​​",
      price: 1499.99,
      description:
        "Rubber Waves Mat are ideal work station mat in front of machines in factories, kitchens in restaurants and in areas subject to oil and debris. It is extremely heavy duty, and has slots for debris to fall through for easy cleaning.​​",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/11/359669209/TM/EL/BX/14294248/industrial-waves-mat-500x500.jpg",
      category: "MAT",
      rating: 4.6,
      features: ["DRH 123​​​​", "90 x 150 cm​​​​", "12 mm​"],
    },
    {
      id: 6,
      name: "NAAM-DL-Bubble Roll Mat ​​​​",
      price: 1499.99,
      description:
        "Tough and resilient. Several air pockets to enhance anti-fatigue property.​.​​",
      image:
        "https://cpimg.tistatic.com/06104026/b/4/Dolphin-Bubble-Roll-Yellow-Border.jpg",
      category: "MAT",
      rating: 4.6,
      features: ["DRS 622 DYR​​​​​", "0.9 x 9.3 m​​​​​", "15 mm​​"],
    },
    {
      id: 7,
      name: "ES83AC Auto Soap Dispenser",
      price: 1999.99,
      description:
        "The ES83AC Auto Soap Dispenser ensures touch-free, hygienic soap dispensing with a sleek, modern design.",
      image:
        "https://euronics.co.in/wp-content/uploads/2024/04/ES83AC-IMG1-1-jpg.webp",
      category: "Hygiene",
      rating: 4.7,
      features: [
        "Touch-free use",
        "Modern look",
        "Easy to refill",
        "Battery powered",
      ],
    },
    {
      id: 8,
      name: "ESM3 Shoe Shining Machiner",
      price: 1999.99,
      description:
        "The ESM3 provides a quick, automatic shine with soft brushes. Its compact design makes it easy to use anywhere.",
      image:
        "https://euronics.co.in/wp-content/uploads/2022/06/Shoe-Shining-Machine-ESM3.jpg",
      category: "Hygiene",
      rating: 4.7,
      features: [
        "Automatic shine",
        "Soft brushes",
        "Compact design",
        "Easy to use",
      ],
    },
    {
      id: 9,
      name: "Insect Killer With Glue Boards",
      price: 399.99,
      description:
        "Manufacturer of a wide range of products which include insect killer with glue board, glue pad fly catcher machine, glue board fly catcher machine-linnea fl warrior 30, linnea glue board fly catcher machine, glue board fly catcher machine - linnea fl warrior 45 and linnea glue board fly trap machine.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/5/306792205/HQ/SR/KM/1924592/glue-board-fly-catcher-machine-linnea-fl-warrior-30-500x500.jpg",
      category: "Hygiene",
      rating: 4.9,
      features: [
        "Traps insects fast",
        "Safe and chemical-free",
        "Easy to replace boards",
        "Works quietly",
      ],
    },
    {
      id: 10,
      name: "Portable Foam Equipments",
      price: 1199.99,
      description:
        "Portable Foam Equipment offers quick fire control with lightweight, easy-to-deploy design.",
      image:
        "https://aaagindia.in/public-images/PORTABLE-FOAM-EQUIPMENT_1587410104.png",
      category: "Fire Safety Products",
      rating: 4.8,
      features: [
        "Lightweight design",
        "Fast foam output",
        "Easy to carry",
        "For fire control",
      ],
    },
    {
      id: 11,
      name: "Branchpipes",
      price: 1199.99,
      description:
        "Branchpipes provide precise control and direction of water or foam flow for effective firefighting.",
      image:
        "https://www.firesupplies.in/wp-content/uploads/2023/03/Improfire-Short-branch-pipe-with-nozzle-SS-ISI.jpg",
      category: "Fire Safety Products",
      rating: 4.8,
      features: [
        "Controls water flow",
        "Strong material",
        "Easy to hold",
        "Fits many hoses",
      ],
    },
    {
      id: 12,
      name: "Wheelie Bin",
      price: 1499.99,
      description:
        "Wheelie Bins offer easy waste collection and transport with a durable, mobile design.",
      image:
        "https://5.imimg.com/data5/ND/KL/MY-5315025/wheelie-bin-500x500.png",
      category: "Dustbin",
      rating: 4.6,
      features: [
        "Strong material",
        "Easy to move",
        "Different sizes",
        "Secure lid",
      ],
    },
    {
      id: 13,
      name: "Metal Detector",
      price: 1499.99,
      description:
        "The Metal Detector quickly finds metal objects with high precision. It's lightweight and easy to use for various applications.",
      image:
        "https://www.staticsystems.in/assets/img/products/top/metal-detector/3.jpg",
      category: "Entrance Automation Product",
      rating: 4.6,
      features: [
        "High accuracy",
        "Lightweight design",
        "Easy to use",
        "Adjustable sensitivity",
      ],
    },
    {
      id: 14,
      name: "FRP-Trio",
      price: 1499.99,
      description:
        "The FRP-Trio is a durable and lightweight solution designed for various industrial applications. It offers excellent resistance and performance in challenging environments.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/4/298291564/HT/LL/SE/44662252/frp-trio-bins-500x500.png",
      category: "Hygiene",
      rating: 4.6,
      features: [
        "Durable construction",
        "Lightweight design",
        "Corrosion-resistant",
        "High-performance",
      ],
    },
    {
      id: 15,
      name: "FRP Single Side Self Supporting Ladder",
      price: 1499.99,
      description:
        "The FRP Single Side Self Supporting Ladder is lightweight and sturdy, offering stability for safe and easy access. Its non-conductive material makes it ideal for electrical work.",
      image:
        "https://www.ymfg.co.in/web/image/product.product/100885/image_1024/%5B8301%5D%20FRP%20Single%20Side%20Self%20Supporting%20Ladder%20%282%20Step%29?unique=bd177e7",
      category: "Ladders",
      rating: 4.6,
      features: [
        "Lightweight design",
        "Self-supporting structure",
        "Non-conductive material",
        "Durable and stable",
      ],
    },
    {
      id: 16,
      name: "FRP (Fiberglass) Wall Support Extension Ladder",
      price: 1499.99,
      description:
        "The FRP Wall Support Extension Ladder offers enhanced safety and stability with a fiberglass frame, ideal for reaching high places with ease and support.",
      image:
        "https://www.ymfg.co.in/web/image/product.product/101093/image_1024/%5B8196%5D%20FRP%20%28Fiberglass%29%20Wall%20Support%20Extension%20Ladder%20%2810%20x%202%20with%20J%20Hook%20%26%20Handrail%29?unique=1dcb38c",
      category: "Ladders",
      rating: 4.6,
      features: [
        "Fiberglass construction",
        "Wall support for stability",
        "Lightweight and durable",
        "Ideal for high-reach tasks",
      ],
    },
    {
      id: 17,
      name: "FIRESSENSE – Direct Low Pressure System",
      price: 1499.99,
      description:
        "FIRESSENSE is a low-pressure system for fast and efficient fire control with less water.",
      image:
        "https://swastiksynergy.com/images/direct-low-pressure-system-4.jpg",
      category: "Fire Safety Products",
      rating: 4.6,
      features: [
        "Low pressure",
        "Fast fire control",
        "Less water use",
        "Quick response",
      ],
    },
    {
      id: 18,
      name: "Lockout Tagout",
      price: 1499.99,
      description:
        "Lockout Tagout is a safety system designed to prevent accidental machine startup during maintenance or servicing.",
      image:
        "https://www.safetylock.net/wp-content/uploads/2023/08/standard-stations.png.webp",
      category: "Lockout Tagout",
      rating: 4.6,
      features: [
        "Prevents accidental machine startup",
        "Ensures worker safety",
        "Compliance with safety standards",
        "Easy to apply and remove",
      ],
    },
    {
      id: 19,
      name: "Loto Kit",
      price: 1499.99,
      description:
        "LOTO Kit is a comprehensive set of tools and devices used to implement effective lockout tagout procedures for workplace safety.",
      image:
        "https://www.safetylock.net/wp-content/uploads/2023/09/mechanical-valve-loto-kits-category.png.webp",
      category: "Lockout Tagout",
      rating: 4.6,
      features: [
        "Comprehensive lockout tools and devices",
        "Ensures safe maintenance and servicing",
        "Portable and easy to carry",
        "Supports compliance with safety regulations",
      ],
    },
    {
      id: 20,
      name: "AC AUTOMATIC BOOM BARRIER",
      price: 1499.99,
      description:
        "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
      image:
        "https://image.made-in-china.com/226f3j00kUjtdMiGORzp/AC-Automatic-Boom-Barrier-Factory.webp",
      category: "Entrance Automation Product",
      rating: 4.6,
      features: [
        "Automated vehicle access control",
        "Smooth and quick operation",
        "Durable and weather-resistant design",
        "Supports remote control and sensor integration",
      ],
    },
    {
      id: 21,
      name: "AC AUTOMATIC BOOM BARRIER",
      price: 1499.99,
      description:
        "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
      image:
        "https://www.unisurg.com/wp-content/uploads/2023/03/thumb_1666008522_bf1284472c1b751de200-300x313.png",
      category: "First Aid Center",
      rating: 4.6,
      features: [
        "Automated vehicle access control",
        "Smooth and quick operation",
        "Durable and weather-resistant design",
        "Supports remote control and sensor integration",
      ],
    },
    {
      id: 22,
      name: "AC AUTOMATIC BOOM BARRIER",
      price: 1499.99,
      description:
        "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
      image:
        "https://www.unisurg.com/wp-content/uploads/2023/03/1666006046_cc2584bebfc260526b57-300x196.png",
      category: "First Aid Center",
      rating: 4.6,
      features: [
        "Automated vehicle access control",
        "Smooth and quick operation",
        "Durable and weather-resistant design",
        "Supports remote control and sensor integration",
      ],
    },
    {
      id: 23,
      name: "BED SIDE LOCKER",
      price: 1499.99,
      description:
        "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyf5nsRbD0EPIkIYlIFPeOx93N8Kidz70OZ_cVyKILUDRIgqOPBcglaQwI0hABAj0TxI&usqp=CAU",
      category: "First Aid Center",
      rating: 4.6,
      features: [
        "Automated vehicle access control",
        "Smooth and quick operation",
        "Durable and weather-resistant design",
        "Supports remote control and sensor integration",
      ],
    },
    {
      id: 24,
      name: "BIO MEDICAL WASTE BIN (Only Bin)",
      price: 1499.99,
      description:
        "Wheelie Bins offer easy waste collection and transport with a durable, mobile design.",
      image:
        "https://www.unisurg.com/wp-content/uploads/2023/03/thumb_1667121747_52f2a490a3a5329092e8.png",
      category: "Dustbin",
      rating: 4.6,
      features: [
        "Strong material",
        "Easy to move",
        "Different sizes",
        "Secure lid",
      ],
    },
    {
      id: 25,
      name: "BIO MEDICAL WASTE BIN (SETS)",
      price: 1499.99,
      description:
        "Wheelie Bins offer easy waste collection and transport with a durable, mobile design.",
      image:
        "https://www.indosurgicals.com/images/products/18028-waste-segregation-trolley-ss-60-liter-4.jpg",
      category: "Dustbin",
      rating: 4.6,
      features: [
        "Strong material",
        "Easy to move",
        "Different sizes",
        "Secure lid",
      ],
    },
    {
      id: 26,
      name: "AC AUTOMATIC BOOM BARRIER",
      price: 1499.99,
      description:
        "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
      image:
        "https://www.staticsystems.in/assets/img/products/weapon-scanner.jpg",
      category: "Entrance Automation Product",
      rating: 4.6,
      features: [
        "Automated vehicle access control",
        "Smooth and quick operation",
        "Durable and weather-resistant design",
        "Supports remote control and sensor integration",
      ],
    },
    {
      id: 27,
      name: "Fcg Fameproff Lights",
      price: 1499.99,
      description:
        "FCG Flameproof Lights are specialized lighting solutions designed to operate safely in hazardous environments where flammable gases, vapors, or dust are present.",
      image: "https://fcghitech.com/wp-content/uploads/2021/10/LW-51200.jpg",
      category: "Flame Proff Products",
      rating: 4.6,
      features: [
        "Flameproof design for hazardous areas",
        "High durability and impact resistance",
        "Energy-efficient lighting solution",
        "Compliant with safety and industrial standards",
      ],
    },
    {
      id: 28,
      name: "Non-sparking tools",
      price: 1499.99,
      description:
        "Electrical and Non-Sparking Products are specialized tools and equipment designed to operate safely in explosive or flammable environments, preventing the risk of ignition.",
      image:
        "https://image.made-in-china.com/202f0j00NruRnotgOQpO/Non-Sparking-Pincers-End-Cutting-Pliers-End-Cutting-Nippers.webp",
      category: "Electrical and Non-Sparking Products",
      rating: 4.6,
      features: [
        "Safe for use in explosive environments",
        "Prevents spark generation during operation",
        "Complies with industry safety standards",
        "Durable and corrosion-resistant materials",
      ],
    },
    {
      id: 29,
      name: "Safety SS 01",
      price: 1499.99,
      description:
        "Safety SS 01 is a personal protective equipment (PPE) designed to ensure worker safety by providing protection against workplace hazards.",
      image:
        "https://autolite-india.com/image/cache/catalog/Safety/ss-01-600x600.jpg",
      category: "Emergency Lighting System",
      rating: 4.6,
      features: [
        "Enhanced protection for workplace safety",
        "Lightweight and comfortable design",
        "Durable and long-lasting materials",
        "Complies with safety and industry standards",
      ],
    },
    {
      id: 30,
      name: "Safety SS 02",
      price: 1499.99,
      description:
        "Safety SS 02 is a durable and robust industrial safety helmet designed to protect workers from head injuries in hazardous work environments.",
      image:
        "https://autolite-india.com/image/cache/catalog/Safety/ss-02-600x600.jpg",
      category: "Emergency Lighting System",
      rating: 4.6,
      features: [
        "High-impact resistance for head protection",
        "Lightweight and comfortable fit",
        "Adjustable headband for a secure fit",
        "Meets industrial safety and quality standards",
      ],
    },
    {
      id: 31,
      name: "Safety SS 03",
      price: 1499.99,
      description:
        "Safety SS 03 is a high-performance industrial safety designed to provide superior eye protection and comfort in challenging work environments.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKIu35U7Uf1UpJBS8p9tXSZbLDiQ-G-y26g&s",
      category: "Emergency Lighting System",
      rating: 4.6,
      features: [
        "Superior eye protection with impact resistance",
        "Ergonomic design for all-day comfort",
        "Adjustable straps for a secure and customized fit",
        "Complies with industry safety and quality standards",
      ],
    },
    {
      id: 32,
      name: "Safety SS 04",
      price: 1499.99,
      description:
        "Safety SS 04 is a safety signage designed to indicate the location of an emergency telephone for quick communication during critical situations.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYfn0y4X1AnDpL_QFJ5If-fYwmiO5E83azw&s",
      category: "Emergency Lighting System",
      rating: 4.6,
      features: [
        "Indicates the presence of an emergency telephone",
        "Clear and recognizable symbol",
        "Available in multiple sizes (150x150mm, 200x200mm)",
        "Made with durable and weather-resistant materials",
      ],
    },
    {
      id: 33,
      name: "Safety SS 05",
      price: 1499.99,
      description:
        "Safety SS 05 is a safety signage designed to indicate the location or availability of foot protection measures in industrial and workplace settings.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_YMyjfwB0dcmV-kj1zr_rZEt7PZIyvsYjw&s",
      category: "Emergency Lighting System",
      rating: 4.6,
      features: [
        "Clear and easy-to-read safety signage",
        "Indicates foot protection requirements",
        "Available in multiple sizes (150x150mm, 200x200mm)",
        "Durable and weather-resistant material",
      ],
    },
    {
      id: 34,
      name: "Safety SS 06",
      price: 1499.99,
      description:
        "Safety SS 06 is a safety signage designed to indicate the availability of Thermal Protection Aid (TPA) for use in environments requiring heat resistance and protection.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMnmaAcfoXgiErCX9KjN_R19GVdT9-Aup-w&s",
      category: "Emergency Lighting System",
      rating: 4.6,
      features: [
        "Highlights the presence of Thermal Protection Aid",
        "Clear and easy-to-read design",
        "Available in multiple sizes (150x150mm, 200x200mm)",
        "Durable and weather-resistant material",
      ],
    },
  ]);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [filter, setFilter] = useState("All");
  const categories = [
    "All",
    "MAT",
    "Hygiene",
    "Fire Safety Products",
    "Lockout Tagout",
    "Dustbin",
    "Ladders",
    "First Aid Center",
    "Entrance Automation Product",
    "Electrical and Non-Sparking Products",
    "Flame Proff Products",
    "Emergency Lighting System",
  ];

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };


const scroll = (direction) => {
  const container = scrollContainerRef.current;
  const scrollAmount = 200;
  
  if (container) {
    const newScrollPosition = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;
      
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  }
};

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((product) => product.category === filter);

  return (
    <div className="product-catalog my-5">
      <div className="catalog-header">
        <h1 className="mb-4">Product Catalog</h1>
        <div className="filter-wrapper">
      {showLeftArrow && (
        <button className="arrow-button left-arrow" onClick={() => scroll('left')}>
          ←
        </button>
      )}

      <div 
        className="filter-container" 
        ref={scrollContainerRef}
        onScroll={handleScroll}
      >
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {showRightArrow && (
        <button className="arrow-button right-arrow" onClick={() => scroll('right')}>
          →
        </button>
      )}
    </div>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-actions">
                <button
                  className="action-btn like-btn"
                  onClick={() => handleProductClick(product.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-eye"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
                {/* <button className="action-btn cart-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                </button> */}
              </div>
            </div>
            <div className="product-details">
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-rating">
                  {[...Array(5)].map((star, index) => (
                    <span
                      key={index}
                      className={`star ${
                        index < Math.floor(product.rating) ? "filled" : ""
                      }`}
                    >
                      ★
                    </span>
                  ))}
                  <span className="rating-number">({product.rating})</span>
                </div>
                <div className="product-features">
                  {product.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="product-price-section">
                <span className="product-price">
                  ${product.price.toFixed(2)}
                </span>
                <button className="buy-now-btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
