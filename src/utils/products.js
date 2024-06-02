import productImg01 from "../Images/double-sofa-01.png";
import productImg02 from "../Images/double-sofa-02.png";
import productImg03 from "../Images/double-sofa-03.png";

import productImg04 from "../Images/single-sofa-01.jpg";
import productImg05 from "../Images/single-sofa-02.jpg";
import productImg06 from "../Images/single-sofa-03.jpg";
import productImg007 from "../Images/single-sofa-04.png";

import productImg07 from "../Images/arm-chair-01.jpg";
import productImg08 from "../Images/arm-chair-02.jpg";
import productImg09 from "../Images/arm-chair-03.jpg";
import productImg10 from "../Images/arm-chair-01.jpg";

import phone01 from "../Images/phone-01.jpg";
import phone02 from "../Images/phone-02.jpg";
import phone03 from "../Images/phone-03.png";
import phone04 from "../Images/phone-04.jpg";
import phone05 from "../Images/phone-05.jpg";
import phone06 from "../Images/phone-06.jpg";
import phone08 from "../Images/phone-08.png";

import watch01 from "../Images/watch-01.jpg";
import watch02 from "../Images/watch-02.jpg";
import watch03 from "../Images/watch-03.jpg";
import watch04 from "../Images/watch-04.jpg";

import wireless01 from "../Images/wireless-01.png";
import wireless02 from "../Images/wireless-02.png";
import wireless03 from "../Images/wireless-03.png";
import wireless04 from "../Images/wireless-04.png";

import sofaSlide from "../Images/hero-img.png";
import watchSlide from "../Images/watch-07.png";

