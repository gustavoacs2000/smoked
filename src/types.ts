export type MockupThemeId = 'nocturno' | 'artesanal' | 'fastcasual';

export type DeviceViewport = 'desktop' | 'tablet' | 'mobile' | 'fullscreen';

export interface BrandColor {
  name: string;
  codeName: string;
  hex: string;
  rgb: string;
  cmyk: string;
  description: string;
  contrastText: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'pitsmoke' | 'burgers' | 'sides' | 'drinks' | 'combos';
  cut?: string;
  price: number;
  originalPrice?: number;
  description: string;
  smokeHours?: number;
  serves: string;
  image: string;
  tags: string[];
  isSpecialty?: boolean;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  timeTemp: string;
  iconName: string;
}

export interface MeatCut {
  id: string;
  name: string;
  tag: string;
  ptName: string;
  portion: string;
  description: string;
  smokeTime: string;
  woodType: string;
  flavorNotes: string[];
}

export interface FranchiseTier {
  id: string;
  name: string;
  type: string;
  investment: string;
  spaceRequired: string;
  averageMonthlyRevenue: string;
  netMargin: string;
  paybackMonths: string;
  suitableFor: string;
}
