export interface paramsForGettingApartments {
  roomsCntForFilter: number[];
  areaTotalFrom?: number;
  areaTotalTo?: number;
  panningIds?: string[];
}

export interface leftMenuOptions {
  repair_type: string;
  count_options: number;
}

export interface leftMenuApartment {
  jk_name: string;
  area_total: number;
  type_apart: string;
}

export interface leftMenuCalculate {
  total: number;
  works: number;
  materials: number;
  materialTotal: number;
  materialsFinishing: number;
}
export interface leftMenuData {
  options: leftMenuOptions;
  apartment: leftMenuApartment;
  calculate: leftMenuCalculate;
}
