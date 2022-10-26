export interface CurrentWeather {
  weather: Weather;
  isLoading: boolean;
  error: string;
}

export interface Response {
  status: number;
  message: string;
}

export interface Weather {}
