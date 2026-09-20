export type Tour = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  price: number;
  duration: string;
  summary: string;
  description: string;
  pickup: string;
  group: string;
  image: "morning" | "camel" | "golden" | "camp";
  includes: string[];
  itinerary: { time: string; title: string; detail: string }[];
};

const desertItinerary = [
  { time: "15:30", title: "Hotel pickup", detail: "Air-conditioned pickup from your Dubai hotel or residence." },
  { time: "17:00", title: "Into the dunes", detail: "Dune bashing, photo stop and sandboarding with your guide." },
  { time: "18:30", title: "Camp experience", detail: "Camel ride, refreshments, dinner and live entertainment." },
  { time: "21:00", title: "Return to Dubai", detail: "Relaxed drop-off after a memorable desert evening." },
];

export const tours: Tour[] = [
  { slug: "evening-desert-safari", name: "Evening Desert Safari", shortName: "Evening", category: "Desert safari", price: 30, duration: "5 hours", summary: "Dune drive, camel ride, camp & BBQ", description: "The classic Dubai desert evening: sweeping dunes, sunset photographs and a lively camp dinner in one easy trip.", pickup: "Dubai hotel, 3:30 PM", group: "Shared 4×4", image: "golden", includes: ["Hotel pickup and drop-off", "Dune bashing", "Camel ride and sandboarding", "BBQ buffet and live shows"], itinerary: desertItinerary },
  { slug: "evening-safari-quad-bike", name: "Evening Safari with Quad Bike", shortName: "Evening + Quad", category: "Desert safari", price: 205, duration: "6 hours", summary: "Dune bashing, quad trail, camp & BBQ", description: "Add a self-drive quad-bike session to the complete evening safari for a higher-energy desert experience.", pickup: "Dubai hotel, 2:30 PM", group: "Shared 4×4", image: "golden", includes: ["Hotel transfers", "Quad-bike session", "Dune bashing and sandboarding", "Camp dinner and shows"], itinerary: desertItinerary },
  { slug: "vip-desert-safari", name: "VIP Desert Safari", shortName: "VIP", category: "Premium safari", price: 175, duration: "6 hours", summary: "Premium seating, table service & 4×4", description: "A more comfortable desert evening with priority camp service, reserved seating and attentive hosting throughout.", pickup: "Dubai hotel, 3:00 PM", group: "Up to 6 guests", image: "camp", includes: ["4×4 hotel transfers", "Dune bashing", "Reserved VIP seating", "Table-served BBQ dinner"], itinerary: desertItinerary },
  { slug: "hummer-desert-safari", name: "Hummer Desert Safari", shortName: "Hummer", category: "Premium safari", price: 185, duration: "6 hours", summary: "Hummer dune ride, camp & dinner", description: "Travel to the dunes in unmistakable Hummer style, followed by the complete sunset camp experience.", pickup: "Dubai hotel, 3:00 PM", group: "Private Hummer", image: "camel", includes: ["Hummer hotel transfers", "Dune bashing", "Sunset photo stop", "Camp dinner and shows"], itinerary: desertItinerary },
  { slug: "morning-desert-safari", name: "Morning Desert Safari", shortName: "Morning", category: "Desert safari", price: 130, duration: "4 hours", summary: "Cool dunes, sandboarding & camel ride", description: "A crisp, activity-filled morning for guests who want the dunes without an evening camp or dinner.", pickup: "Dubai hotel, 7:30 AM", group: "Shared 4×4", image: "morning", includes: ["Morning hotel transfers", "Dune bashing", "Sandboarding", "Short camel ride"], itinerary: desertItinerary.map((item, index) => ({ ...item, time: ["07:30", "08:30", "09:30", "11:30"][index] ?? item.time })) },
  { slug: "morning-safari-quad-bike", name: "Morning Safari with Quad Bike", shortName: "Morning + Quad", category: "Desert safari", price: 280, duration: "5 hours", summary: "Sunrise dunes and a quad-bike loop", description: "Pair the calm light of the morning desert with an exhilarating guided quad-bike session.", pickup: "Dubai hotel, 7:00 AM", group: "Shared 4×4", image: "morning", includes: ["Hotel transfers", "Quad-bike session", "Dune bashing", "Sandboarding and camel ride"], itinerary: desertItinerary.map((item, index) => ({ ...item, time: ["07:00", "08:00", "09:30", "12:00"][index] ?? item.time })) },
  { slug: "overnight-desert-safari", name: "Overnight Desert Safari", shortName: "Overnight", category: "Desert safari", price: 140, duration: "18 hours", summary: "Sunset camp, stargazing & breakfast", description: "Stay after the evening crowds leave, sleep beneath the stars and wake to the quiet of the dunes.", pickup: "Dubai hotel, 3:00 PM", group: "Shared camp", image: "camp", includes: ["Hotel transfers and safari", "Dinner and live shows", "Overnight camp setup", "Morning breakfast"], itinerary: desertItinerary },
  { slug: "dhow-cruise-creek", name: "Dhow Cruise Creek", shortName: "Creek Dhow", category: "Cruise", price: 65, duration: "2 hours", summary: "Old Dubai views, dinner & dhow cruise", description: "Glide through historic Dubai Creek aboard a traditional dhow with dinner and glittering waterfront views.", pickup: "Creek boarding point", group: "Shared dhow", image: "camel", includes: ["Two-hour cruise", "Buffet dinner", "Soft drinks", "Live entertainment"], itinerary: desertItinerary },
  { slug: "dhow-cruise-marina", name: "Dhow Cruise Marina", shortName: "Marina Dhow", category: "Cruise", price: 120, duration: "2 hours", summary: "Marina skyline, dinner & entertainment", description: "See Dubai Marina illuminated from the water while enjoying dinner on a traditional dhow.", pickup: "Marina boarding point", group: "Shared dhow", image: "camp", includes: ["Two-hour marina cruise", "Buffet dinner", "Welcome drinks", "Entertainment"], itinerary: desertItinerary },
  { slug: "hatta-mountain-safari", name: "Hatta Mountain Safari", shortName: "Hatta", category: "Mountain tour", price: 90, duration: "7 hours", summary: "Mountain roads, heritage & scenic stops", description: "Trade skyscrapers for rugged mountain landscapes, heritage sites and the cool blue water of Hatta.", pickup: "Dubai hotel, 8:00 AM", group: "Shared 4×4", image: "morning", includes: ["Dubai hotel transfers", "Mountain drive", "Heritage village stop", "Scenic photo stops"], itinerary: desertItinerary },
  { slug: "abu-dhabi-city-tour", name: "Abu Dhabi City Tour", shortName: "Abu Dhabi", category: "City tour", price: 120, duration: "9 hours", summary: "Grand Mosque, Corniche & landmarks", description: "A polished day trip through the UAE capital, from the Grand Mosque to the Corniche and cultural landmarks.", pickup: "Dubai hotel, 8:00 AM", group: "Shared coach", image: "morning", includes: ["Dubai transfers", "Grand Mosque visit", "Corniche photo stop", "Heritage and market stops"], itinerary: desertItinerary },
  { slug: "dubai-city-tour", name: "Dubai City Tour", shortName: "Dubai City", category: "City tour", price: 65, duration: "5 hours", summary: "Old Dubai, icons & skyline viewpoints", description: "Discover Dubai's contrasts in one concise tour, from heritage lanes to its bold modern skyline.", pickup: "Dubai hotel, 9:00 AM", group: "Shared coach", image: "camel", includes: ["Hotel pickup", "Old Dubai landmarks", "Jumeirah photo stops", "Modern skyline viewpoints"], itinerary: desertItinerary },
];

export function getTour(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}

export function whatsappUrl(tour?: Tour) {
  const message = tour
    ? `Hi DuneAtlas, I'd like to enquire about the ${tour.name} (AED ${tour.price} per person).`
    : "Hi DuneAtlas, I'd like to plan a Dubai tour.";
  return `https://wa.me/971559359071?text=${encodeURIComponent(message)}`;
}