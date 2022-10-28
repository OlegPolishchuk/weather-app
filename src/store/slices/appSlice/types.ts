export interface AppInitialState {
  isLoading: boolean;
  error: string;
  cities: City[];
  currentCity: City;
}

export interface City {
  label: string;
  value: string;
}