export const SliderData = [
  {
      id: 1,
      title: "50% Off For Your First Shopping",
      desc: "Slash your costs in half! Take 50% off your first shopping trip—explore and save today.",
      cover: sofaSlide,
  },
  {
      id: 2,
      title: "50% Off For Your First Shopping",
      desc: "Save big with 50% off your first purchase! Explore great deals and shop your favorites now.",
      cover: phone08,
  },
  {
      id: 3,
      title: "50% Off For Your First Shopping",
      desc: "Get 50% off on your first order! Incredible savings on a wide range of products. Shop now!",
      cover: wireless01,
  },
  {
      id: 4,
      title: "50% Off For Your First Shopping",
      desc: "Enjoy 50% off your first purchase! Shop now and save big on your initial order.",
      cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Enjoy free shipping on all orders.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Secure, reliable payment methods for safety.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Payment ",
    subtitle:" Secure, fast, and reliable payment process.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: " Back Guarantee",
    subtitle: "Money-back guarantee on all purchases.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Stone and Beam Westview",
    imgUrl: productImg01,
    category: "sofa",
    price: 193,
    discount: 30,
    shortDesc: "Luxurious and durable sofa with deep, plush seating—perfect for modern living rooms.",
    description: "The Stone and Beam Westview Sofa is crafted with comfort and durability in mind. It features deep, plush seating enveloped in a high-quality fabric, perfect for relaxing. The sturdy frame and classic design make it an ideal choice for any modern living room.",
    reviews: [
      {
        rating: 4.7,
        text: "Very comfortable and looks great in my living room. The fabric is top-notch and easy to clean.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Rivet Bigelow Modern",
    imgUrl: productImg02,
    category: "sofa",
    price: 253,
    discount: 20,
    shortDesc: "Sleek and stylish sofa with a minimalist design and supportive backrest.",
    description: "Rivet Bigelow Modern Sofa combines sleek design with functionality. It features a minimalist aesthetic with clean lines and a sturdy build, ensuring it fits perfectly in contemporary settings. The supportive backrest and durable fabric provide comfort and longevity.",
    reviews: [
      {
        rating: 4.8,
        text: "I love the minimalist design and it's incredibly comfortable. Fits perfectly in my studio apartment.",
      },
      {
        rating: 4.8,
        text: "Stylish and practical, exactly what I needed for my living space.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "08",
    productName: "Baltsar Chair",
    imgUrl: productImg08,
    category: "chair",
    price: 89,
    discount: 15,
    shortDesc: "Elegant chair with a modern twist, featuring a comfortable cushioned seat.",
    description: "The Baltsar Chair stands out with its modern design and ergonomic features. The comfortable cushioned seat is supported by a durable frame that offers both style and functionality. Its elegant look makes it suitable for various interiors from offices to living rooms.",
    reviews: [
      {
        rating: 4.6,
        text: "Very stylish and more comfortable than I expected. Great value for money!",
      },
      {
        rating: 4.9,
        text: "Perfect chair for my reading nook, both supportive and good looking!",
      },
    ],
    avgRating: 4.7,
  },
  {
    "id": "09",
    "productName": "Helmar Chair",
    "imgUrl": productImg09,
    "category": "chair",
    "price": 112,
    "discount": 35,
    "shortDesc": "Modern, elegant chair with a sculptural silhouette perfect for contemporary interiors.",
    "description": "The Helmar Chair stands out with its bold, contemporary design. Featuring a high back and a comfortable seat cushion, this chair offers both style and comfort. Its solid construction and stylish legs ensure stability and add a touch of modern elegance to any room.",
    "reviews": [
      {
        "rating": 4.6,
        "text": "Absolutely stunning chair that matches perfectly with my office decor. Surprisingly comfortable too!"
      },
      {
        "rating": 4.9,
        "text": "This chair is a modern marvel. Excellent build quality and a design that catches everyone's eye."
      }
    ],
    "avgRating": 4.7
},
{
  "id": "12",
  "productName": "Realme 8",
  "imgUrl": phone03,
  "category": "mobile",
  "price": 599,
  "discount": 10,
  "shortDesc": "Sleek smartphone with robust performance and a vivid display.",
  "description": "Realme 8 offers a seamless mobile experience with its powerful processor and a vibrant Super AMOLED display. Equipped with a 64MP quad-camera setup, it captures stunning photos and videos. Its sleek design and lightweight build make it comfortable to hold and use throughout the day.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "The display is absolutely gorgeous and the camera performance exceeded my expectations. Great value for money!"
    },
    {
      "rating": 4.9,
      "text": "Battery lasts all day and charges super fast. The phone handles games and multitasking smoothly."
    }
  ],
  "avgRating": 4.8
},
{
  "id": "13",
  "productName": "One Plus Nord",
  "imgUrl": phone04,
  "category": "mobile",
  "price": 799,
  "discount": 5,
  "shortDesc": "High-performance smartphone with exceptional speed and a clean design.",
  "description": "One Plus Nord is known for its blazing fast performance and smooth user experience, thanks to its Snapdragon chipset and up to 12GB RAM. It features a fluid AMOLED display that makes scrolling a pleasure, and its camera system offers versatility for all your photography needs.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "Love the smoothness of the UI and the speed of this phone. It feels premium in hand and looks very sleek."
    },
    {
      "rating": 4.9,
      "text": "Fantastic value for a high-performance phone. The cameras are great in low light conditions too."
    }
  ],
  "avgRating": 4.8
},

]

export const products = [
  {
    "id": "01",
    "productName": "Stone and Beam Westview",
    "imgUrl": productImg01,
    "category": "sofa",
    "price": 193,
    "shortDesc": "Classic and cozy sofa with durable upholstery and timeless appeal.",
    "description": "This Stone and Beam Westview sofa brings both style and comfort to your living space. Crafted with durable upholstery and a solid wood frame, it offers a perfect blend of support and softness. With its timeless design, it easily integrates into various decor styles, from modern to traditional.",
    "reviews": [
      {
        "rating": 4.7,
        "text": "Very comfortable and looks great in my living room. The fabric is durable and easy to maintain."
      }
    ],
    "avgRating": 4.5
},
{
  "id": "02",
  "productName": "Rivet Bigelow Modern",
  "imgUrl": productImg02,
  "category": "sofa",
  "price": 253,
  "shortDesc": "Sleek modern sofa with minimalist design and exceptional comfort.",
  "description": "The Rivet Bigelow Modern Sofa features a minimalist design with clean lines and a contemporary look. Its plush seating and sturdy construction make it a must-have for any modern living space. The high-quality fabric cover is both stylish and durable, suitable for everyday use.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "Absolutely love this sofa! It's not only beautiful but also very comfortable. Fits perfectly in my apartment."
    },
    {
      "rating": 4.8,
      "text": "Impressive build quality and chic design. Received many compliments from guests."
    }
  ],
  "avgRating": 4.7
},

