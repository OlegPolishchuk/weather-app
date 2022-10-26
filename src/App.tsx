import React, { useEffect } from 'react';

import './styles/index.scss';

import { Route, Routes } from 'react-router-dom';

import { WeatherAPI } from 'api';
import { Header, Home, MonthStatistics } from 'components';
import { Popup } from 'components/popup/Popup';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  useEffect(() => {
    WeatherAPI.getCurrentWeather('Minsk').then(res => {
      console.log(res);
    });
  }, []);

  return (
    <>
      <Popup />
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/month-statistic" element={<MonthStatistics />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default App;
