export interface CurrentWeather {
  weather: any;
  isLoading: boolean;
  response: Response;
}

export interface Response {
  status: number;
  message: string;
}