{
  "id": "03",
  "productName": "Amazon Brand Modern Sofa",
  "imgUrl": productImg03,
  "category": "sofa",
  "price": 173,
  "shortDesc": "Contemporary sofa with plush seating and a stylish, streamlined design.",
  "description": "This Amazon Brand Modern Sofa adds a touch of elegance to any room with its stylish, streamlined design and soft, inviting cushions. Perfect for both small city apartments and spacious homes, it provides unmatched comfort and durability.",
  "reviews": [
    {
      "rating": 4.6,
      "text": "Great sofa for the price, very comfy and looks exactly like the pictures online."
    },
    {
      "rating": 4.9,
      "text": "Excellent sofa that has held up well over time. Very plush and well-made."
    }
  ],
  "avgRating": 4.7
},
{
  "id": "04",
  "productName": "Fllufy Sheep Sofa",
  "imgUrl": productImg04,
  "category": "sofa",
  "price": 163,
  "shortDesc": "Ultra-soft and cozy sofa, perfect for snuggling and relaxing.",
  "description": "The Fllufy Sheep Sofa is the ultimate comfort zone for your living room. Featuring ultra-soft fabric and deep, cushiony seats, it's the perfect spot to relax after a long day. Its charming design adds a touch of whimsy to any decor.",
  "reviews": [
    {
      "rating": 4.6,
      "text": "So cozy and comfortable! My family loves this sofa, and it's everyone's favorite spot in the house."
    },
    {
      "rating": 4.9,
      "text": "This sofa is like sitting on a cloud. Super soft and incredibly comfy."
    }
  ],
  "avgRating": 4.7
},

{
  "id": "05",
  "productName": "Faux Velvet Sofa",
  "imgUrl": productImg05,
  "category": "sofa",
  "price": 163,
  "shortDesc": "Elegant faux velvet sofa that combines sophistication with comfort.",
  "description": "Wrap yourself in the luxurious touch of our Faux Velvet Sofa. Its rich texture and deep cushions provide both comfort and style. Ideal for a refined living room setting, this sofa offers durability without sacrificing aesthetic appeal.",
  "reviews": [
    {
      "rating": 4.6,
      "text": "Gorgeous sofa with a luxurious feel. Very plush and adds a sophisticated look to my home."
    },
    {
      "rating": 4.9,
      "text": "Stunning and comfortable! The velvet feels soft and the sofa is very sturdy."
    }
  ],
  "avgRating": 4.7
},

{
  "id": "06",
  "productName": "Fllufy Sheep Sofa",
  "imgUrl": productImg06,
  "category": "sofa",
  "price": 163,
  "shortDesc": "Ultra-comfortable sofa with plush sheepskin upholstery and a chic, cozy design.",
  "description": "The Fllufy Sheep Sofa is the ultimate in home comfort, featuring luxurious sheepskin upholstery that invites you to sink in and relax. This sofa combines a soft, inviting texture with durable construction, making it perfect for everyday family life. Its unique design adds a touch of whimsy and sophistication to any living space, ensuring it's not only a comfortable seating option but also a conversation starter.",
  "reviews": [
    {
      "rating": 4.6,
      "text": "Absolutely love this sofa! It’s like sitting on a cloud. So soft and comfortable, and it looks amazing in our living room."
    },
    {
      "rating": 4.9,
      "text": "This is the coziest piece of furniture we've ever owned. The sheepskin feels luxurious, and it's surprisingly easy to care for. Highly recommend for anyone looking for comfort combined with style."
    }
  ],
  "avgRating": 4.7
},
  {
    "id": "07",
    "productName": "Sakarias Armchair",
    "imgUrl": productImg07,
    "category": "chair",
    "price": 99,
    "shortDesc": "Classic armchair with sophisticated upholstery and elegant wooden legs.",
    "description": "The Sakarias Armchair is a perfect blend of traditional charm and modern comfort. Upholstered in high-quality fabric with an attention to detail, this chair offers a supportive back and spacious seating. The elegant wooden legs ensure stability and add to the aesthetic value, making it a great addition to any room.",
    "reviews": [
      {
        "rating": 4.6,
        "text": "This chair combines comfort with elegance. It’s been a wonderful addition to my reading corner."
      },
      {
        "rating": 4.9,
        "text": "High-quality fabric and very sturdy. I love the classic look, and it’s also very comfortable!"
      }
    ],
    "avgRating": 4.7
},

