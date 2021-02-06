import React from 'react';
import Layout from './layout';
import { Home } from './page/home';
import './assets/style.css';
const App = () => {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;
