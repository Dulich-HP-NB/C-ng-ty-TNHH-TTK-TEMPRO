export interface ProductSpec {
  model: string;
  wattages: number[];
  selectedWattage: number;
  efficacy: number; // Lm/W
  totalLumens: number;
  ipRating: string;
  ikRating: string;
  inputVoltage: string;
  powerFactor: string;
  thd: string;
  chips: string;
  driver: string;
  housing: string;
  cct: string;
  cri: string;
  beamAngles: string;
  dimensions: {
    diameter: string;
    height: string;
    weight: string;
  };
  lifespan: string;
  warranty: string;
  flickerFree: boolean;
}

export interface DialuxParams {
  spaceType: string;
  customTypeName?: string;
  length: number; // meters
  width: number; // meters
  mountingHeight: number; // meters
  targetLux: number; // Lux
  selectedModel: string;
  selectedWattage: number;
  maintenanceFactor: number; // typically 0.80
}

export interface DialuxResult {
  fixtureCount: number;
  rowsX: number; // dọc
  colsY: number; // ngang
  spacingX: number; // meters
  spacingY: number; // meters
  totalPowerWatts: number;
  powerDensityWpM2: number;
  calculatedAverageLux: number;
  uniformityUo: number;
  energySavingsPercent: number;
  totalArea: number;
}

export interface CatalogProduct {
  id: string;
  name: string;
  badge: string;
  badgeType?: 'amber' | 'blue' | 'slate' | 'green';
  wattages: string;
  featureDesc: string;
  efficacy: string;
  ipRating: string;
  suitability: string;
  imageType: 'ufo' | 'bracket' | 'linear' | 'atex' | 'module';
  accentColor: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  scale: string;
  fixturesInstalled: string;
  measuredLux: string;
  acceptanceYear: string;
  description: string;
  imageType: 'auto' | 'logistics' | 'food' | 'stadium';
}
