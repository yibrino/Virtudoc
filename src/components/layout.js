/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import Header from './header/header';
import Footer from './footer';
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header className="header" />
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
}


