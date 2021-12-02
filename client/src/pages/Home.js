import React from 'react';
import SidebarComponent from '../components/SidebarComponent';
import Fullpage from '../components/Fullpage';

const Home = ({ history }) => {
  return (
    <>
      <SidebarComponent></SidebarComponent>
      <Fullpage></Fullpage>
    </>
  );
};
export default Home;