{
  "id": "27",
  "productName": "Modern Arm Sofa",
  "imgUrl": productImg007,
  "category": "sofa",
  "price": 173,
  "shortDesc": "Elegant modern sofa with comfortable armrests and a stylish, minimalistic design.",
  "description": "The Modern Arm Sofa combines contemporary design with everyday comfort. Featuring streamlined armrests for a sophisticated look and plush cushioning for optimal comfort, this sofa is crafted to enhance any modern living space. Upholstered in high-quality fabric and supported by a durable frame, it's designed to offer both style and functionality for years to come.",
  "reviews": [
    {
      "rating": 4.6,
      "text": "This sofa has transformed our living room with its elegant design and superb comfort. It's the perfect fit for our contemporary space and the build quality is exceptional."
    },
    {
      "rating": 4.9,
      "text": "I'm thrilled with this purchase! The sofa is incredibly comfortable and the minimalistic design goes well with any decor. It's also very sturdy and was easy to set up."
    }
  ],
  "avgRating": 4.7
},
  {
    "id": "08",
    "productName": "Baltsar Chair",
    "imgUrl": productImg08,
    "category": "chair",
    "price": 89,
    "shortDesc": "Modern minimalist chair with a sleek design and comfortable seating.",
    "description": "The Baltsar Chair offers a minimalist design that doesn’t compromise on comfort. Its sleek lines and ergonomic shape make it an ideal choice for contemporary office settings or as a stylish side chair in living rooms. The robust frame provides excellent support, and the subtle fabric enhances any décor.",
    "reviews": [
      {
        "rating": 4.6,
        "text": "Perfect for my office! It’s lightweight yet sturdy and really easy to assemble."
      },
      {
        "rating": 4.9,
        "text": "Aesthetically pleasing and functionally superb. Comfortable even after long hours of sitting."
      }
    ],
    "avgRating": 4.7
},

