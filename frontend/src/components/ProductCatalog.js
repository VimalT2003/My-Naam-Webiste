import React, { useRef, useState } from "react";
import "../styles/ProductCatalog.css";
import { useNavigate } from "react-router-dom";
import mat1 from "../images/mat1.jpg";
import mat2 from "../images/mat2.jfif";
import mat3 from "../images/mat3.jpg";
import mat4 from "../images/mat4.jpg";
import mat5 from "../images/mat5.webp";
import mat6 from "../images/mat6.jpg";
import hyg1 from "../images/hyg1.webp";
import hyg2 from "../images/hyg2.jpg";
import hyg3 from "../images/hyg3.webp";
import hyg4 from "../images/hyg4.webp";
import fan1 from '../images/indusfan.jpeg'
import rubberbump from '../images/rubberbump.jfif'
import bumpers from '../images/bumpers.webp'
import cable from '../images/cable.webp'
import dtype from '../images/dtype.jpg'
import flapdel from '../images/flapdel.jfif'
import mirror from '../images/mirror.webp'
import vest from '../images/vest.webp'
import wall from '../images/wall.jfif'

const ProductCatalog = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const [productss] = useState([
    {
      id: 1,
      name: "NAAM-DL-Ramp MAT",
      price: 1499.99,
      description:
        "Ramp Mats are Anti-slip rubber mats with a​ raised circular surface.",
      image: mat1,
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
      image: mat2,
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
      image: mat3,
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
      image: mat4,
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
      image: mat5,
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
      image: mat6,
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
      image: hyg1,
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
      image: hyg2,
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
      image: hyg3,
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
      image: "https://aaagindia.in/public-images/PORTABLE-FOAM-EQUIPMENT_1587410104.png",
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
      name: "AUTOMATIC BOOM BARRIER",
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
      name: "Comfort Plus Wheelchair",
      price: 299.99,
      description:
        "The Comfort Plus Wheelchair is designed for enhanced mobility and comfort, offering reliable support for individuals with limited mobility. It features a lightweight frame and adjustable seating to ensure both ease of movement and comfort during extended use.",
      image:
        "https://www.unisurg.com/wp-content/uploads/2023/03/thumb_1666008522_bf1284472c1b751de200-300x313.png",
      category: "First Aid Center",
      rating: 4.7,
      features: [
        "Lightweight and easy to maneuver",
        "Adjustable armrests and footrests for personalized comfort",
        "Durable and rust-resistant frame",
        "Pneumatic tires for smooth ride over various terrains",
        "Foldable for easy storage and transport",
      ],
    },
    {
      id: 22,
      name: "Examination Table",
      price: 499.99,
      description:
        "The Examination Table is designed to provide comfort and support for patients during medical evaluations. It features a sturdy frame, adjustable backrest, and cushioned upholstery, making it ideal for clinics and hospitals.",
      image:
        "https://www.unisurg.com/wp-content/uploads/2023/03/1666006046_cc2584bebfc260526b57-300x196.png",
      category: "First Aid Center",
      rating: 4.8,
      features: [
        "Adjustable backrest for optimal positioning",
        "High-quality cushioned upholstery for patient comfort",
        "Durable and stable frame with anti-slip feet",
        "Built-in paper roll holder for convenience",
        "Easy to clean and maintain surfaces",
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
      name: "Hand Held Metal Detector",
      price: 1499.99,
      description:
        "The Hand Held Metal Detector is a compact and reliable device designed for security screening and detecting metallic objects. It offers high sensitivity and easy operation, making it ideal for security personnel and inspection purposes.",
      image:
        "https://www.staticsystems.in/assets/img/products/weapon-scanner.jpg",
      category: "Entrance Automation Product",
      rating: 4.6,
      features: [
        "High sensitivity detection",
        "Lightweight design",
        "Audible and vibration alerts",
        "Rechargeable battery",
        "Durable and sturdy build",
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
      name: "Ft 31 Flameproof",
      price: 1499.99,
      description:
        "Ft 31 Flameproof Lights are specialized lighting solutions designed to operate safely in hazardous environments where flammable gases, vapors, or dust are present.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_kQLEJinA_evM388CkbH6eXSiVh97uHQa4NuhLWD3p-p1mLOvpZ6usvt4x7aGVWdWYE&usqp=CAU",
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
      id: 32,
      name: "Emergency Lighting System",
      price: 1299.99,
      description:
        "Emergency Lighting Systems provide reliable illumination during power outages or emergencies, ensuring safety and compliance with emergency preparedness standards.",
      image:
        "https://studyelectrical.com/wp-content/uploads/2021/09/emergency-lighting-system.jpg",
      category: "Emergency Lighting System",
      rating: 4.8,
      features: [
        "Automatic activation during power failure",
        "Energy-efficient LED lights",
        "Durable and weather-resistant design",
        "Compliant with safety and emergency standards",
      ],
    },
    {
      id: 33,
      name: "Emergency Lighting System 2",
      price: 1299.99,
      description:
        "Emergency Lighting Systems provide reliable illumination during power outages or emergencies, ensuring safety and compliance with emergency preparedness standards.",
      image:
        "https://www.asco.uk.com/wp-content/uploads/2020/10/Pixabay-emergency-exit-4168808_1920-720x320-c-center.jpg",
      category: "Emergency Lighting System",
      rating: 4.8,
      features: [
        "Automatic activation during power failure",
        "Energy-efficient LED lights",
        "Durable and weather-resistant design",
        "Compliant with safety and emergency standards",
      ],
    },
    {
      id: 34,
      name: "SS Eye Wash Shower 1",
      price: 899.99,
      description:
        "SS Eye Wash Showers are essential safety equipment designed to provide immediate flushing of eyes and body in case of chemical spills or hazardous exposure, ensuring workplace safety compliance.",
      image:
        "https://thadhanisafety.com/wp-content/uploads/2020/11/999s-300x300.jpg",
      category: "SS Eye Wash Shower",
      rating: 4.7,
      features: [
        "Stainless steel construction for durability",
        "Corrosion-resistant and easy to clean",
        "Dual-purpose design for eye wash and body shower",
        "Meets ANSI and OSHA safety standards",
      ],
    },
    {
      id: 35,
      name: "SS Eye Wash Shower 2",
      price: 899.99,
      description:
        "SS Eye Wash Showers are essential safety equipment designed to provide immediate flushing of eyes and body in case of chemical spills or hazardous exposure, ensuring workplace safety compliance.",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhGSp6JZrgLgEQfu84elCcjenonnK3LcFc_cK7-vLbohUge3I3",
      category: "SS Eye Wash Shower",
      rating: 4.7,
      features: [
        "Stainless steel construction for durability",
        "Corrosion-resistant and easy to clean",
        "Dual-purpose design for eye wash and body shower",
        "Meets ANSI and OSHA safety standards",
      ],
    },
    {
      id: 36,
      name: "SS Eye Wash Shower 3",
      price: 899.99,
      description:
        "SS Eye Wash Showers are essential safety equipment designed to provide immediate flushing of eyes and body in case of chemical spills or hazardous exposure, ensuring workplace safety compliance.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHLmERim9-KaFucNUAoukXBWF-h68AB5zkYA&s",
      category: "SS Eye Wash Shower",
      rating: 4.7,
      features: [
        "Stainless steel construction for durability",
        "Corrosion-resistant and easy to clean",
        "Dual-purpose design for eye wash and body shower",
        "Meets ANSI and OSHA safety standards",
      ],
    },
    {
      id: 37,
      name: "Stainless Steel Eye Wash Foot",
      price: 899.99,
      description:
        "Stainless Steel Eye Wash Foot are essential safety equipment designed to provide immediate flushing of eyes and body in case of chemical spills or hazardous exposure, ensuring workplace safety compliance.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35h81IYSvLc7t6fei3cvKpi-CLiKpqB-pkQ&s",
      category: "SS Eye Wash Shower",
      rating: 4.7,
      features: [
        "Stainless steel construction for durability",
        "Corrosion-resistant and easy to clean",
        "Dual-purpose design for eye wash and body shower",
        "Meets ANSI and OSHA safety standards",
      ],
    },
    {
      id: 38,
      name: "Online Gas Detector",
      price: 499.99,
      description:
        "The Online Gas Detector is a cutting-edge device designed to continuously monitor the presence of harmful gases in the environment, providing real-time alerts to ensure safety in hazardous areas.",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2021/12/OU/HR/JF/11766654/online-gas-detector-500x500.jpg",
      category: "Online Gas Detector",
      rating: 4.9,
      features: [
        "Real-time gas concentration monitoring",
        "Multiple gas sensors for diverse environments",
        "Remote alert notifications for hazardous gas levels",
        "Durable design for industrial and commercial use",
      ],
    },
    {
      id: 39,
      name: "Portable Gas Detector",
      price: 499.99,
      description:
        "The Portable Gas Detector is a cutting-edge device designed to continuously monitor the presence of harmful gases in the environment, providing real-time alerts to ensure safety in hazardous areas.",
      image:
        "https://i5.walmartimages.com/seo/Portable-Gas-Detector-0-100-LEL-0-5000PPM-Industrial-Fixed-Multi-Gas-Detector-CH4-O2-CO-H2S-Coal-Mines-Use-Gas-Analyzer-Accurate-Detection_974580c4-4fdd-4c8d-8cb3-017d0c44b764.59df45ec61dfad8468f8adc743955009.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      category: "Online Gas Detector",
      rating: 4.9,
      features: [
        "Real-time gas concentration monitoring",
        "Multiple gas sensors for diverse environments",
        "Remote alert notifications for hazardous gas levels",
        "Durable design for industrial and commercial use",
      ],
    },
    {
      id: 40,
      name: "Industrial Fan Wireness",
      price: 799.99,
      description:
        "The Industrial Fan Wireness is a powerful, energy-efficient solution designed to provide optimal air circulation in large industrial spaces, ensuring improved ventilation and a comfortable working environment.",
      image: fan1,
      category: "Industrial Fan Wireness",
      rating: 4.5,
      features: [
        "High-efficiency motor for long-lasting performance",
        "Robust and corrosion-resistant materials",
        "Adjustable fan speeds for customizable air circulation",
        "Ideal for large factories, warehouses, and industrial spaces",
      ],
    },
    {
      id: 41,
      name: "Tools",
      price: 299.99,
      description:
        "Non-Sparking Tools are specially designed for use in hazardous environments where sparks could ignite flammable materials. Made from non-ferrous metals, these tools provide maximum safety during maintenance and repair work.",
      image: "https://www.csunitec.com/sites/default/files/styles/teaser_550/public/images/product_category/striking-tools.jpg?itok=t_WtF9cK",
      category: "Electrical and Non-Sparking Products",
      rating: 4.8,
      features: [
        "Made from non-ferrous metals like brass and bronze",
        "Prevents accidental sparks in explosive environments",
        "Durable and corrosion-resistant design",
        "Compliant with industry safety standards for hazardous areas",
      ],
    },
    {
      id: 42,
      name: "Non Sparking Insulated Tools Manufacturers & Suppliers",
      price: 299.99,
      description:
        "Non-Sparking Tools are specially designed for use in hazardous environments where sparks could ignite flammable materials. Made from non-ferrous metals, these tools provide maximum safety during maintenance and repair work.",
      image: "https://deneerstools.com/wp-content/uploads/2020/10/non-sparking-insulated-tools-pro.png",
      category: "Electrical and Non-Sparking Products",
      rating: 4.8,
      features: [
        "Made from non-ferrous metals like brass and bronze",
        "Prevents accidental sparks in explosive environments",
        "Durable and corrosion-resistant design",
        "Compliant with industry safety standards for hazardous areas",
      ],
    },
    {
      id: 43,
      name: "Rubber Speed Bump",
      price: 149.99,
      description:
        "Rubber Speed Bumps are designed to reduce vehicle speeds and enhance safety in residential, commercial, and industrial areas. Made from high-quality rubber, these speed bumps are durable, weather-resistant, and easy to install.",
      image: rubberbump,
      category: "Traffic Safety Products",
      rating: 4.7,
      features: [
        "Constructed from premium-grade rubber for durability",
        "Highly visible reflective strips for enhanced nighttime visibility",
        "Resistant to UV, moisture, oil, and chemicals",
        "Easy to install and maintain with pre-drilled mounting holes",
      ],
    },
    {
      id: 44,
      name: "Convex Mirror",
      price: 89.99,
      description:
        "Convex Mirrors are designed to provide a wide-angle view, improving safety and visibility in parking lots, warehouses, roads, and blind spots. Made with durable materials, these mirrors are weather-resistant and easy to mount.",
      image: mirror,
      category: "Traffic Safety Products",
      rating: 4.6,
      features: [
        "Wide-angle view for enhanced visibility and safety",
        "Impact-resistant and weatherproof construction",
        "Ideal for both indoor and outdoor use",
        "Easy mounting with adjustable brackets included",
      ],
    },
    {
      id: 45,
      name: "Cable Protector",
      price: 119.99,
      description:
        "Cable Protectors are designed to safeguard cables and wires from damage while ensuring pedestrian and vehicular safety. Made from high-quality, durable materials, these protectors are ideal for indoor and outdoor use.",
      image: cable,
      category: "Traffic Safety Products",
      rating: 4.7,
      features: [
        "Constructed from heavy-duty, impact-resistant materials",
        "Non-slip surface for added safety",
        "Easy interlocking design for quick installation and expansion",
        "Ideal for protecting cables and hoses in high-traffic areas",
      ],
    },
    {
      id: 46,
      name: "Wall Protector",
      price: 74.99,
      description:
        "Wall Protectors are designed to shield walls from damage caused by impacts, scrapes, and abrasions in high-traffic areas. Made from durable materials, they are ideal for warehouses, parking garages, and commercial spaces.",
      image: wall,
      category: "Traffic Safety Products",
      rating: 4.8,
      features: [
        "Made from high-impact, durable materials for long-lasting protection",
        "Easy to install and maintain",
        "Resistant to scratches, dents, and chemicals",
        "Suitable for indoor and outdoor applications",
      ],
    },
    {
      id: 47,
      name: "Flap Delineator",
      price: 54.99,
      description:
        "Flap Delineators are designed for traffic management and road safety, providing high visibility to guide vehicles and pedestrians. Made from flexible and durable materials, they are ideal for highways, parking lots, and construction zones.",
      image: flapdel,
      category: "Traffic Safety Products",
      rating: 4.6,
      features: [
        "Highly flexible design to withstand vehicle impacts",
        "UV-resistant and weatherproof materials for outdoor use",
        "High-visibility reflective strips for enhanced night-time visibility",
        "Easy installation with pre-drilled mounting holes",
      ],
    },
    {
      id: 48,
      name: "Reflective Safety Vests",
      price: 19.99,
      description:
        "Reflective Safety Vests are designed to enhance visibility and safety in low-light conditions. Ideal for construction workers, traffic controllers, and emergency responders, these vests ensure maximum visibility with reflective strips.",
      image: vest,
      category: "Traffic Safety Products",
      rating: 4.9,
      features: [
        "High-visibility fluorescent fabric with reflective strips",
        "Lightweight, breathable, and comfortable design",
        "Adjustable fit with Velcro or zipper closures",
        "Complies with ANSI/ISEA safety standards for high visibility",
      ],
    },
    {
      id: 49,
      name: "Rectangular Dock Bumpers",
      price: 129.99,
      description:
        "Rectangular Dock Bumpers are designed to protect docks, trucks, and cargo from damage during loading and unloading operations. Made from heavy-duty rubber, these bumpers provide excellent impact resistance and durability.",
      image: bumpers,
      category: "Traffic Safety Products",
      rating: 4.8,
      features: [
        "Constructed from high-quality, impact-resistant rubber",
        "Designed to absorb shocks and prevent damage to docks and vehicles",
        "Weatherproof and UV-resistant for long-lasting performance",
        "Easy installation with pre-drilled mounting holes",
      ],
    },
    {
      id: 50,
      name: "D-Type Dock Bumpers",
      price: 139.99,
      description:
        "D-Type Dock Bumpers are designed to protect loading docks, trucks, and cargo from damage during loading and unloading operations. Their unique 'D' shape provides superior impact resistance and durability.",
      image: dtype,
      category: "Traffic Safety Products",
      rating: 4.7,
      features: [
        "Made from high-quality, impact-resistant rubber for maximum protection",
        "Durable and weather-resistant design for indoor and outdoor use",
        "Ideal for absorbing shocks and reducing damage to docks and vehicles",
        "Easy installation with pre-drilled mounting holes",
      ],
    }
  ]);
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [filter, setFilter] = useState("MAT");
  const categories = [
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
    "SS Eye Wash Shower",
    "Online Gas Detector",
    "Industrial Fan Wireness",
    "Traffic Safety Products"
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
      const newScrollPosition =
        direction === "left"
          ? container.scrollLeft - scrollAmount
          : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const filteredProducts =
    filter === "All"
      ? productss
      : productss.filter((product) => product.category === filter);

  return (
    <div className="product-catalog my-5">
      <div className="catalog-header">
        <h1 className="mb-4">Product Catalog</h1>
        <div className="filter-wrapper">
          <div className="filter-container">
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${
                    filter === category ? "active" : ""
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="product-grids">
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
              {/* <div className="product-price-section">
                <span className="product-price">
                  ${product.price.toFixed(2)}
                </span>
                <button className="buy-now-btn">Buy Now</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
