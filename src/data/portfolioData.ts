import { Project, Skill, BlogPost, RoadmapItem, SEOConfig, ChecklistItem } from '../types';
import mayankHeroImg from '../assets/images/mayankcoding.jpg';
import aboutMayankImg from '../assets/images/about_mayank_coding_1786286852987.jpg';

export const HERO_IMAGE = mayankHeroImg;
export const ABOUT_IMAGE = aboutMayankImg;

export const SEO_DATA: SEOConfig = {
  metaTitle: "Mayank Kumar - Best Flutter Developer in Jaipur | App Developer",
  metaDescription: "Hire expert Flutter developer for Android & iOS apps. Fast, affordable, professional app development in Jaipur.",
  keywords: [
    "flutter developer jaipur",
    "app developer jaipur",
    "hire flutter developer",
    "mayank kumar flutter",
    "freelance app developer rajasthan",
    "firebase developer jaipur",
    "cross platform mobile developer"
  ],
  domain: "mayankkumar.dev",
  secondaryDomain: "mayankflutterdev.com",
  hosting: "Hostinger (Premium - Rs. 2799/year) + Firebase Hosting",
  location: "Sanganer, Jaipur, Rajasthan, India"
};

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  { id: '1', task: 'Buy Domain (mayankkumar.dev / mayankflutterdev.com)', completed: true, category: 'Domain' },
  { id: '2', task: 'Purchase Hostinger Premium Hosting & Connect Firebase', completed: true, category: 'Deployment' },
  { id: '3', task: 'Add Master Sheet Content & Bio Info', completed: true, category: 'Content' },
  { id: '4', task: 'Add 3 High-Quality Studio & Developer Photos', completed: true, category: 'Content' },
  { id: '5', task: 'Attach GitHub Links & Live Demo Mockups for Projects', completed: true, category: 'Content' },
  { id: '6', task: 'Test Mobile Responsiveness & Touch Controls', completed: true, category: 'Testing' },
  { id: '7', task: 'Verify WhatsApp Direct Inquiry & Form Handlers', completed: true, category: 'Testing' },
  { id: '8', task: 'Deploy V1.0 Live to Domain', completed: true, category: 'Deployment' }
];