{
  "id": "09",
  "productName": "Helmar Chair",
  "imgUrl": productImg09,
  "category": "chair",
  "price": 112,
  "shortDesc": "Stylish and comfortable chair with a versatile modern design and superior build quality.",
  "description": "The Helmar Chair combines contemporary aesthetics with unparalleled comfort. Crafted with a sleek, minimalist design, this chair features premium fabric upholstery and a robust frame that supports a comfortable sitting experience. Perfect for both office and home settings, the Helmar Chair offers ergonomic support with its gently curved backrest and generously padded seat, making it ideal for extended use.",
  "reviews": [
    {
      "rating": 4.6,
      "text": "This chair has been a fantastic addition to my home office. It's not only stylish but also incredibly comfortable for long hours of work. Highly recommend for anyone looking for modern yet comfy seating."
    },
    {
      "rating": 4.9,
      "text": "Absolutely love the Helmar Chair! It fits perfectly in my living room, adding a touch of elegance with its modern design. The seating is soft and supportive, making it my favorite spot to relax."
    }
  ],
  "avgRating": 4.7
},

  {
    "id": "10",
    "productName": "Apple iPhone 12 Pro",
    "imgUrl": phone01,
    "category": "mobile",
    "price": 799,
    "shortDesc": "Advanced smartphone with A14 Bionic chip, enhanced cameras, and sleek design.",
    "description": "The Apple iPhone 12 Pro features the powerful A14 Bionic chip, providing exceptional processing speed and efficiency. Its advanced triple-camera system allows for stunning photography, while the sleek design and durable Ceramic Shield make it both stylish and robust. Perfect for anyone seeking cutting-edge technology in a smartphone.",
    "reviews": [
      {
        "rating": 4.8,
        "text": "Exceptional performance and camera quality. The new design is also a major plus."
      },
      {
        "rating": 4.9,
        "text": "Best iPhone I've ever used. The photo capabilities are incredible!"
      }
    ],
    "avgRating": 4.8
},
{
  "id": "25",
  "productName": "Sakarias Armchair",
  "imgUrl": productImg10,
  "category": "chair",
  "price": 99,
  "shortDesc": "Stylish armchair with comfortable padding and modern aesthetic.",
  "description": "The Sakarias Armchair combines comfort with contemporary design. Its well-padded seat and supportive backrest are ideal for long seating periods, whether you're working from home or relaxing. The modern design complements any decor style, making it a versatile addition to any space.",
  "reviews": [
    {
      "rating": 4.6,
      "text": "Very stylish and more comfortable than I anticipated. Great for my home office."
    },
    {
      "rating": 4.9,
      "text": "Absolutely beautiful and functional. The perfect size for smaller spaces."
    }
  ],
  "avgRating": 4.7
},
{
  "id": "11",
  "productName": "Apple iPhone 12 Max",
  "imgUrl": phone02,
  "category": "mobile",
  "price": 799,
  "shortDesc": "Dynamic smartphone with advanced camera and cutting-edge technology.",
  "description": "The iPhone 12 Max features a robust A14 Bionic chip for top-tier performance and a Pro camera system that captures stunning photos in any light. Its Ceramic Shield delivers four times better drop performance, and 5G speed ensures faster downloads and high-quality streaming.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "The camera quality is outstanding, and the phone feels robust and well-made."
    },
    {
      "rating": 4.9,
      "text": "Absolutely thrilled with the performance. The display is gorgeous and makes every task enjoyable."
    }
  ],
  "avgRating": 4.8
},

  {
    "id": "12",
    "productName": "Realme 8",
    "imgUrl": phone03,
    "category": "mobile",
    "price": 599,
    "shortDesc": "High-performance smartphone with Super AMOLED display and 64MP quad camera.",
    "description": "Realme 8 is designed for tech enthusiasts who value performance and camera quality. It features a vivid Super AMOLED screen for crystal clear viewing and a 64MP quad camera for professional-level photography. With an efficient processor and long-lasting battery, it's ready for any task, from gaming to streaming.",
    "reviews": [
      {
        "rating": 4.8,
        "text": "Amazing display quality and the camera takes incredibly detailed photos. Great value for the price."
      },
      {
        "rating": 4.9,
        "text": "Super impressed with the battery life and overall performance. It handles all apps smoothly."
      }
    ],
    "avgRating": 4.8
},

{
  "id": "13",
  "productName": "One Plus Nord",
  "imgUrl": phone04,
  "category": "mobile",
  "price": 799,
  "shortDesc": "Sleek smartphone with 90Hz refresh rate and Warp Charge technology.",
  "description": "One Plus Nord brings a seamless user experience with its 90Hz display refresh rate, ensuring smooth navigation and a responsive touch interface. The Warp Charge technology means you spend less time charging and more time doing. Its multi-camera system delivers versatility in photography, from wide-angle shots to macro.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "Love the smoothness of the 90Hz screen and fast charging is incredibly convenient."
    },
    {
      "rating": 4.9,
      "text": "The camera system is fantastic for this price range. Highly recommend for photography enthusiasts on a budget."
    }
  ],
  "avgRating": 4.8
},
  {
    "id": "14",
    "productName": "Apple iPhone 13 Pro",
    "imgUrl": phone05,
    "category": "mobile",
    "price": 899,
    "shortDesc": "Flagship iPhone with ProMotion display technology and improved battery life.",
    "description": "The Apple iPhone 13 Pro introduces ProMotion technology for a smoother display experience and introduces a more advanced camera system suitable for professional-level photography. Enhanced battery life and the new A15 chip make it a powerhouse for any user.",
    "reviews": [
      {
        "rating": 4.8,
        "text": "The display is stunning, and the battery life improvement is noticeable. The camera is simply the best."
      },
      {
        "rating": 4.9,
        "text": "Amazing upgrade. The video and photo quality is outstanding, and the phone feels incredibly fast."
      }
    ],
    "avgRating": 4.8
},

