export interface CurrentWeather {
  weather: Weather;
  isLoading: boolean;
  error: string;
}

export interface Response {
  status: number;
  message: string;
}

export interface Weather {
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  name: string;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
}
