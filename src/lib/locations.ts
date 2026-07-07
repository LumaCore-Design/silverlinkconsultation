export type PricingTier = 'base' | 'neighbor' | 'extended';

export interface LocationData {
  id: string;
  name: string;
  type: 'parish' | 'town' | 'village' | 'community';
  parish: string;
  tier: PricingTier;
  price: number;
}

export const locations: LocationData[] = [
  // --- WINN PARISH (Base - $350) ---
  { id: 'winn-parish', name: 'Winn Parish', type: 'parish', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'winnfield', name: 'Winnfield', type: 'town', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'tullos-winn', name: 'Tullos', type: 'town', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'atlanta', name: 'Atlanta', type: 'village', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'calvin', name: 'Calvin', type: 'village', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'dodson', name: 'Dodson', type: 'village', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'sikes', name: 'Sikes', type: 'village', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'joyce', name: 'Joyce', type: 'community', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'saint-maurice', name: 'Saint Maurice', type: 'community', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'tannehill', name: 'Tannehill', type: 'community', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'jordan-hill', name: 'Jordan Hill', type: 'community', parish: 'Winn Parish', tier: 'base', price: 350 },
  { id: 'bethlehem', name: 'Bethlehem', type: 'community', parish: 'Winn Parish', tier: 'base', price: 350 },

  // --- JACKSON PARISH (Neighbor - $450) ---
  { id: 'jackson-parish', name: 'Jackson Parish', type: 'parish', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'chatham', name: 'Chatham', type: 'town', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'eros', name: 'Eros', type: 'town', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'jonesboro', name: 'Jonesboro', type: 'town', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'east-hodge', name: 'East Hodge', type: 'village', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'hodge', name: 'Hodge', type: 'village', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'north-hodge', name: 'North Hodge', type: 'village', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'quitman', name: 'Quitman', type: 'village', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'ansley', name: 'Ansley', type: 'community', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'antioch', name: 'Antioch', type: 'community', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'clay', name: 'Clay', type: 'community', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'pleasant-hill', name: 'Pleasant Hill', type: 'community', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'walker', name: 'Walker', type: 'community', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },
  { id: 'weston', name: 'Weston', type: 'community', parish: 'Jackson Parish', tier: 'neighbor', price: 450 },

  // --- CALDWELL PARISH (Neighbor - $450) ---
  { id: 'caldwell-parish', name: 'Caldwell Parish', type: 'parish', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'columbia', name: 'Columbia', type: 'town', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'clarks', name: 'Clarks', type: 'village', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'grayson', name: 'Grayson', type: 'village', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'banks-springs', name: 'Banks Springs', type: 'community', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'bosco', name: 'Bosco', type: 'community', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'copenhagen', name: 'Copenhagen', type: 'community', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'corey', name: 'Corey', type: 'community', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'hebert', name: 'Hebert', type: 'community', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'kelly', name: 'Kelly', type: 'community', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },
  { id: 'vixen', name: 'Vixen', type: 'community', parish: 'Caldwell Parish', tier: 'neighbor', price: 450 },

  // --- LA SALLE PARISH (Neighbor - $450) ---
  { id: 'la-salle-parish', name: 'La Salle Parish', type: 'parish', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },
  { id: 'jena', name: 'Jena', type: 'town', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },
  { id: 'olla', name: 'Olla', type: 'town', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },
  { id: 'tullos', name: 'Tullos', type: 'town', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },
  { id: 'urania', name: 'Urania', type: 'town', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },
  { id: 'trout', name: 'Trout', type: 'community', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },
  { id: 'midway', name: 'Midway', type: 'community', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },
  { id: 'good-pine', name: 'Good Pine', type: 'community', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },
  { id: 'zenoria', name: 'Zenoria', type: 'community', parish: 'La Salle Parish', tier: 'neighbor', price: 450 },

  // --- GRANT PARISH (Neighbor - $450) ---
  { id: 'grant-parish', name: 'Grant Parish', type: 'parish', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'colfax', name: 'Colfax', type: 'town', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'montgomery', name: 'Montgomery', type: 'town', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'pollock', name: 'Pollock', type: 'town', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'creola', name: 'Creola', type: 'village', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'dry-prong', name: 'Dry Prong', type: 'village', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'georgetown', name: 'Georgetown', type: 'village', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'bently', name: 'Bently', type: 'community', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'packton', name: 'Packton', type: 'community', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'rochelle', name: 'Rochelle', type: 'community', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'selma', name: 'Selma', type: 'community', parish: 'Grant Parish', tier: 'neighbor', price: 450 },
  { id: 'verda', name: 'Verda', type: 'community', parish: 'Grant Parish', tier: 'neighbor', price: 450 },

  // --- NATCHITOCHES PARISH (Neighbor - $450) ---
  { id: 'natchitoches-parish', name: 'Natchitoches Parish', type: 'parish', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'natchitoches', name: 'Natchitoches', type: 'town', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'campti', name: 'Campti', type: 'town', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'ashland', name: 'Ashland', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'clarence', name: 'Clarence', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'edgefield', name: 'Edgefield', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'goldonna', name: 'Goldonna', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'martin', name: 'Martin', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'natchez', name: 'Natchez', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'powhatan', name: 'Powhatan', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'provencal', name: 'Provencal', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'robeline', name: 'Robeline', type: 'village', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'ajax', name: 'Ajax', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'allen', name: 'Allen', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'chopin', name: 'Chopin', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'cloutierville', name: 'Cloutierville', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'flora', name: 'Flora', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'grand-ecore', name: 'Grand Ecore', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'marthaville', name: 'Marthaville', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'melrose', name: 'Melrose', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },
  { id: 'readhimer', name: 'Readhimer', type: 'community', parish: 'Natchitoches Parish', tier: 'neighbor', price: 450 },

  // --- BIENVILLE PARISH (Neighbor - $450) ---
  { id: 'bienville-parish', name: 'Bienville Parish', type: 'parish', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'arcadia', name: 'Arcadia', type: 'town', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'gibsland', name: 'Gibsland', type: 'town', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'mount-lebanon', name: 'Mount Lebanon', type: 'town', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'ringgold', name: 'Ringgold', type: 'town', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'bienville', name: 'Bienville', type: 'village', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'bryceland', name: 'Bryceland', type: 'village', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'castor', name: 'Castor', type: 'village', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'jamestown', name: 'Jamestown', type: 'village', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'lucky', name: 'Lucky', type: 'village', parish: 'Bienville Parish', tier: 'neighbor', price: 450 },
  { id: 'saline', name: 'Saline', type: 'village', parish: 'Bienville Parish', tier: 'neighbor', price: 450 }
];

export function getLocationById(id: string): LocationData | undefined {
  return locations.find(loc => loc.id === id);
}

export function getAllLocations(): LocationData[] {
  return locations;
}