{
  "id": "15",
  "productName": "Samsung Galaxy S22",
  "imgUrl": phone06,
  "category": "mobile",
  "price": 699,
  "shortDesc": "Innovative smartphone with dynamic AMOLED display and pro-grade camera.",
  "description": "The Samsung Galaxy S22 features a dynamic AMOLED display that brings visuals to life with vivid colors and deep contrasts. Equipped with a pro-grade camera system, it allows you to capture stunning photographs and videos. Its sleek design and enhanced performance features make it a top choice for tech enthusiasts.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "The screen is just incredible, and the camera takes some of the best photos I’ve seen on a phone."
    },
    {
      "rating": 4.9,
      "text": "A significant upgrade in terms of both performance and design. Highly recommended for any smartphone user."
    }
  ],
  "avgRating": 4.8
},

{
  "id": "16",
  "productName": "Rolex Watch",
  "imgUrl": watch01,
  "category": "watch",
  "price": 299,
  "shortDesc": "Elegant and precise luxury watch crafted from high-quality materials.",
  "description": "This Rolex Watch represents the pinnacle of craftsmanship and timeless design. Featuring a meticulously crafted body and a reliable mechanical movement, this watch is a symbol of luxury and precision. Ideal for formal occasions or daily wear, it offers both functionality and style.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "An exquisite timepiece that embodies elegance and sophistication. Flawless performance and stunning design."
    },
    {
      "rating": 4.9,
      "text": "Prestigious and precise, this Rolex has become my daily companion and a conversation starter at any event."
    }
  ],
  "avgRating": 4.8
},

{
  "id": "17",
  "productName": "Timex Easy Reader Watch",
  "imgUrl": watch02,
  "category": "watch",
  "price": 299,
  "shortDesc": "Classic design with easy-to-read dial, perfect for everyday use.",
  "description": "The Timex Easy Reader Watch combines practical functionality with a straightforward aesthetic. It features a clear, readable face, a durable strap, and a reliable quartz movement, making it a perfect choice for those who value simplicity and efficiency in their timepiece.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "Simple, sturdy, and reliable. The large numbers make it very easy to read time at a glance."
    },
    {
      "rating": 4.9,
      "text": "Ideal watch for everyday wear. It's comfortable, accurate, and the battery lasts forever."
    }
  ],
  "avgRating": 4.8
},

