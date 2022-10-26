import axios from 'axios';

import { instance } from 'api/config';
import { GeoDataResponse } from 'api/types/types';
import { Weather } from 'store/slices/currentWeatherSlice/types';

export class WeatherAPI {
  static getCurrentWeather(city: string): Promise<Weather> {
    const geocodingSrc = `http://api.openweathermap.org/geo/1.0/direct?q={${city}&appid=${process.env.REACT_APP_API_KEY}`;

    return axios
      .get<GeoDataResponse[]>(geocodingSrc)
      .then(res => {
        const data = res.data[0];

        return instance.get(`weather?lat=${data.lat}&lon=${data.lon}`);
      })
      .then(res => res.data)
      .catch(e => `Error: ${e}`);
  }
}