export const PROJECTS: Project[] = [
  {
    id: 'e-commerce-app',
    title: 'Flutter E-Commerce Suite',
    category: 'E-Commerce & Retail',
    description: 'A full-featured shopping app with real-time Firestore catalog, Razorpay payments, and order tracking.',
    longDescription: 'High-performance Flutter mobile application engineered for seamless retail experiences. Features animated product carousels, dynamic cart state management with Riverpod, secure Razorpay checkout gateway, order history tracking, and dark/light mode.',
    features: [
      'Razorpay Payment Gateway Integration',
      'Real-time Firestore Inventory & Order Sync',
      'Instant Search, Filter & Infinite Product Scroll'
    ],
    techStack: ['Flutter 3.x', 'Dart', 'Firebase Firestore', 'Razorpay API', 'Riverpod', 'REST API'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/MayankKumar355/flutter-ecommerce-suite',
    liveDemoUrl: 'https://mayankkumar.dev/demo/ecommerce',
    rating: 4.9,
    downloadsOrUsers: '5,000+ Downloads',
    mockupScreens: [
      { title: 'Home Feed', description: 'Curated categories & flash deals banner', color: 'from-blue-600 to-indigo-700', type: 'dashboard' },
      { title: 'Product Details', description: 'Variant selector, size guide & reviews', color: 'from-indigo-600 to-purple-700', type: 'list' },
      { title: 'Checkout & Cart', description: 'Razorpay payment integration & coupon code', color: 'from-blue-500 to-cyan-600', type: 'form' }
    ]
  },
  {
    id: 'firebase-chat-app',
    title: 'Real-Time Flutter Chat App',
    category: 'Social & Communication',
    description: 'Instant messaging app powered by Firebase, with audio notes, FCM notifications, and status updates.',
    longDescription: 'A modern, sub-second latency messaging application built with Flutter and Firebase Cloud Messaging. Supports end-to-end user authentication, push notifications, voice note recordings, read receipts, and online status indicators.',
    features: [
      'Sub-second Messaging with Firebase Realtime Database',
      'Audio Note Recording & Media File Attachments',
      'FCM Push Notifications & Online Status Indicator'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase Auth', 'Cloud Firestore', 'FCM', 'Provider'],
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/MayankKumar355/flutter-realtime-chat',
    liveDemoUrl: 'https://mayankkumar.dev/demo/chatapp',
    rating: 4.8,
    downloadsOrUsers: '2,500+ Active Users',
    mockupScreens: [
      { title: 'Chat List', description: 'Recent conversations, unread badges & search', color: 'from-emerald-600 to-teal-700', type: 'list' },
      { title: 'Direct Chat Room', description: 'Realtime bubbles, voice notes & media attachment', color: 'from-teal-600 to-cyan-700', type: 'chat' },
      { title: 'User Settings', description: 'Profile customization, notification preferences', color: 'from-blue-600 to-teal-600', type: 'form' }
    ]
  },
  {
    id: 'flutter-weather-app',
    title: 'Flutter Weather & Forecast App',
    category: 'Utility & Weather',
    description: 'Real-time weather forecast app with GPS geolocation, 7-day forecast, interactive weather charts, and OpenWeatherMap API.',
    longDescription: 'A modern cross-platform weather application built with Flutter and Dart. Features automatic GPS geolocation detection, dynamic animated weather graphics based on live weather conditions, 7-day hourly & daily forecast charts, air quality tracking, and offline caching.',
    features: [
      'Real-time Weather & 7-Day Forecast via OpenWeatherMap API',
      'Automatic GPS Geolocation & City Search Caching',
      'Dynamic Animated Weather UI & Interactive Charts'
    ],
    techStack: ['Flutter 3.x', 'Dart', 'OpenWeatherMap API', 'Geolocator', 'Riverpod', 'FL Chart'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/MayankKumar355/flutter-weather-app',
    liveDemoUrl: 'https://mayankkumar.dev/demo/weatherapp',
    rating: 4.9,
    downloadsOrUsers: '8,000+ Active Users',
    mockupScreens: [
      { title: 'Home Weather Feed', description: 'Live temperature, atmospheric pressure, UV index & humidity', color: 'from-sky-500 to-blue-700', type: 'dashboard' },
      { title: '7-Day Hourly Forecast', description: 'Interactive temperature trend graph & hourly rain forecast', color: 'from-blue-600 to-indigo-800', type: 'list' },
      { title: 'City Search & Map Location', description: 'GPS auto-picker & saved favorite cities grid', color: 'from-cyan-600 to-blue-700', type: 'form' }
    ]
  },
  {
    id: 'plant-care-nursery-app',
    title: 'Smart Plant Care & Nursery App',
    category: 'Lifestyle & Plant Care',
    description: 'AI-assisted plant identification, watering schedule reminders, plant disease diagnostics, and online plant store.',
    longDescription: 'A feature-rich Flutter application designed for plant lovers and home gardeners. Features smart plant identification via camera/image recognition, customizable watering & fertilization schedules with local push notifications, disease diagnosis guide, and an integrated plant nursery marketplace with Razorpay checkout.',
    features: [
      'Smart Plant Disease Identifier & AI Diagnostic Guide',
      'Custom Watering & Sunlight Reminders with Notifications',
      'Integrated Plant Nursery Marketplace & Razorpay Cart'
    ],
    techStack: ['Flutter 3.x', 'Dart', 'Firebase Firestore', 'REST API', 'FCM Notifications', 'Riverpod'],
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/MayankKumar355/flutter-plant-care-app',
    liveDemoUrl: 'https://mayankkumar.dev/demo/plantcare',
    rating: 4.9,
    downloadsOrUsers: '6,500+ Active Gardeners',
    mockupScreens: [
      { title: 'My Garden Dashboard', description: 'Active plant health status & daily watering schedule checklist', color: 'from-emerald-600 to-green-800', type: 'dashboard' },
      { title: 'Plant Disease AI Scanner', description: 'Instant leaf diagnostic and treatment recommendations', color: 'from-teal-600 to-emerald-700', type: 'form' },
      { title: 'Nursery Store & Cart', description: 'Buy rare indoor plants, organic soil & terracotta pots', color: 'from-green-600 to-lime-700', type: 'list' }
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    name: 'Flutter Framework',
    percentage: 92,
    category: 'Core',
    icon: 'Smartphone',
    experience: '1.3 Years Exp',
    description: 'Expertise in building smooth, 60fps responsive UIs for Android, iOS, Web, and Desktop from a single codebase.'
  },
  {
    name: 'Dart Programming',
    percentage: 90,
    category: 'Core',
    icon: 'Code2',
    experience: '1.5 Years Exp',
    description: 'Strong mastery of object-oriented concepts, null safety, asynchronous programming (Futures/Streams), and isolates.'
  },
  {
    name: 'Firebase & Cloud Services',
    percentage: 85,
    category: 'Backend',
    icon: 'Flame',
    experience: '7 Months Exp',
    description: 'Firestore, Realtime DB, Firebase Auth, FCM Push Notifications, Cloud Functions, and Analytics.'
  },
  {
    name: 'REST API & JSON Parsing',
    percentage: 80,
    category: 'Backend',
    icon: 'Network',
    experience: '5 Months Exp',
    description: 'HTTP client setup using Dio & Http, authentication tokens, caching headers, and JSON serialization.'
  },
  {
    name: 'Git & GitHub Workflow',
    percentage: 80,
    category: 'Tools',
    icon: 'GitBranch',
    experience: '1.5 Years Exp',
    description: 'Branch management, pull requests, automated GitHub Actions, code reviews, and semantic versioning.'
  },
  {
    name: 'Play Store & App Store Deployment',
    percentage: 75,
    category: 'Deployment',
    icon: 'UploadCloud',
    experience: '3 Months Exp',
    description: 'App signing key generation, Play Console release tracks, privacy policy compliance, and app store listing optimization.'
  }
];

export const ROADMAP: RoadmapItem[] = [
  {
    version: 'Version 1.0',
    timeline: 'Live Now',
    title: 'Core 5-Page Portfolio Launch',
    description: 'Complete professional portfolio featuring Home, About Me, Projects, Skills Matrix, and Contact Form.',
    status: 'active',
    tasks: [
      'Responsive Flutter Web showcase UI',
      'Interactive Project details & Live Phone Frame Mockups',
      'Direct WhatsApp & Email inquiry integration',
      'Hostinger & Firebase Hosting setup'
    ]
  },
  {
    version: 'Version 2.0',
    timeline: 'Month 1 Plan',
    title: 'Daily Flutter Tutorials & Tech Blog',
    description: 'In-app blog section publishing 1 Flutter tutorial daily to drive organic Google search traffic from developer queries.',
    status: 'upcoming',
    tasks: [
      'Searchable Flutter Code Snippet & Tutorial Hub',
      'State Management comparison guides (Riverpod vs Bloc vs Provider)',
      'Firebase integration step-by-step walk-throughs',
      'SEO blog posts for "flutter developer jaipur"'
    ]
  },
  {
    version: 'Version 3.0',
    timeline: 'Month 3 Plan',
    title: 'Monetization Engine (AdSense & Affiliates)',
    description: 'Integrating Google AdSense and developer tool affiliate links (Hostinger, Canva, Flutter UI templates) for passive revenue.',
    status: 'planned',
    tasks: [
      'Google AdSense banner ad placements',
      'Affiliate link recommendation badges for hosting & courses',
      'Automated monthly traffic & revenue reporting dashboard'
    ]
  },
  {
    version: 'Version 4.0',
    timeline: 'Month 6 Plan',
    title: 'Paid Flutter UI Kits & Course Store',
    description: 'Launching digital products: Premium Flutter Starter UI Kits, E-commerce boilerplates, and 1-on-1 mentorship sessions.',
    status: 'planned',
    tasks: [
      'Digital downloads checkout with Razorpay / Stripe',
      'Premium Flutter UI Kit previews & code downloads',
      '1-on-1 Freelance Mentorship booking calendar'
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Integrate Razorpay in Flutter Apps (2026 Step-by-Step)',
    snippet: 'Complete guide to adding secure Indian payment gateway Razorpay in Flutter with webhook verification and error handling.',
    content: `Razorpay is one of the most popular payment gateways in India. In this tutorial, we will walk through setting up Razorpay SDK in Flutter 3.x with clean code architecture...`,
    date: 'Aug 05, 2026',
    readTime: '6 min read',
    category: 'Flutter Development',
    tags: ['Flutter', 'Razorpay', 'Payments', 'Dart']
  },
  {
    id: '2',
    title: 'Riverpod 2.0 vs Provider vs Bloc: Which State Management to Choose?',
    snippet: 'An unbiased comparison of top Flutter state management solutions with real-world code snippets and memory efficiency benchmark.',
    content: `Choosing the right state management in Flutter can determine the scalability of your app. Here is a breakdown of when to use Riverpod, Bloc, or Provider...`,
    date: 'Jul 28, 2026',
    readTime: '8 min read',
    category: 'State Management',
    tags: ['Riverpod', 'Bloc', 'Provider', 'Architecture']
  },
  {
    id: '3',
    title: 'Deploying Flutter Web to Firebase Hosting & Hostinger Domain',
    snippet: 'Step-by-step guide to compiling Flutter web, optimizing assets, configuring rewrite rules, and linking your custom domain.',
    content: `Flutter Web allows you to target browsers with your existing codebase. Learn how to run \`flutter build web\`, setup \`firebase.json\`, and attach \`mayankkumar.dev\`...`,
    date: 'Jul 15, 2026',
    readTime: '5 min read',
    category: 'Deployment & DevOps',
    tags: ['Flutter Web', 'Firebase', 'Hostinger', 'DevOps']
  }
];