{
  "id": "18",
  "productName": "Rolex Watch",
  "imgUrl": watch03,
  "category": "watch",
  "price": 299,
  "shortDesc": "Exquisite craftsmanship meets timeless elegance in this classic Rolex watch.",
  "description": "This Rolex Watch epitomizes luxury and precision in watchmaking. Known for its impeccable design and durability, the watch features a meticulously crafted case and a sophisticated mechanical movement that ensures accuracy and longevity. The elegant face and quality materials used in this watch make it a symbol of status and fine taste, suitable for both formal and casual occasions.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "The watch is stunning! It's classy and sophisticated, perfect for business meetings or a night out. Definitely worth the investment for its timeless appeal."
    },
    {
      "rating": 4.9,
      "text": "Received this Rolex as a gift and it’s absolutely perfect. The craftsmanship is top-notch, and it keeps time perfectly. It's a piece that I'll cherish forever."
    }
  ],
  "avgRating": 4.8
},

  {
    "id": "19",
    "productName": "Apple Watch",
    "imgUrl": watch04,
    "category": "watch",
    "price": 399,
    "shortDesc": "Smartwatch with comprehensive health tracking and seamless iOS integration.",
    "description": "The Apple Watch is more than just a watch; it's a fitness companion with advanced health monitoring features. With the ability to track your heart rate, measure workouts, and monitor sleep, paired with Apple's seamless iOS integration, this watch is a must-have for any tech-savvy individual looking to improve their health and stay connected.",
    "reviews": [
      {
        "rating": 4.8,
        "text": "Incredible tool for monitoring my health and staying connected. The features are very intuitive."
      },
      {
        "rating": 4.9,
        "text": "Perfect for receiving notifications and tracking fitness goals. It's like having a personal assistant on your wrist."
      }
    ],
    "avgRating": 4.8
},

  {
    "id": "20",
    "productName": "Beat Studio Wireless",
    "imgUrl": wireless01,
    "category": "wireless",
    "price": 199,
    "shortDesc": "High-end studio-quality wireless headphones with active noise cancelling.",
    "description": "Beat Studio Wireless headphones are engineered for sound professionals and audiophiles alike. They offer exceptional sound quality with deep bass and crisp highs. Active noise cancelling ensures you can immerse yourself in music without interruptions, making them ideal for studio use and everyday listening.",
    "reviews": [
      {
        "rating": 4.8,
        "text": "The sound isolation is fantastic, and they’re surprisingly comfortable for long periods."
      },
      {
        "rating": 4.9,
        "text": "Worth every penny. The audio quality is unmatched, and they’re robust and well-built."
      }
    ],
    "avgRating": 4.8
},

{
  "id": "21",
  "productName": "Beat EP Headphones",
  "imgUrl": wireless03,
  "category": "wireless",
  "price": 199,
  "shortDesc": "Robust headphones with fine-tuned acoustics and optimal comfort.",
  "description": "Beat EP Headphones bring life to music with finely tuned acoustics that maximize clarity, breadth, and balance. The comfortable cushioned ear cups are adjustable for everyday use, and their durable frame is reinforced with stainless steel, offering personal and powerful sound.",
  "reviews": [
    {
      "rating": 4.8,
      "text": "The acoustics are perfect for both music and podcasts. They fit snugly and stay comfortable."
    },
    {
      "rating": 4.9,
      "text": "High-quality construction with excellent sound. They have become my go-to for daily use."
    }
  ],
  "avgRating": 4.8
},
  {
    "id": "22",
    "productName": "Black Headphones",
    "imgUrl": wireless02,
    "category": "wireless",
    "price": 169,
    "shortDesc": "Premium headphones with dynamic sound, noise cancellation, and ergonomic design.",
    "description": "Black Headphones redefine your audio experience with their dynamic sound and active noise cancellation technology. Designed for audio enthusiasts, these headphones feature an ergonomic fit and can be used wirelessly or with a wire. They are perfect for commuting, traveling, or enjoying music at home.",
    "reviews": [
      {
        "rating": 4.8,
        "text": "Noise cancellation is top-notch, and sound quality is rich and balanced. Highly recommend."
      },
      {
        "rating": 4.9,
        "text": "Durable, comfortable, and the audio quality is absolutely stellar. Great for travel."
      }
    ],
    "avgRating": 4.8
},
  {
    "id": "23",
    "productName": "Bluetooth Headphones",
    "imgUrl": wireless04,
    "category": "wireless",
    "price": 139,
    "shortDesc": "Wireless Bluetooth headphones with immersive sound and long-lasting battery.",
    "description": "Experience the freedom of wireless audio with these Bluetooth headphones. Featuring crystal-clear sound quality and a comfortable, adjustable design, these headphones are perfect for long listening sessions. With advanced Bluetooth connectivity, they provide seamless audio streaming and a robust battery life.",
    "reviews": [
      {
        "rating": 4.8,
        "text": "Fantastic sound quality and the battery lasts forever. Very comfortable even after hours of use."
      },
      {
        "rating": 4.9,
        "text": "These are the best wireless headphones I’ve owned. The range and sound clarity are impressive."
      }
    ],
    "avgRating": 4.8
},

];
