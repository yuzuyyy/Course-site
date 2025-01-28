import { 
    card1,card2, card3, 
    company1, company2, company3, company4, company5, company6, 
    feature1, feature2, feature3, 
    vector1, vector2, vector3, 
    reviewer1, reviewer2, reviewer3, 
    benefit1, benefit2,benefit3,benefit4,benefit5,benefit6 
 } from "../assets"



export const navLinks = ["course", "reviews", "contact"]

export const cards = [
    {
        image: card1,
        text: "hours of content",
        number: "100+",
        rotateRight: true
    },
    {
        image: card2,
        text: "courses",
        number: "15+"
    },
    {
        image: card3,
        text: "students",
        number: "20k+",
        rotateLeft: true
    },
]

export const companies = [
    company1, company2, company3, company4, company5, company6
]

export const features = [
    {
        image: feature1,
        title: "JavaScript Full Mastery 2024 Edition Updated",
        desc: "Master JavaScript with our updated course. Learn core concepts, ES6+, and advanced techniques to create dynamic, responsive web applications.",
        price: "100",
        level: "beginner"
    },
    {
        image: feature2, // Ganti dengan gambar yang sesuai
        title: "React Mastery for Front-End Developers",
        desc: "Dive deep into React fundamentals, hooks, and advanced concepts to build high-performance and scalable front-end applications.",
        price: "120",
        level: "intermediate"
    },
    {
        image: feature3, // Ganti dengan gambar yang sesuai
        title: "Full-Stack Web Development Bootcamp",
        desc: "Learn full-stack development with hands-on projects. Master front-end, back-end, and database integration to build complete web applications.",
        price: "150",
        level: "advanced"
    }
];

export const vectors = [vector1, vector2, vector3]

export const reviews = [
    {
        image: reviewer1,
        name: "Brendan Wilson",
        role: "Aspiring Web Designer",
        comment: "The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.",
        rotateRight : true
    },
    {
        image: reviewer2,
        name: "Sophia Martinez",
        role: "Graphic Designer",
        comment: "I loved the practical approach in the lessons. The exercises and real-world examples helped me advance my career significantly.",
    },
    {
        image: reviewer3,
        name: "Emily Johnson",
        role: "UX/UI Enthusiast",
        comment: "The platform is amazing! It offers comprehensive and interactive content that makes learning enjoyable and effective.",
        rotateLeft: true
    }
]

export const benefits = [
    {
        icon: benefit1,
        title: "Built by Professionals",
        desc: "Get the best Experience knowing that our Courses are built by Professionals.", 
    },
    {
        icon: benefit2,
        title: "Completion Certificate",
        desc: "Receive a Completion Award from our Team to enhance your motivation", 
    },
    {
        icon: benefit3,
        title: "Instant Chat Help",
        desc: "Have questions? Reach out for a quick chat—here for you 24/7.", 
    },
    {
        icon: benefit4,
        title: "Lifetime Membership",
        desc: "With Just One Payment, you'll get Permanent Access to the Course.", 
    },
    {
        icon: benefit5,
        title: "Access to Community",
        desc: "Join Our Private Community to Connect with Like-Minded Individuals and Grow Together.", 
    },
    {
        icon: benefit6,
        title: "Download for Offline Use",
        desc: "Our courses can be downloaded, so you can watch them anytime, anywhere.", 
    },

]


export const plans = [
    {
      name: "Starter plan",
      price: 50.9,
      benefits: [
        { text: "Limited Access to the platform", available: true },
        { text: "10 Free Courses", available: true },
        { text: "Limited Benefits", available: true },
        { text: "Agent", available: false },
        { text: "Live Chat Support", available: false },
      ],
    },
    {
      name: "Pro plan",
      price: 70.9,
      benefits: [
        { text: "Full Access to the platform", available: true },
        { text: "20 Free Courses", available: true },
        { text: "Unlimited Benefits", available: true },
        { text: "Agent", available: true },
        { text: "Live Chat Support", available: false },
      ],
      isPopular: true,
    },
    {
      name: "Business plan",
      price: 99.9,
      benefits: [
        { text: "Full Access to the platform", available: true },
        { text: "30 Free Courses", available: true },
        { text: "Unlimited Benefits", available: true },
        { text: "Agent", available: true },
        { text: "Live Chat Support", available: true },
      ],
    },
  ];
  