import { Product, Testimonial, FAQItem, GalleryItem } from './types';

// Let's use our generated assets for the core showstoppers!
export const GENERATED_IMAGES = {
  hero: '/src/assets/images/hero_bakery_1782606352137.jpg',
  luxuryCake: '/src/assets/images/luxury_cake_1782606364134.jpg',
  artisanPastries: '/src/assets/images/artisan_pastries_1782606374646.jpg',
  cupcakesBox: '/src/assets/images/cupcakes_box_1782606383629.jpg',
};

export const PRODUCTS: Product[] = [
  // Wedding & Custom Cakes
  {
    id: 'wc-1',
    name: 'The Golden Muse Wedding Cake',
    description: 'An elegant multi-tiered masterpiece with premium organic vanilla sponge, luxurious raspberry compote, and hand-sculpted sugar flowers with real 24k edible gold leaf accents.',
    price: 380,
    category: 'Wedding Cakes',
    image: GENERATED_IMAGES.luxuryCake,
    isPopular: true,
    tags: ['Best Seller', 'Edible Gold', 'Customizable']
  },
  {
    id: 'wc-2',
    name: 'Blossom & Grace Tiered Cake',
    description: 'Beautifully textured ivory buttercream layers adorned with fresh organic pastel flowers and a velvety elderflower and lemon curd filling.',
    price: 320,
    category: 'Wedding Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800',
    tags: ['Buttercream', 'Elegant']
  },
  
  // Custom Cakes
  {
    id: 'cc-1',
    name: 'Bespoke Artisan Dream Cake',
    description: 'Work directly with our pastry chefs to design the ultimate centerpiece. Fully custom flavors, fillings, and outer sculpture styled with modern minimal elegance.',
    price: 180,
    category: 'Custom Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    tags: ['Fully Bespoke', 'Signature']
  },

  // Birthday Cakes
  {
    id: 'bc-1',
    name: 'Velvet Pink Birthday Delight',
    description: 'Double chocolate sponge layered with smooth Swiss meringue raspberry buttercream, pink white chocolate drip, and gold chocolate spheres.',
    price: 85,
    category: 'Birthday Cakes',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
    tags: ['Birthday', 'Chocolate Drip']
  },
  {
    id: 'bc-2',
    name: 'Classic Confetti Celebration Cake',
    description: 'A nostalgic fluffy vanilla sponge packed with organic rainbow sprinkles, frosted in creamy whipped cream and customized birthday inscription.',
    price: 75,
    category: 'Birthday Cakes',
    image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=800',
    tags: ['Kids Choice', 'Classic']
  },

  // Cupcakes
  {
    id: 'cp-1',
    name: 'The Royal Rose Cupcakes (6-Pack)',
    description: 'Gourmet vanilla and rosewater cupcakes topped with gorgeous velvety buttercream swirls, rose gold flakes, and fresh organic berries.',
    price: 24,
    category: 'Cupcakes',
    image: GENERATED_IMAGES.cupcakesBox,
    isPopular: true,
    tags: ['Gold Sprinkles', 'Rosewater']
  },
  {
    id: 'cp-2',
    name: 'Salted Caramel Hazelnut Cupcakes',
    description: 'Decadent chocolate sponge filled with liquid salted caramel, topped with espresso frosting and hand-caramelized hazelnuts.',
    price: 22,
    category: 'Cupcakes',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
    tags: ['Gourmet', 'Chocolate']
  },

  // Cookies
  {
    id: 'ck-1',
    name: 'Signature Brown Butter Pecan Cookies',
    description: 'Thick, chewy cookies baked with slow-browned butter, giant Belgian dark chocolate chunks, and roasted Georgia pecans, finished with Maldon sea salt.',
    price: 18,
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800',
    tags: ['Warm & Chewy', 'Maldon Salt']
  },

  // Donuts
  {
    id: 'dn-1',
    name: 'Artisan Brioche Glazed Donuts',
    description: '24-hour slow proofed soft brioche donuts glazed with organic Madagascar bourbon vanilla bean infusion.',
    price: 16,
    category: 'Donuts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800',
    tags: ['Brioche', 'Vanilla Bean']
  },

  // Cheesecakes
  {
    id: 'cs-1',
    name: 'Burnt Basque Caramel Cheesecake',
    description: 'Crustless Spanish-style cheesecake baked at high heat for a caramelized exterior and a rich, custardy, ultra-creamy heart.',
    price: 48,
    category: 'Cheesecakes',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    tags: ['Award Winning', 'Creamy']
  },

  // Brownies
  {
    id: 'br-1',
    name: 'Triple Chocolate Fudge Brownies',
    description: 'Ultra-fudgy Belgian dark, milk, and white chocolate brownies with a glossy crinkle top and a pinch of espresso powder.',
    price: 20,
    category: 'Brownies',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    tags: ['Rich Fudge', 'Belgian Chocolate']
  },

  // Macarons
  {
    id: 'mc-1',
    name: 'Parisian Pastel Macarons (12-Pack)',
    description: 'An elegant selection of French macarons including Raspberry Rose, Salted Caramel, Pistachio, Lavender Honey, Lemon Basil, and Chocolate Ganache.',
    price: 32,
    category: 'Macarons',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800',
    isPopular: true,
    tags: ['French Import', 'Gluten Free']
  },

  // Fresh Bread
  {
    id: 'fb-1',
    name: 'Artisanal Rosemary Sourdough',
    description: 'Naturally leavened wild yeast sourdough crusty bread, baked stone-hearth style with organic rosemary leaves and sea salt.',
    price: 8,
    category: 'Fresh Bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    tags: ['Sourdough', 'Vegan']
  },

  // Croissants
  {
    id: 'cr-1',
    name: 'Classic Butter Croissants (4-Pack)',
    description: 'Flaky, golden, multi-layered French butter croissants made with authentic Normandy butter.',
    price: 15,
    category: 'Croissants',
    image: GENERATED_IMAGES.artisanPastries,
    tags: ['Normandy Butter', 'Flaky']
  },

  // Muffins
  {
    id: 'mf-1',
    name: 'Wild Blueberry Streusel Muffins',
    description: 'Jumbo muffins packed with fresh mountain wild blueberries, finished with a crunchy brown sugar and cinnamon streusel dome.',
    price: 14,
    category: 'Muffins',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=800',
    tags: ['Warm Streusel', 'Fresh Berries']
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Samantha Vance',
    role: 'Bride',
    text: 'Our wedding cake was absolutely perfect. It looked like a museum art piece and tasted divine. The elderflower filling was incredibly fresh, and all our guests couldn\'t stop talking about it!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: '2',
    name: 'Marcus Thorne',
    role: 'Local Food Critic',
    text: 'Best bakery in town. Period. The brioche donuts have a perfect airy crumb, the macarons are perfectly crunchy yet chewy, and the customer service is as sweet as their desserts.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: '3',
    name: 'Elena Rostova',
    role: 'Event Coordinator',
    text: 'The cake looked amazing and tasted even better! I coordinate over 40 luxury weddings a year, and CakieBakie has become my absolute go-to for premium desserts. Flawless every single time.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What products do you offer?',
    answer: 'We offer an extensive selection of artisan baked goods, including custom celebration cakes, multi-tiered wedding cakes, gourmet cupcakes, chewy cookies, hand-glazed brioche donuts, Spanish-style burnt cheesecakes, French macarons, wild yeast sourdoughs, and flaky croissants.',
  },
  {
    id: 'faq-2',
    question: 'Can I order custom cakes?',
    answer: 'Absolutely! Custom cakes are our specialty. You can use our interactive Custom Cake Designer in the catalog to choose your tiers, base sponge flavor, luxurious frostings, and gold-leaf details. We also collaborate for high-end bespoke sketches for weddings and grand corporate events.',
  },
  {
    id: 'faq-3',
    question: 'How far in advance should I order?',
    answer: 'For classic menu items, we recommend placing orders at least 24-48 hours in advance. For birthday or custom single-tier celebration cakes, 5-7 days notice is preferred. For multi-tiered wedding cakes, we recommend booking 3 to 6 months in advance as our weekend slots fill up very quickly.',
  },
  {
    id: 'faq-4',
    question: 'Do you make birthday cakes?',
    answer: 'Yes! We design gorgeous, playful, and elegant birthday cakes for all ages. They are fully customizable with beautiful drips, sprinkles, candles, and custom hand-piped edible gold or chocolate messages.',
  },
  {
    id: 'faq-5',
    question: 'Can I order online?',
    answer: 'Yes! You can browse our dynamic catalog online, add items directly to your elegant shopping bag, customize cake options, and place a pre-arranged order inquiry. You can review your cart details and either send it straight to our team via custom WhatsApp API integration or call our order line directly.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    image: GENERATED_IMAGES.luxuryCake,
    title: 'The Golden Muse Wedding Cake',
    category: 'Wedding Cakes',
  },
  {
    id: 'g-2',
    image: GENERATED_IMAGES.cupcakesBox,
    title: 'Velvet Rose Gold Cupcakes Pack',
    category: 'Cupcakes',
  },
  {
    id: 'g-3',
    image: GENERATED_IMAGES.artisanPastries,
    title: 'French Butter Croissants Platter',
    category: 'Pastries',
  },
  {
    id: 'g-4',
    image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=800',
    title: 'Swiss Buttercream Birthday Cake',
    category: 'Luxury Cakes',
  },
  {
    id: 'g-5',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800',
    title: 'Hand-painted Parisian Macarons',
    category: 'Dessert Boxes',
  },
  {
    id: 'g-6',
    image: 'https://images.unsplash.com/photo-1511081300305-525df11317a2?auto=format&fit=crop&q=80&w=800',
    title: 'Boutique Bakery Display Interior',
    category: 'Bakery display shelves',
  },
];
