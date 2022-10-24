import React from 'react';

import './styles/index.scss';

import { Route, Routes } from 'react-router-dom';

import Home from 'components/pages/home/Home';
import MonthStatistics from 'components/pages/monthStatistics/MonthStatistics';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/month-statistic" element={<MonthStatistics />} />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
};

export default App;
