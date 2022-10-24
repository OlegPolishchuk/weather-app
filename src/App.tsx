import React from 'react';

import './styles/index.scss';

import { Route, Routes } from 'react-router-dom';

import { Header, Home, MonthStatistics } from 'components';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/month-statistic" element={<MonthStatistics />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
