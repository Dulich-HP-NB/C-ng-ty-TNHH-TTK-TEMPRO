import { CatalogProduct, ProjectCaseStudy } from '../types';

export const HB_H03_SPECS: Record<number, {
  wattage: number;
  lumens: number;
  diameter: string;
  height: string;
  weight: string;
  current: string;
}> = {
  100: {
    wattage: 100,
    lumens: 15000,
    diameter: 'Ø260 mm',
    height: '145 mm',
    weight: '2.4 kg',
    current: '0.45A @ 220V'
  },
  150: {
    wattage: 150,
    lumens: 22500,
    diameter: 'Ø300 mm',
    height: '155 mm',
    weight: '3.1 kg',
    current: '0.68A @ 220V'
  },
  200: {
    wattage: 200,
    lumens: 30000,
    diameter: 'Ø340 mm',
    height: '168 mm',
    weight: '3.8 kg',
    current: '0.91A @ 220V'
  },
  240: {
    wattage: 240,
    lumens: 36000,
    diameter: 'Ø380 mm',
    height: '180 mm',
    weight: '4.5 kg',
    current: '1.09A @ 220V'
  }
};

export const SPACE_PRESETS = [
  {
    id: 'garment_standard',
    name: 'Nhà xưởng may mặc, dệt may, đóng gói tiêu chuẩn',
    defaultLux: 300,
    standardCode: 'TCVN 7114: 300 Lux',
    minUo: 0.70
  },
  {
    id: 'precision_cnc',
    name: 'Gia công cơ khí chính xác, tiện phay CNC, khuôn mẫu',
    defaultLux: 500,
    standardCode: 'TCVN 7114: 500 Lux',
    minUo: 0.70
  },
  {
    id: 'electronics_assembly',
    name: 'Lắp ráp linh kiện điện tử vi mạch, phòng sạch',
    defaultLux: 500,
    standardCode: 'TCVN 7114: 500 Lux',
    minUo: 0.75
  },
  {
    id: 'logistics_warehouse',
    name: 'Kho bãi logistics, kệ hàng pallet cao tầng',
    defaultLux: 200,
    standardCode: 'TCVN 7114: 200 Lux',
    minUo: 0.60
  },
  {
    id: 'food_processing',
    name: 'Nhà máy chế biến thực phẩm, thủy hải sản',
    defaultLux: 350,
    standardCode: 'TCVN 7114: 350 Lux',
    minUo: 0.70
  },
  {
    id: 'sports_arena',
    name: 'Nhà thi đấu thể thao đa năng, sàn cầu lông/bóng chuyền',
    defaultLux: 750,
    standardCode: 'TCVN 7114: 750 Lux (HD Broadcast)',
    minUo: 0.80
  },
  {
    id: 'packaging_woodwork',
    name: 'Xưởng gỗ mộc, bao bì carton, in ấn công nghiệp',
    defaultLux: 300,
    standardCode: 'TCVN 7114: 300 Lux',
    minUo: 0.65
  }
];

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  {
    id: 'hb-h03',
    name: 'UFO Highbay HB-H03',
    badge: '150 Lm/W',
    badgeType: 'amber',
    wattages: '100W / 150W / 200W',
    featureDesc: 'Hiệu suất 150 Lm/W',
    efficacy: '150 Lm/W',
    ipRating: 'IP65 / IK08',
    suitability: 'Xưởng sản xuất đa năng, kho bãi, xưởng cơ khí, may mặc',
    imageType: 'ufo',
    accentColor: '#fea619'
  },
  {
    id: 'hb-bracket',
    name: 'Highbay Bracket',
    badge: 'Góc quay 180°',
    badgeType: 'blue',
    wattages: '100W / 150W / 200W',
    featureDesc: 'Quai treo chỉnh góc',
    efficacy: '145 Lm/W',
    ipRating: 'IP65 / IK08',
    suitability: 'Lắp áp tường, dầm nghiêng, xưởng đóng tàu, khu vực góc khuất',
    imageType: 'bracket',
    accentColor: '#0284c7'
  },
  {
    id: 'linear-hb',
    name: 'Linear Highbay',
    badge: 'Lối đi hẹp',
    badgeType: 'slate',
    wattages: '100W / 150W / 200W',
    featureDesc: 'Chuyên kho kệ cao',
    efficacy: '150 Lm/W',
    ipRating: 'IP65 / IK08',
    suitability: 'Kho trung chuyển logistics, lối đi giữa các dãy kệ pallet hẹp 2-3m',
    imageType: 'linear',
    accentColor: '#334155'
  },
  {
    id: 'atex-hb',
    name: 'Highbay Chống Nổ',
    badge: 'ATEX Zone 1, 2',
    badgeType: 'amber',
    wattages: '100W / 150W / 200W',
    featureDesc: 'Khu vực hóa chất / Xăng',
    efficacy: '135 Lm/W',
    ipRating: 'IP66 / Ex d IIB T6',
    suitability: 'Kho xăng dầu, nhà máy sơn, hóa chất, chiết nạp khí gas, mỏ than',
    imageType: 'atex',
    accentColor: '#ef4444'
  },
  {
    id: 'module-hb',
    name: 'Highbay Module',
    badge: 'Cực đại 500W',
    badgeType: 'amber',
    wattages: '300W / 400W / 500W',
    featureDesc: 'Nhà thi đấu & Cảng biển',
    efficacy: '160 Lm/W',
    ipRating: 'IP66 / IK10',
    suitability: 'Sân vận động, cảng biển bốc dỡ container, trần cao trên 15m',
    imageType: 'module',
    accentColor: '#d97706'
  }
];

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'case-auto',
    title: 'Nhà máy sản xuất ô tô',
    location: 'KCN Quang Minh, Hà Nội',
    scale: '25,000m²',
    fixturesInstalled: '420 bộ Highbay HB-H03 150W',
    measuredLux: '450 Lux',
    acceptanceYear: '2024',
    description: 'Quy mô: 25,000m² — Lắp đặt 420 bộ Highbay HB-H03 150W đạt chuẩn 450 Lux xưởng lắp ráp.',
    imageType: 'auto'
  },
  {
    id: 'case-logistics',
    title: 'Trung tâm Logistics thông minh',
    location: 'KCN VSIP, Bắc Ninh',
    scale: '32,000m²',
    fixturesInstalled: '380 bộ Linear Highbay 150W + Radar',
    measuredLux: '220 Lux',
    acceptanceYear: '2024',
    description: 'Hệ thống kho trần cao 12m sử dụng Linear Highbay và UFO Highbay kết hợp cảm biến vi sóng.',
    imageType: 'logistics'
  },
  {
    id: 'case-food',
    title: 'Nhà máy chế biến thực phẩm',
    location: 'KCN Hòa Cầm, Đà Nẵng',
    scale: '18,500m²',
    fixturesInstalled: '290 bộ Highbay IP66 CRI>85',
    measuredLux: '350 Lux',
    acceptanceYear: '2023',
    description: 'Đòi hỏi tiêu chuẩn kháng nước áp lực cao IP66, không bụi bám bẩn và chip LED CRI > 85.',
    imageType: 'food'
  },
  {
    id: 'case-stadium',
    title: 'Nhà thi đấu thể thao đa năng',
    location: 'Tỉnh Quảng Ninh',
    scale: '6,200m²',
    fixturesInstalled: '96 bộ Highbay Module 400W UGR<19',
    measuredLux: '750 Lux',
    acceptanceYear: '2024',
    description: 'Hệ thống đèn Highbay chống lóa UGR < 19 phục vụ phát sóng truyền hình HD trực tiếp.',
    imageType: 'stadium'
  }
];
