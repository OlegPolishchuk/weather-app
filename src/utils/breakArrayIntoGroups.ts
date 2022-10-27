import { DaysWeather, DaysWeatherData } from 'store/slices/currentWeatherSlice/types';

export const breakArrayIntoGroups = (data: DaysWeather[]): DaysWeatherData => {
  const result: DaysWeatherData = {};

  for (let i = 0; i < data.length; i += 1) {
    const currentDate = data[i].dt_txt.split(' ')[0];

    if (!result[currentDate]) {
      result[currentDate] = [];
    } else {
      result[currentDate].push(data[i]);
    }
  }

  return result;
};
