export interface CurrentWeather {
  weather: Weather;
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

export interface DaysWeather extends Weather {
  dt: number;
  dt_txt: string;
}

export interface DaysWeatherData {
  [key: string]: DaysWeather[];
}
