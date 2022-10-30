export interface AppInitialState {
  isLoading: boolean;
  error: string;
  cities: City[];
  currentCity: City;
  isInitialized: boolean;
  isCityInitialized: boolean;
}

export interface City {
  label: string;
  value: string;
}
