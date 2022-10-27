import { TabsValue } from 'enums';
import { DaysWeather, DaysWeatherData } from 'store/slices/currentWeatherSlice/types';

const threeDaysCount = 3;
const fiveDaysCount = 5;

export const getCardsByTab = (tab: string, allData: DaysWeatherData): DaysWeather[] => {
  const result = [];
  const props = Object.keys(allData);

  switch (tab) {
    case TabsValue.ThreeDays:
      if (props.length) {
        for (let i = 0; i < threeDaysCount; i += 1) {
          result.push(...allData[props[i]]);
        }
      }

      return result;

    case TabsValue.FiveDays:
      if (props.length) {
        for (let i = 0; i < fiveDaysCount; i += 1) {
          console.log(allData[props[i]]);

          result.push(...allData[props[i]]);
        }
      }

      return result;

    default:
      return [];
  }
};
