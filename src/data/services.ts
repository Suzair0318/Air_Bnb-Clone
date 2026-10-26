export type Service = {
  id: string;
  title: string;
  image: string;
  price: number;
  rating?: number;
  badge?: "Popular";
  unit?: "guest" | "group";
  minimumToBook?: number;
};

export const kualaLumpurServices: Service[] = [
  {
    id: "s-kl1",
    title: "Grounded yoga practice for women by Sharan",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    price: 34,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-kl2",
    title: "Your friendly-travel-photographer",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    price: 62,
    rating: 5.0,
    unit: "guest",
    minimumToBook: 123,
  },
  {
    id: "s-kl3",
    title: "Urban Photo Walk",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80",
    price: 123,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-kl4",
    title: "Tennis fundamentals by Kevin",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&q=80",
    price: 35,
    rating: 5.0,
    unit: "guest",
    minimumToBook: 49,
  },
  {
    id: "s-kl5",
    title: "Discover malaysia, take home your story",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    price: 49,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-kl6",
    title: "Itf Taekwon do class by 9th Dan Gm, Kuala Lumpur",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80",
    price: 20,
    unit: "guest",
  },
  {
    id: "s-kl7",
    title: "Studio Portraits by The Cade & Co",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80",
    price: 67,
    unit: "group",
  },
  {
    id: "s-kl8",
    title: "Private cooking class with a local chef",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    price: 55,
    rating: 4.98,
    unit: "guest",
  },
];

export const londonServices: Service[] = [
  {
    id: "s-ldn1",
    title: "Results-oriented fitness by Amram",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    price: 61,
    unit: "guest",
    minimumToBook: 108,
  },
  {
    id: "s-ldn2",
    title: "Magical Hands Massage in top location -Bond Street",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80",
    price: 61,
    rating: 4.97,
    unit: "guest",
    badge: "Popular",
  },
  {
    id: "s-ldn3",
    title: "Photoshoot at Iconic Landmarks or Chosen Location",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&q=80",
    price: 57,
    rating: 4.98,
    unit: "guest",
    minimumToBook: 113,
  },
  {
    id: "s-ldn4",
    title: "Soulful London Private Photoshoot",
    image: "https://images.unsplash.com/photo-1511895426328-5379765936c2?w=800&q=80",
    price: 67,
    rating: 4.96,
    unit: "guest",
  },
  {
    id: "s-ldn5",
    title: "Seasonal gourmet menus by Chef Anna Jane",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    price: 61,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-ldn6",
    title: "40Off Massage if you Book Now Got Your Back London",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    price: 41,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-ldn7",
    title: "Adorable family and couples photos by Lily",
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?w=800&q=80",
    price: 83,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-ldn8",
    title: "Personal training in Hyde Park",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    price: 55,
    rating: 4.95,
    unit: "guest",
  },
];

export const losAngelesServices: Service[] = [
  {
    id: "s-la1",
    title: "LA Editorial Lifestyle Portraits",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
    price: 160,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-la2",
    title: "Personal Photographer & Video in Los Angeles",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    price: 295,
    rating: 5.0,
    unit: "group",
  },
  {
    id: "s-la3",
    title: "Highly-curated men's haircuts by Saints",
    image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80",
    price: 0,
    rating: 5.0,
    unit: "group",
  },
  {
    id: "s-la4",
    title: "Thai Bodywork in Old Town Pasadena",
    image: "https://images.unsplash.com/photo-1519823551278-64ac927cae91?w=800&q=80",
    price: 98,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-la5",
    title: "LA Hair & Makeup by Ashanta Artistry",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    price: 200,
    rating: 5.0,
    unit: "guest",
  },
  {
    id: "s-la6",
    title: "Authentic Photography by Alexa Jade",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    price: 250,
    rating: 5.0,
    unit: "group",
  },
  {
    id: "s-la7",
    title: "Scenic lifestyle photos by Emily",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    price: 119,
    rating: 4.96,
    unit: "group",
  },
  {
    id: "s-la8",
    title: "Sunset beach yoga with a local instructor",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    price: 45,
    rating: 4.99,
    unit: "guest",
  },
];
