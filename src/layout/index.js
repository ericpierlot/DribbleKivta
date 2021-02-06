import React from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header title='Kivta' />
      <main>{children}</main>
      <Footer title='Kivta' />
    </>
  );
};

export default Layout;
