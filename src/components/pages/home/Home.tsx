import React from 'react';

import s from './Home.module.scss';

import { ReturnComponentType } from 'types';

const Home = (): ReturnComponentType => {
  return <div className={s.home}>Home lander</div>;
};

export default Home;
