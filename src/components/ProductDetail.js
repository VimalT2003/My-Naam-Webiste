// components/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/ProductDetails.css'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Product data (same as in ProductCatalog)
  const products = [
    {
      id: 1,
      name: "NAAM-DL-Ramp MAT",
      price: 1499.99,
      description: "Ramp Mats are Anti-slip rubber mats with a raised circular surface.",
      image: "https://geckotred.co.nz/wp-content/uploads/2020/08/Safety-Cushion-150-x-90-Black-scaled-600x400.jpg",
      category: "MAT",
      rating: 4.6,
      features: [
        "DRH 110 J",
        "90 x 150 cm",
        "16 mm"
      ],
      fullDescription: `
        The NAAM-DL-Ramp MAT is a durable and anti-slip mat designed for enhanced safety and stability. Its raised circular surface provides excellent traction, reducing the risk of slips and falls in both residential and commercial settings.
        
        Key Specifications:
        - Dimensions: 90 x 150 cm
        - Thickness: 16 mm
        - Surface: Raised circular anti-slip design
        - Material: Heavy-duty rubber
      `,
      additionalDetails: [
        "Material: Heavy-Duty Rubber",
        "Dimensions: 90 x 150 cm",
        "Thickness: 16 mm",
        "Surface: Raised circular anti-slip design",
        "Warranty: 1 Year Limited"
      ]
    },
    {
      id: 2,
      name: "NAAM-DL-Scraper Mat",
      price: 1499.99,
      description: "Scraper Entrance Mats are designed to stop mud and larger particles of dirt from being tracked inside.",
      image: "https://th.bing.com/th/id/OIP.yJta_OPAb_LLufFXOLXjrgHaE6?rs=1&pid=ImgDetMain",
      category: "MAT",
      rating: 4.6,
      features: [
        "DRS 684 J",
        "87 x 154 cm",
        "9 mm"
      ],
      fullDescription: `
        The NAAM-DL-Scraper Mat effectively traps dirt, mud, and debris, ensuring clean and tidy interiors. Its rugged construction makes it ideal for entryways, high-traffic areas, and outdoor entrances.
        
        Key Specifications:
        - Dimensions: 87 x 154 cm
        - Thickness: 9 mm
        - Function: Dirt-scraping surface
        - Material: Durable rubber
      `,
      additionalDetails: [
        "Material: Heavy-Duty Rubber",
        "Dimensions: 87 x 154 cm",
        "Thickness: 9 mm",
        "Surface: Scraper design for dirt and debris removal",
        "Warranty: 1 Year Limited"
      ]
    },
    {
      id: 3,
      name: "NAAM-DL-Ridge Scraper Mat",
      price: 1499.99,
      description: "Scraper Entrance Mats are designed to stop mud and larger particles of dirt from being tracked inside. Easy to clean with a hose or brush.",
      image: "https://www.vikasrubbermats.com/uploads_vik/big-091023123307ridge-scrapper-mat.jpg",
      category: "MAT",
      rating: 4.6,
      features: [
        "DRS 631 C",
        "90 x 150 cm",
        "8 mm"
      ],
      fullDescription: `
        The NAAM-DL-Ridge Scraper Mat features a ridge-like design to trap and remove mud, dirt, and debris from footwear. It is easy to clean and maintain, making it ideal for commercial and residential entryways.
        
        Key Specifications:
        - Dimensions: 90 x 150 cm
        - Thickness: 8 mm
        - Function: Ridge scraper design for enhanced dirt removal
        - Material: Sturdy rubber construction
      `,
      additionalDetails: [
        "Material: Heavy-Duty Rubber",
        "Dimensions: 90 x 150 cm",
        "Thickness: 8 mm",
        "Design: Ridge scraper design for dirt and debris removal",
        "Warranty: 1 Year Limited"
      ]
    },
    {
      id: 4,
      name: "NAAM-DL-Tiny Octagon Mat",
      price: 1499.99,
      description: "Excellent scraper qualities coupled with superior anti-slip properties, suitable for high foot traffic areas and wet surfaces.",
      image: "https://static.wixstatic.com/media/b42d49_78a64fe1e2064ae8b99599091cc1e527~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
      category: "MAT",
      rating: 4.6,
      features: [
        "DRH 124 B",
        "100 x 150 cm",
        "13 mm"
      ],
      fullDescription: `
        The NAAM-DL-Tiny Octagon Mat offers superior anti-slip properties and efficient scraping action. Its octagonal pattern and rugged design make it a perfect choice for high-traffic and wet areas.
        
        Key Specifications:
        - Dimensions: 100 x 150 cm
        - Thickness: 13 mm
        - Function: Anti-slip and scraper design
        - Material: High-quality rubber
      `,
      additionalDetails: [
        "Material: Heavy-Duty Rubber",
        "Dimensions: 100 x 150 cm",
        "Thickness: 13 mm",
        "Pattern: Octagonal anti-slip design",
        "Warranty: 1 Year Limited"
      ]
    },
    {
      id: 5,
      name: "NAAM-DL-Waves Mat",
      price: 1499.99,
      description: "The Rubber Waves Mat is ideal for workstations, kitchens, and areas prone to oil and debris. It features slots for debris to fall through, ensuring a clean workspace.",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/11/359669209/TM/EL/BX/14294248/industrial-waves-mat-500x500.jpg",
      category: "MAT",
      rating: 4.6,
      features: [
        "DRH 123",
        "90 x 150 cm",
        "12 mm"
      ],
      fullDescription: `
        The NAAM-DL-Waves Mat is a heavy-duty industrial mat with a wave design to trap debris and enhance comfort. Its slip-resistant surface is ideal for factory floors, kitchens, and oily workspaces.
        
        Key Specifications:
        - Dimensions: 90 x 150 cm
        - Thickness: 12 mm
        - Design: Wave pattern with slots for debris
        - Material: Tough rubber construction
      `,
      additionalDetails: [
        "Material: Heavy-Duty Rubber",
        "Dimensions: 90 x 150 cm",
        "Thickness: 12 mm",
        "Design: Wave pattern for enhanced debris management",
        "Warranty: 1 Year Limited"
      ]
    },
    {
      id: 6,
      name: "NAAM-DL-Bubble Roll Mat",
      price: 1499.99,
      description: "Bubble Roll Mats are comfortable anti-fatigue mats with a cushioned surface, ideal for reducing strain during long standing hours.",
      image: "https://cpimg.tistatic.com/06104026/b/4/Dolphin-Bubble-Roll-Yellow-Border.jpg",
      category: "MAT",
      rating: 4.6,
      features: [
        "DRH 785 G",
        "90 x 120 cm",
        "12 mm"
      ],
      fullDescription: `
        The NAAM-DL-Bubble Roll Mat is designed for maximum comfort and support, especially for areas where prolonged standing is required. Its cushioned bubble surface relieves strain on feet, legs, and back, making it perfect for workplaces, kitchens, and industrial settings.
        
        Key Specifications:
        - Dimensions: 90 x 120 cm
        - Thickness: 12 mm
        - Function: Anti-fatigue and cushioned support
        - Material: Heavy-duty rubber with a bubble surface
      `,
      additionalDetails: [
        "Material: Heavy-Duty Rubber",
        "Dimensions: 90 x 120 cm",
        "Thickness: 12 mm",
        "Surface: Cushioned bubble design for anti-fatigue support",
        "Warranty: 1 Year Limited"
      ]
    },    
    {
      id: 7,
      name: "ES83AC Auto Soap Dispenser",
      price: 1999.99,
      description: "The ES83AC Auto Soap Dispenser ensures touch-free, hygienic soap dispensing with a sleek, modern design.",
      image: "https://euronics.co.in/wp-content/uploads/2024/04/ES83AC-IMG1-1-jpg.webp",
      category: "Hygiene",
      rating: 4.7,
      features: [
        "Touch-free use",
        "Modern look",
        "Easy to refill",
        "Battery powered"
      ],
      fullDescription: `
        The ES83AC Auto Soap Dispenser is a cutting-edge hygiene solution designed for modern homes and businesses. 
        Its advanced touch-free mechanism ensures maximum cleanliness and minimal cross-contamination. 
        The sleek, contemporary design complements any bathroom or kitchen décor.

        Key Specifications:
        - Sensor-activated dispensing
        - Compact and elegant design
        - Runs on standard batteries
        - Adjustable soap volume control
        - Easy to clean and maintain
      `,
      additionalDetails: [
        "Battery Type: 4x AA Batteries (Not Included)",
        "Dispensing Mechanism: Infrared Sensor",
        "Material: High-Quality ABS Plastic",
        "Color Options: Silver/White",
        "Warranty: 1 Year Limited"
      ]
    },
    {
        id: 8,
        name: "ESM3 Shoe Shining Machiner",
        price: 1999.99,
        description: "The ESM3 provides a quick, automatic shine with soft brushes. Its compact design makes it easy to use anywhere.",
        image: "https://euronics.co.in/wp-content/uploads/2022/06/Shoe-Shining-Machine-ESM3.jpg",
        category: "Hygiene",
        rating: 4.7,
        features: [
          "Automatic shine",
          "Soft brushes",
          "Compact design",
          "Easy to use"
        ],
        fullDescription: `
          The ESM3 Shoe Shining Machiner is a revolutionary device designed to provide professional-level shoe polishing with minimal effort. 
          Perfect for home, office, or professional settings, this compact machine transforms shoe maintenance into a quick and effortless task.
      
          Key Specifications:
          - Advanced automatic polishing mechanism
          - Multiple brush types for different shoe materials
          - Compact and portable design
          - User-friendly interface
          - Suitable for various shoe types and sizes
        `,
        additionalDetails: [
          "Power Supply: 220V AC / 50Hz",
          "Brush Material: High-Quality Soft Synthetic Fibers",
          "Dimensions: 30cm x 20cm x 15cm",
          "Weight: 3.5 kg",
          "Color Options: Silver/Black",
          "Warranty: 2 Years Limited Manufacturer Warranty"
        ]
      },
      {
        id: 9,
        name: "Insect Killer With Glue Boards",
        price: 399.99,
        description: "Manufacturer of a wide range of products which include insect killer with glue board, glue pad fly catcher machine, glue board fly catcher machine-linnea fl warrior 30, linnea glue board fly catcher machine, glue board fly catcher machine - linnea fl warrior 45 and linnea glue board fly trap machine.",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/5/306792205/HQ/SR/KM/1924592/glue-board-fly-catcher-machine-linnea-fl-warrior-30-500x500.jpg",
        category: "Fly catcher",
        rating: 4.9,
        features: [
          "Traps insects fast",
          "Safe and chemical-free",
          "Easy to replace boards",
          "Works quietly"
        ],
        fullDescription: `
          The Insect Killer With Glue Boards is an innovative, non-toxic solution for effective pest control. 
          Designed for residential and commercial spaces, this device provides a clean and efficient method of capturing flying and crawling insects.
      
          Key Specifications:
          - Advanced glue board technology
          - No harmful chemicals or sprays
          - Silent operation
          - Easy maintenance and board replacement
          - Suitable for multiple indoor environments
        `,
        additionalDetails: [
          "Board Material: High-Adhesive Non-Toxic Glue",
          "Coverage Area: Up to 500 sq. ft.",
          "Dimensions: 40cm x 25cm x 10cm",
          "Glue Board Replacement: Monthly or as needed",
          "Mounting Options: Wall-mounted or Freestanding",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 10,
        name: "Portable Foam Equipments",
        price: 1199.99,
        description: "Portable Foam Equipment offers quick fire control with lightweight, easy-to-deploy design.",
        image: "https://aaagindia.in/public-images/PORTABLE-FOAM-EQUIPMENT_1587410104.png",
        category: "Portable Foam Equipments",
        rating: 4.8,
        features: [
          "Lightweight design",
          "Fast foam output",
          "Easy to carry",
          "For fire control"
        ],
        fullDescription: `
          The Portable Foam Equipment represents cutting-edge firefighting technology, designed for rapid and efficient fire suppression in various environments. 
          This advanced system provides a lightweight, portable solution for emergency fire control, making it an essential tool for safety professionals, industrial settings, and emergency response teams.
      
          Key Specifications:
          - Rapid foam generation technology
          - Compact and ergonomic design
          - Suitable for multiple fire classes
          - Quick deployment mechanism
          - Environmentally friendly foam composition
          - Ideal for small to medium-scale fire incidents
        `,
        additionalDetails: [
          "Foam Capacity: 6 Liters",
          "Operational Temperature Range: -10°C to 50°C",
          "Foam Expansion Ratio: 8:1",
          "Material: High-Strength Composite",
          "Total Weight: 8.5 kg (when fully loaded)",
          "Pressure Rating: 12 Bar Maximum",
          "Discharge Time: 45-60 Seconds",
          "Certification: ISO 9001:2015, Fire Safety Standards Compliant",
          "Warranty: 3 Years Limited Manufacturer Warranty"
        ]
      },
      {
        id: 11,
        name: "Branchpipes",
        price: 1199.99,
        description: "Branchpipes provide precise control and direction of water or foam flow for effective firefighting.",
        image: "https://www.firesupplies.in/wp-content/uploads/2023/03/Improfire-Short-branch-pipe-with-nozzle-SS-ISI.jpg",
        category: "Portable Foam Equipments",
        rating: 4.8,
        features: [
          "Controls water flow",
          "Strong material",
          "Easy to hold",
          "Fits many hoses"
        ],
        fullDescription: `
          The Branchpipes are precision-engineered firefighting tools designed to provide exceptional water and foam flow control. 
          Constructed with high-grade materials, these pipes offer firefighters unparalleled accuracy, durability, and versatility in critical fire suppression scenarios.
      
          Key Specifications:
          - Precise flow rate management
          - Robust and corrosion-resistant construction
          - Multiple nozzle settings
          - Ergonomic grip design
          - Compatible with standard firefighting hoses
          - Suitable for various firefighting applications
        `,
        additionalDetails: [
          "Material: Marine-Grade Stainless Steel",
          "Length Options: 500mm, 750mm, 1000mm",
          "Nozzle Diameter: 19mm, 25mm, 38mm variants",
          "Flow Rate: 200-600 Liters per Minute",
          "Working Pressure: 16 Bar Maximum",
          "Weight: 2.5-3.8 kg (depending on length)",
          "Coating: Corrosion-Resistant Electrostatic Powder Coating",
          "Connection Type: Standard Instantaneous Coupling",
          "Certification: ISI Mark, ISO 9001:2015",
          "Warranty: 5 Years Limited Manufacturer Warranty"
        ]
      },
      {
        id: 12,
        name: "Wheelie Bin",
        price: 1499.99,
        description: "Wheelie Bins offer easy waste collection and transport with a durable, mobile design.",
        image: "https://5.imimg.com/data5/ND/KL/MY-5315025/wheelie-bin-500x500.png",
        category: "Dustbin",
        rating: 4.6,
        features: [
          "Strong material",
          "Easy to move",
          "Different sizes",
          "Secure lid"
        ],
        fullDescription: `
          The Wheelie Bin is a comprehensive waste management solution designed for efficient and hygienic waste collection. 
          Engineered with durability and mobility in mind, this bin is perfect for residential, commercial, and industrial waste disposal needs.
      
          Key Specifications:
          - Ultra-durable construction
          - Smooth-rolling wheels for easy transportation
          - Advanced waste containment design
          - Weather-resistant material
          - Suitable for multiple waste types
          - Ergonomic handling features
        `,
        additionalDetails: [
          "Material: High-Density Polyethylene (HDPE)",
          "Capacity Options: 120L, 240L, 360L",
          "Color Variants: Green, Blue, Black, Gray",
          "Wheel Type: Heavy-Duty Rubber Wheels",
          "Lid Mechanism: Secure Snap-Lock",
          "UV Resistance: High-Grade UV Stabilization",
          "Temperature Tolerance: -20°C to 60°C",
          "Weight: 12-25 kg (depending on size)",
          "Certification: ISO 9001:2015, Environmental Compliance",
          "Warranty: 5 Years Limited Manufacturer Warranty"
        ]
      },
      {
        id: 13,
        name: "Metal Detector",
        price: 1499.99,
        description: "The Metal Detector quickly finds metal objects with high precision. It's lightweight and easy to use for various applications.",
        image: "https://www.staticsystems.in/assets/img/products/top/metal-detector/3.jpg",
        category: "Metal Detector",
        rating: 4.6,
        features: [
          "High accuracy",
          "Lightweight design",
          "Easy to use",
          "Adjustable sensitivity"
        ],
        fullDescription: `
          Our advanced Metal Detector represents cutting-edge detection technology, designed for professional and recreational use across multiple environments. 
          Whether you're a security professional, archaeologist, treasure hunter, or industrial inspector, this device offers unparalleled metal detection capabilities.
      
          Key Specifications:
          - Precision electronic scanning
          - Multiple detection modes
          - Ergonomic and lightweight design
          - Digital display with real-time feedback
          - Versatile application range
          - Battery-efficient operation
        `,
        additionalDetails: [
          "Detection Depth: Up to 30 cm for large objects",
          "Frequency: 7.2 kHz",
          "Search Coil Diameter: 25 cm",
          "Battery Type: Rechargeable Li-Ion",
          "Battery Life: 12-15 hours continuous use",
          "Weight: 1.2 kg",
          "Material: Aerospace-Grade Aluminum",
          "Waterproof Rating: IPX4 (Splash Resistant)",
          "Sensitivity Levels: 8 Adjustable Levels",
          "Includes: Carrying Case, Headphones, Charging Cable",
          "Warranty: 2 Years Limited Manufacturer Warranty"
        ]
      },
      {
        id: 14,
        name: "FRP-Trio",
        price: 1499.99,
        description: "The FRP-Trio is a durable and lightweight solution designed for various industrial applications. It offers excellent resistance and performance in challenging environments.",
        image: "https://5.imimg.com/data5/SELLER/Default/2023/4/298291564/HT/LL/SE/44662252/frp-trio-bins-500x500.png",
        category: "FRP-Trio",
        rating: 4.6,
        features: [
          "Durable construction",
          "Lightweight design",
          "Corrosion-resistant",
          "High-performance"
        ],
        fullDescription: `
          The FRP-Trio represents an advanced Fiberglass Reinforced Plastic (FRP) solution, engineered to deliver exceptional performance in demanding industrial environments. 
          Combining lightweight construction with remarkable durability, this product offers unparalleled versatility and long-term reliability.
      
          Key Specifications:
          - Advanced composite material technology
          - Superior strength-to-weight ratio
          - Exceptional chemical resistance
          - Minimal maintenance requirements
          - Adaptable to diverse industrial applications
          - Long operational lifespan
        `,
        additionalDetails: [
          "Material Composition: Fiberglass Reinforced Plastic",
          "Tensile Strength: 250-300 MPa",
          "Temperature Tolerance: -40°C to 120°C",
          "Chemical Resistance: Excellent against acids, alkalis",
          "Surface Finish: Smooth, non-porous gel coat",
          "Fire Rating: Class A (per ASTM E84)",
          "Thermal Conductivity: Low thermal transmission",
          "Weight: Approximately 15-20 kg",
          "Color Options: Custom colors available",
          "Application Sectors: Chemical, Food Processing, Marine",
          "Certification: ISO 9001:2015, Industrial Standards Compliant",
          "Warranty: 10 Years Limited Manufacturer Warranty"
        ]
      },
      {
        id: 15,
        name: "FRP Single Side Self Supporting Ladder",
        price: 1499.99,
        description: "The FRP Single Side Self Supporting Ladder is lightweight and sturdy, offering stability for safe and easy access. Its non-conductive material makes it ideal for electrical work.",
        image: "https://www.ymfg.co.in/web/image/product.product/100885/image_1024/%5B8301%5D%20FRP%20Single%20Side%20Self%20Supporting%20Ladder%20%282%20Step%29?unique=bd177e7",
        category: "Ladders",
        rating: 4.6,
        features: [
          "Lightweight design",
          "Self-supporting structure",
          "Non-conductive material",
          "Durable and stable"
        ],
        fullDescription: `
          The FRP Single Side Self Supporting Ladder is an advanced access solution engineered for maximum safety and performance. 
          Constructed from high-quality Fiberglass Reinforced Plastic (FRP), this ladder offers unparalleled durability, electrical insulation, and versatility for professional and personal use.
      
          Key Specifications:
          - Advanced non-conductive FRP construction
          - Innovative self-supporting design
          - Enhanced stability and safety features
          - Lightweight yet robust structure
          - Ideal for electrical and industrial applications
          - Corrosion and weather-resistant
        `,
        additionalDetails: [
          "Material: 100% Fiberglass Reinforced Plastic",
          "Step Configuration: 2-6 Step Options Available",
          "Maximum Load Capacity: 150 kg",
          "Electrical Insulation: Up to 35kV",
          "Height Range: 0.6m - 1.8m (depending on step count)",
          "Step Width: 30 cm",
          "Surface Finish: Non-slip textured steps",
          "Weight: 4.5-12 kg (depending on size)",
          "Color: Safety Yellow with Black Markings",
          "Temperature Tolerance: -40°C to 120°C",
          "Certification: IS 4443, OSHA Safety Standards",
          "Warranty: 5 Years Limited Manufacturer Warranty"
        ]
      },
      {
        id: 16,
        name: "FRP (Fiberglass) Wall Support Extension Ladder",
        price: 1499.99,
        description: "The FRP Wall Support Extension Ladder offers enhanced safety and stability with a fiberglass frame, ideal for reaching high places with ease and support.",
        image: "https://www.ymfg.co.in/web/image/product.product/101093/image_1024/%5B8196%5D%20FRP%20%28Fiberglass%29%20Wall%20Support%20Extension%20Ladder%20%2810%20x%202%20with%20J%20Hook%20%26%20Handrail%29?unique=1dcb38c",
        category: "Ladders",
        rating: 4.6,
        features: [
          "Fiberglass construction",
          "Wall support for stability",
          "Lightweight and durable",
          "Ideal for high-reach tasks"
        ],
        fullDescription: `
          The FRP Wall Support Extension Ladder is a premium access solution designed for professional contractors, maintenance teams, and industrial applications. 
          Featuring a sophisticated wall support system and J-hook design, this ladder provides exceptional stability, safety, and reach for complex elevation tasks.
      
          Key Specifications:
          - Advanced fiberglass reinforced construction
          - Integrated wall support mechanism
          - J-hook and handrail safety features
          - Smooth extension and locking system
          - Multiple length configurations
          - Superior weight-to-strength ratio
        `,
        additionalDetails: [
          "Material: High-Grade Fiberglass Reinforced Plastic",
          "Extension Length: 3m - 10m",
          "Maximum Load Capacity: 175 kg",
          "Number of Sections: 2-3 Sections",
          "Wall Hook Type: Adjustable J-Hook Design",
          "Step Width: 35 cm",
          "Electrical Insulation: Up to 45kV",
          "Weight: 15-25 kg (depending on length)",
          "Handrail: Integrated Safety Handrail",
          "Color: Safety Yellow with Black Markings",
          "Temperature Resistance: -30°C to 130°C",
          "Certification: EN 131, OSHA Safety Standards",
          "Warranty: 7 Years Limited Manufacturer Warranty"
        ]
      },
      {
        id: 17,
        name: "FIRESSENSE – Direct Low Pressure System",
        price: 1499.99,
        description: "FIRESSENSE is a low-pressure system for fast and efficient fire control with less water.",
        image: "https://swastiksynergy.com/images/direct-low-pressure-system-4.jpg",
        category: "FireSense LowPressure",
        rating: 4.6,
        features: [
          "Low pressure",
          "Fast fire control",
          "Less water use",
          "Quick response"
        ],
        fullDescription: `
          The FIRESSENSE Direct Low Pressure System represents next-generation firefighting technology, engineered to provide rapid, efficient, and environmentally conscious fire suppression. 
          This innovative system delivers superior fire control with minimal water usage, making it an ideal solution for various fire risk environments.
      
          Key Specifications:
          - Advanced low-pressure fire suppression technology
          - Minimal water consumption
          - Rapid response and deployment
          - Versatile application across different fire classes
          - Environmentally friendly design
          - Compact and portable configuration
        `,
        additionalDetails: [
          "Operational Pressure: 4-6 Bar",
          "Water Consumption: 60% Less than Traditional Systems",
          "Foam Concentrate Compatibility: Class A and B Foams",
          "Discharge Rate: 200-400 Liters per Minute",
          "Tank Capacity: 100-250 Liters",
          "Operational Temperature: -10°C to 50°C",
          "Pump Type: High-Efficiency Centrifugal",
          "Mobility: Trailer-Mounted and Skid-Mounted Options",
          "Control System: Digital Pressure and Flow Monitoring",
          "Response Time: Under 30 Seconds",
          "Certification: NFPA, ISO 9001:2015",
          "Warranty: 3 Years Comprehensive Manufacturer Warranty"
        ]
      },
      {
        id: 18,
        name: "Lockout Tagout",
        price: 1499.99,
        description: "Lockout Tagout is a safety system designed to prevent accidental machine startup during maintenance or servicing.",
        image: "https://www.safetylock.net/wp-content/uploads/2023/08/standard-stations.png.webp",
        category: "Lockout Tagout",
        rating: 4.6,
        features: [
          "Prevents accidental machine startup",
          "Ensures worker safety",
          "Compliance with safety standards",
          "Easy to apply and remove"
        ],
        fullDescription: `
          The Lockout Tagout system is a crucial safety measure that prevents accidental machine startup during maintenance or servicing. This system ensures the protection of workers by securely isolating energy sources and providing a visual warning.
      
          Key Specifications:
          - Function: Prevents accidental machine startup
          - Safety: Ensures worker protection during maintenance
          - Compliance: Meets industry safety standards
          - Usability: Easy to apply and remove
        `,
        additionalDetails: [
          "Function: Prevents accidental machine startup",
          "Safety: Ensures worker protection during maintenance",
          "Compliance: Adheres to industry safety standards",
          "Usage: Easy to apply and remove",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 19,
        name: "LOTO Kit",
        price: 1499.99,
        description: "LOTO Kit is a comprehensive set of tools and devices used to implement effective lockout tagout procedures for workplace safety.",
        image: "https://www.safetylock.net/wp-content/uploads/2023/09/mechanical-valve-loto-kits-category.png.webp",
        category: "Lockout Tagout",
        rating: 4.6,
        features: [
          "Comprehensive lockout tools and devices",
          "Ensures safe maintenance and servicing",
          "Portable and easy to carry",
          "Supports compliance with safety regulations"
        ],
        fullDescription: `
          The LOTO Kit is a complete set of lockout tools and devices that enables the safe isolation of energy sources during maintenance and servicing. This comprehensive kit ensures worker safety and supports compliance with safety regulations.
      
          Key Specifications:
          - Components: Comprehensive set of lockout tools and devices
          - Function: Ensures safe maintenance and servicing
          - Portability: Portable and easy to carry
          - Compliance: Supports compliance with safety regulations
        `,
        additionalDetails: [
          "Components: Full set of lockout tools and devices",
          "Function: Safeguards workers during maintenance and servicing",
          "Portability: Portable and easy to carry",
          "Compliance: Supports safety regulation compliance",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 20,
        name: "AC Automatic Boom Barrier",
        price: 1499.99,
        description: "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
        image: "https://image.made-in-china.com/226f3j00kUjtdMiGORzp/AC-Automatic-Boom-Barrier-Factory.webp",
        category: "Entrance Automation Product",
        rating: 4.6,
        features: [
          "Automated vehicle access control",
          "Smooth and quick operation",
          "Durable and weather-resistant design",
          "Supports remote control and sensor integration"
        ],
        fullDescription: `
          The AC Automatic Boom Barrier is a motorized access control system designed to manage vehicle entry and exit points. With its automated opening and closing mechanism, this boom barrier enhances security, convenience, and traffic control at entry points.
      
          Key Specifications:
          - Operation: Automated vehicle access control
          - Functionality: Smooth and quick operation
          - Design: Durable, weather-resistant structure
          - Integration: Supports remote control and sensor integration
        `,
        additionalDetails: [
          "Operation: Automated vehicle access control system",
          "Functionality: Smooth, quick opening and closing",
          "Design: Weather-resistant and durable materials",
          "Integration: Remote control and sensor compatibility",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 21,
        name: "AC Automatic Boom Barrier",
        price: 1499.99,
        description: "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
        image: "https://www.unisurg.com/wp-content/uploads/2023/03/thumb_1666008522_bf1284472c1b751de200-300x313.png",
        category: "First Aid Center",
        rating: 4.6,
        features: [
          "Automated vehicle access control",
          "Smooth and quick operation",
          "Durable and weather-resistant design",
          "Supports remote control and sensor integration"
        ],
        fullDescription: `
          The AC Automatic Boom Barrier is a motorized access control system designed to manage vehicle entry and exit points. With its automated opening and closing mechanism, this boom barrier enhances security, convenience, and traffic control at entry points.
      
          Key Specifications:
          - Operation: Automated vehicle access control
          - Functionality: Smooth and quick operation
          - Design: Durable, weather-resistant structure
          - Integration: Supports remote control and sensor integration
        `,
        additionalDetails: [
          "Operation: Automated vehicle access control system",
          "Functionality: Smooth, quick opening and closing",
          "Design: Weather-resistant and durable materials",
          "Integration: Remote control and sensor compatibility",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 22,
        name: "Examination Table",
        price: 1499.99,
        description: "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
        image: "https://www.unisurg.com/wp-content/uploads/2023/03/1666006046_cc2584bebfc260526b57-300x196.png",
        category: "First Aid Center",
        rating: 4.6,
        features: [
          "Automated vehicle access control",
          "Smooth and quick operation",
          "Durable and weather-resistant design",
          "Supports remote control and sensor integration"
        ],
        fullDescription: `
          The AC Automatic Boom Barrier is a motorized access control system designed to manage vehicle entry and exit points. With its automated opening and closing mechanism, this boom barrier enhances security, convenience, and traffic control at entry points.
      
          Key Specifications:
          - Operation: Automated vehicle access control
          - Functionality: Smooth and quick operation
          - Design: Durable, weather-resistant structure
          - Integration: Supports remote control and sensor integration
        `,
        additionalDetails: [
          "Operation: Automated vehicle access control system",
          "Functionality: Smooth, quick opening and closing",
          "Design: Weather-resistant and durable materials",
          "Integration: Remote control and sensor compatibility",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 23,
        name: "Bed Side Locker",
        price: 1499.99,
        description: "The Bed Side Locker is a compact and durable storage solution designed to provide easy access to essential items near hospital beds or patient areas.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEyf5nsRbD0EPIkIYlIFPeOx93N8Kidz70OZ_cVyKILUDRIgqOPBcglaQwI0hABAj0TxI&usqp=CAU",
        category: "First Aid Center",
        rating: 4.6,
        features: [
          "Spacious storage for essential items",
          "Durable, rust-proof design",
          "Smooth sliding drawer and compartment",
          "Easy to clean and maintain"
        ],
        fullDescription: `
          The Bed Side Locker is an essential piece of furniture in medical and healthcare environments. It provides easy access to personal belongings and medical supplies, ensuring convenience for patients and healthcare providers. The locker features a sturdy frame, smooth sliding drawers, and ample storage capacity.
      
          Key Specifications:
          - Storage: Spacious drawer and compartment for easy organization
          - Material: Durable, rust-proof materials
          - Design: Compact, space-saving design with smooth edges
          - Maintenance: Easy to clean and sanitize for hygienic environments
        `,
        additionalDetails: [
          "Storage: Single drawer with bottom compartment",
          "Material: Rust-proof metal or high-grade plastic",
          "Design: Compact and space-saving structure",
          "Cleaning: Easy to clean and maintain",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 24,
        name: "Bio Medical Waste Bin (Only Bin)",
        price: 1499.99,
        description: "Wheelie Bins offer easy waste collection and transport with a durable, mobile design.",
        image: "https://www.unisurg.com/wp-content/uploads/2023/03/thumb_1667121747_52f2a490a3a5329092e8.png",
        category: "Dustbin",
        rating: 4.6,
        features: [
          "Strong material",
          "Easy to move",
          "Different sizes",
          "Secure lid"
        ],
        fullDescription: `
          The Bio Medical Waste Bin (Only Bin) is an essential tool for waste management, especially in healthcare and medical facilities. Its sturdy design, mobility, and secure lid ensure safe collection and transportation of waste, maintaining hygienic and clean surroundings.
      
          Key Specifications:
          - Material: Made from strong, durable, and chemical-resistant material
          - Mobility: Easy to move with built-in wheels for effortless transport
          - Sizes: Available in various sizes to suit different waste management needs
          - Lid: Secure lid to prevent odor, spillage, and exposure to hazardous materials
        `,
        additionalDetails: [
          "Material: High-strength, chemical-resistant plastic",
          "Mobility: Smooth-rolling wheels for easy movement",
          "Sizes: Available in multiple size options",
          "Lid: Secure locking lid for safety and hygiene",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 25,
        name: "Bio Medical Waste Bin (Sets)",
        price: 1499.99,
        description: "Wheelie Bins offer easy waste collection and transport with a durable, mobile design.",
        image: "https://www.indosurgicals.com/images/products/18028-waste-segregation-trolley-ss-60-liter-4.jpg",
        category: "Dustbin",
        rating: 4.6,
        features: [
          "Strong material",
          "Easy to move",
          "Different sizes",
          "Secure lid"
        ],
        fullDescription: `
          The Bio Medical Waste Bin (Sets) is a complete waste management solution designed for healthcare, medical, and laboratory environments. This set includes multiple bins for effective waste segregation, helping maintain a hygienic and safe environment. The bins are made from durable materials, ensuring long-lasting use and easy mobility.
      
          Key Specifications:
          - Material: Durable, chemical-resistant, and high-strength material
          - Segregation: Multiple bins for effective waste segregation
          - Mobility: Equipped with wheels for easy movement
          - Sizes: Available in multiple sizes to meet varied waste management needs
          - Lid: Secure locking lids to contain odors, spills, and hazardous waste
        `,
        additionalDetails: [
          "Material: High-quality, chemical-resistant plastic or stainless steel",
          "Segregation: Includes multiple bins for efficient waste sorting",
          "Mobility: Smooth-rolling wheels for effortless movement",
          "Sizes: Available in different sizes and capacities",
          "Lid: Secure lids to prevent leakage and ensure hygiene",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 26,
        name: "AC Automatic Boom Barrier",
        price: 1499.99,
        description: "AC Automatic Boom Barrier is a motorized gate system designed to control vehicle access with automated opening and closing functionality.",
        image: "https://www.staticsystems.in/assets/img/products/weapon-scanner.jpg",
        category: "Entrance Automation Product",
        rating: 4.6,
        features: [
          "Automated vehicle access control",
          "Smooth and quick operation",
          "Durable and weather-resistant design",
          "Supports remote control and sensor integration"
        ],
        fullDescription: `
          The AC Automatic Boom Barrier is a modern, motorized access control system ideal for managing vehicle entry and exit in commercial, industrial, and residential areas. Its automated functionality ensures smooth and efficient traffic management, while the durable construction withstands weather conditions for long-lasting use.
      
          Key Specifications:
          - Automation: Automated opening and closing for efficient traffic flow
          - Control: Remote control and sensor-based operation support
          - Design: Weather-resistant and durable construction
          - Speed: Smooth and quick operation for better traffic control
          - Use Case: Suitable for parking lots, toll booths, and secured facilities
        `,
        additionalDetails: [
          "Material: Weather-resistant, durable metal construction",
          "Automation: Full automation with remote and sensor control",
          "Speed: Smooth and fast opening/closing mechanism",
          "Design: Robust, weatherproof design for outdoor use",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 27,
        name: "FCG Flameproof Lights",
        price: 1499.99,
        description: "FCG Flameproof Lights are specialized lighting solutions designed to operate safely in hazardous environments where flammable gases, vapors, or dust are present.",
        image: "https://fcghitech.com/wp-content/uploads/2021/10/LW-51200.jpg",
        category: "Flame Proof Products",
        rating: 4.6,
        features: [
          "Flameproof design for hazardous areas",
          "High durability and impact resistance",
          "Energy-efficient lighting solution",
          "Compliant with safety and industrial standards"
        ],
        fullDescription: `
          The FCG Flameproof Lights are engineered to provide safe and efficient lighting in hazardous environments where flammable gases, vapors, or dust are present. These lights are designed with flameproof technology to prevent ignition and ensure maximum safety. Built with high-quality materials, they offer superior impact resistance and longevity, making them ideal for industrial, manufacturing, and chemical facilities.
      
          Key Specifications:
          - Design: Flameproof construction for hazardous environments
          - Durability: Impact-resistant and weatherproof design
          - Efficiency: Energy-efficient lighting technology
          - Compliance: Certified to meet industrial and safety standards
          - Use Case: Suitable for use in oil refineries, chemical plants, and other high-risk areas
        `,
        additionalDetails: [
          "Material: Heavy-duty flameproof construction",
          "Lighting Technology: Energy-efficient LED/halogen options",
          "Impact Resistance: High impact resistance for rugged use",
          "Compliance: Complies with international safety and industrial standards",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 28,
        name: "Non-sparking Tools",
        price: 1499.99,
        description: "Electrical and Non-Sparking Products are specialized tools and equipment designed to operate safely in explosive or flammable environments, preventing the risk of ignition.",
        image: "https://image.made-in-china.com/202f0j00NruRnotgOQpO/Non-Sparking-Pincers-End-Cutting-Pliers-End-Cutting-Nippers.webp",
        category: "Electrical and Non-Sparking Products",
        rating: 4.6,
        features: [
          "Safe for use in explosive environments",
          "Prevents spark generation during operation",
          "Complies with industry safety standards",
          "Durable and corrosion-resistant materials"
        ],
        fullDescription: `
          Non-sparking tools are essential safety products used in environments where flammable gases, vapors, or combustible dust may be present. These tools are made from non-ferrous metals, ensuring they do not create sparks during use, thereby minimizing the risk of explosion. The tools are corrosion-resistant and provide a reliable, long-lasting solution for hazardous environments such as chemical plants, oil refineries, and manufacturing facilities.
      
          Key Specifications:
          - Design: Non-sparking, non-magnetic, and corrosion-resistant construction
          - Material: Made from non-ferrous alloys such as copper, brass, or bronze
          - Safety: Compliant with industry safety standards for hazardous environments
          - Durability: Resistant to corrosion and wear
          - Use Case: Ideal for use in explosive environments, oil refineries, and chemical plants
        `,
        additionalDetails: [
          "Material: Non-ferrous metal alloy (copper, brass, bronze)",
          "Spark Resistance: Fully non-sparking to prevent ignition",
          "Corrosion Resistance: High resistance to corrosion and wear",
          "Compliance: Meets international safety standards for hazardous areas",
          "Warranty: 1 Year Limited"
        ]
      },
      {
        id: 29,
        name: "Safety SS 01",
        price: 1499.99,
        description: "Safety SS 01 is a personal protective equipment (PPE) designed to ensure worker safety by providing protection against workplace hazards.",
        image: "https://autolite-india.com/image/cache/catalog/Safety/ss-01-600x600.jpg",
        category: "Emergency Lighting System",
        rating: 4.6,
        features: [
          "Enhanced protection for workplace safety",
          "Lightweight and comfortable design",
          "Durable and long-lasting materials",
          "Complies with safety and industry standards"
        ],
        fullDescription: `
          Safety SS 01 is a high-quality Personal Protective Equipment (PPE) designed to safeguard workers against workplace hazards. This product provides enhanced protection, ensuring the safety and well-being of workers in industrial, construction, and hazardous environments. With a lightweight and comfortable design, workers can wear it for extended periods without discomfort. Built from durable materials, it withstands tough conditions, making it a long-lasting and reliable choice.
      
          Key Specifications:
          - Design: Ergonomic design for optimal comfort and protection
          - Material: High-grade, impact-resistant materials
          - Safety: Provides protection against impact, dust, and other workplace hazards
          - Durability: Built to withstand harsh working conditions
          - Use Case: Suitable for use in construction sites, factories, and hazardous environments
        `,
        additionalDetails: [
          "Material: High-grade impact-resistant material",
          "Design: Lightweight and ergonomic design for extended use",
          "Durability: Built to last in challenging work environments",
          "Safety Compliance: Adheres to global safety and PPE standards",
          "Warranty: 1 Year Limited Warranty"
        ]
      },
      {
        id: 30,
        name: "Safety SS 02",
        price: 1499.99,
        description: "Safety SS 02 is a durable and robust industrial safety helmet designed to protect workers from head injuries in hazardous work environments.",
        image: "https://autolite-india.com/image/cache/catalog/Safety/ss-02-600x600.jpg",
        category: "Emergency Lighting System",
        rating: 4.6,
        features: [
          "High-impact resistance for head protection",
          "Lightweight and comfortable fit",
          "Adjustable headband for a secure fit",
          "Meets industrial safety and quality standards"
        ],
        fullDescription: `
          The Safety SS 02 is a durable and robust industrial safety helmet, specifically crafted to protect workers from head injuries in hazardous work environments. It offers a blend of strength, comfort, and style, making it an essential piece of personal protective equipment (PPE) in industrial, construction, and other high-risk workplaces. Designed with a lightweight structure and high-impact resistance, the helmet ensures workers stay protected while maintaining comfort during long shifts.
      
          Key Specifications:
          - Material: High-density impact-resistant material
          - Comfort: Lightweight design with a padded, adjustable headband for a secure and snug fit
          - Protection: Superior impact protection to shield against falling debris and head impacts
          - Safety: Certified to meet industrial safety and PPE compliance standards
          - Use Case: Ideal for use in construction sites, warehouses, factories, and hazardous environments
        `,
        additionalDetails: [
          "Material: High-density impact-resistant material",
          "Design: Lightweight with an ergonomic design for extended use",
          "Comfort: Adjustable headband for a personalized fit",
          "Safety Compliance: Certified to meet global safety and PPE standards",
          "Warranty: 1 Year Limited Warranty"
        ]
      },
      {
        id: 31,
        name: "Safety SS 03",
        price: 1499.99,
        description: "Safety SS 03 is a high-performance industrial safety gear designed to provide superior eye protection and comfort in challenging work environments.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzKIu35U7Uf1UpJBS8p9tXSZbLDiQ-G-y26g&s",
        category: "Emergency Lighting System",
        rating: 4.6,
        features: [
          "Superior eye protection with impact resistance",
          "Ergonomic design for all-day comfort",
          "Adjustable straps for a secure and customized fit",
          "Complies with industry safety and quality standards"
        ],
        fullDescription: `
          The Safety SS 03 is a high-performance industrial safety product designed to provide superior eye protection and comfort in demanding work environments. This safety equipment ensures optimal protection from dust, debris, and potential eye hazards. Crafted with impact-resistant materials, it offers unmatched durability and long-lasting performance. The ergonomic design ensures all-day comfort, while the adjustable straps provide a customized fit for every user.
      
          Key Specifications:
          - Material: Impact-resistant polycarbonate lenses
          - Comfort: Lightweight design with a snug, comfortable fit
          - Protection: Protection against dust, debris, and hazardous particles
          - Safety: Certified to meet global safety standards for eye protection
          - Use Case: Suitable for construction sites, manufacturing units, laboratories, and hazardous workspaces
        `,
        additionalDetails: [
          "Material: Impact-resistant polycarbonate lenses",
          "Design: Ergonomic design for all-day comfort",
          "Fit: Adjustable straps for a personalized, secure fit",
          "Safety Compliance: Meets global safety and PPE standards for eye protection",
          "Warranty: 1 Year Limited Warranty"
        ]
      },
      {
        id: 32,
        name: "Safety SS 04",
        price: 1499.99,
        description: "Safety SS 04 is a safety signage designed to indicate the location of an emergency telephone for quick communication during critical situations.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSYfn0y4X1AnDpL_QFJ5If-fYwmiO5E83azw&s",
        category: "Emergency Lighting System",
        rating: 4.6,
        features: [
          "Indicates the presence of an emergency telephone",
          "Clear and recognizable symbol",
          "Available in multiple sizes (150x150mm, 200x200mm)",
          "Made with durable and weather-resistant materials"
        ],
        fullDescription: `
          The Safety SS 04 signage is a critical component of emergency preparedness, offering a clear visual cue for the location of an emergency telephone. Designed with a universally recognizable symbol, this signage ensures quick identification and action during emergencies. The signage is available in two sizes (150x150mm, 200x200mm) to suit different visibility requirements. Built with high-quality, weather-resistant materials, it maintains visibility and durability even in challenging environmental conditions.
      
          Key Specifications:
          - Material: High-durability weatherproof material
          - Design: Clear, universally recognized emergency telephone symbol
          - Sizes: Available in 150x150mm and 200x200mm
          - Visibility: High-contrast design for enhanced visibility
          - Use Case: Ideal for workplaces, public spaces, and emergency response locations
        `,
        additionalDetails: [
          "Material: High-durability weatherproof material",
          "Design: Clear, universally recognized emergency telephone symbol",
          "Sizes: Available in 150x150mm and 200x200mm",
          "Usage: Suitable for indoor and outdoor installation",
          "Compliance: Meets global standards for emergency signage and safety compliance"
        ]
      },
      {
        id: 33,
        name: "Safety SS 05",
        price: 1499.99,
        description: "Safety SS 05 is a safety signage designed to indicate the location or availability of foot protection measures in industrial and workplace settings.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM_YMyjfwB0dcmV-kj1zr_rZEt7PZIyvsYjw&s",
        category: "Emergency Lighting System",
        rating: 4.6,
        features: [
          "Clear and easy-to-read safety signage",
          "Indicates foot protection requirements",
          "Available in multiple sizes (150x150mm, 200x200mm)",
          "Durable and weather-resistant material"
        ],
        fullDescription: `
          The Safety SS 05 signage is a vital visual tool used in industrial and workplace environments to ensure that workers are aware of the need for foot protection. The sign is designed with a clear, easy-to-read symbol that emphasizes the importance of protective footwear. It is available in two sizes (150x150mm, 200x200mm) to meet visibility requirements in different settings. The sign is constructed from high-quality, weather-resistant materials, ensuring its durability even in outdoor or harsh conditions.
      
          Key Specifications:
          - Material: Weather-resistant, durable material
          - Design: Clear symbol indicating the requirement for foot protection
          - Sizes: Available in 150x150mm and 200x200mm
          - Usage: Suitable for warehouses, factories, construction sites, and industrial workplaces
          - Visibility: High-contrast design to ensure maximum visibility
        `,
        additionalDetails: [
          "Material: High-durability weatherproof material",
          "Design: Clear, universally recognized foot protection symbol",
          "Sizes: Available in 150x150mm and 200x200mm",
          "Usage: Suitable for indoor and outdoor environments",
          "Compliance: Meets global standards for safety signage and workplace compliance"
        ]
      },
      {
        id: 34,
        name: "Safety SS 06",
        price: 1499.99,
        description: "Safety SS 06 is a safety signage designed to indicate the availability of Thermal Protection Aid (TPA) for use in environments requiring heat resistance and protection.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMnmaAcfoXgiErCX9KjN_R19GVdT9-Aup-w&s",
        category: "Emergency Lighting System",
        rating: 4.6,
        features: [
          "Highlights the presence of Thermal Protection Aid",
          "Clear and easy-to-read design",
          "Available in multiple sizes (150x150mm, 200x200mm)",
          "Durable and weather-resistant material"
        ],
        fullDescription: `
          The Safety SS 06 signage is a crucial indicator of the availability of Thermal Protection Aid (TPA) in areas where heat resistance and protection are essential. It clearly highlights the presence of TPA, ensuring that workers and personnel are aware of its location. This safety signage is crafted from high-quality, weather-resistant material, making it suitable for indoor and outdoor use. It comes in two size options (150x150mm and 200x200mm) for enhanced visibility in various work environments.
      
          Key Specifications:
          - Material: Weatherproof and durable material
          - Design: Easy-to-read, universally recognized TPA symbol
          - Sizes: Available in 150x150mm and 200x200mm
          - Usage: Ideal for industrial sites, factories, and emergency response areas
          - Visibility: High-contrast design to ensure maximum visibility
        `,
        additionalDetails: [
          "Material: High-durability weatherproof material",
          "Design: Clear and universal Thermal Protection Aid (TPA) symbol",
          "Sizes: Available in 150x150mm and 200x200mm",
          "Usage: Suitable for environments requiring heat resistance and protection",
          "Compliance: Meets global standards for safety signage and workplace compliance"
        ]
      }      
  ];

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail-container">
      <Link to="/product" className="back-btn">← Back to Catalog</Link>
      
      <div className="product-detail-content">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          
          <div className="product-detail-rating">
            {[...Array(5)].map((star, index) => (
              <span 
                key={index} 
                className={`star ${index < Math.floor(product.rating) ? 'filled' : ''}`}
              >
                ★
              </span>
            ))}
            <span className="rating-number">({product.rating})</span>
          </div>
          
          <p className="product-detail-description">{product.description}</p>
          
          {/* <div className="product-detail-price-section">
            <span className="product-detail-price">${product.price.toFixed(2)}</span>
            <button className="buy-now-btn">Buy Now</button>
          </div> */}
          
          <div className="product-detail-features">
            <h3>Key Features</h3>
            {product.features.map((feature, index) => (
              <span key={index} className="feature-tag">{feature}</span>
            ))}
          </div>
          
          <div className="product-detail-full-description">
            <h3>Detailed Description</h3>
            <p>{product.fullDescription}</p>
          </div>
          
          {product.additionalDetails && (
            <div className="product-additional-details">
              <h3>Additional Details</h3>
              <ul>
                {product.additionalDetails.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;