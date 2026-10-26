export type Listing = {
  id: string;
  title: string;
  location: string;
  type: string;
  images: string[];
  price: number;
  nights: number;
  rating: number;
  reviews: number;
  guestFavorite?: boolean;
  isNew?: boolean;
  dates: string;
  distance?: string;
  description: string;
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    isSuperhost: boolean;
    yearsHosting: number;
  };
};

export type Category = {
  id: string;
  label: string;
  icon: string;
};

export type DestinationSection = {
  id: string;
  title: string;
  listingIds: string[];
};
