import React, { Fragment } from 'react';
import './App.scss';
import Header from './Header';
import FractionRupiah from './FractionRupiah';
import { Helmet } from "react-helmet";

function App() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pecahan Rupiah</title>
      </Helmet>
      <header className="c-header">
        <Header title="Pecahan Rupiah" />
      </header>
      <FractionRupiah />
    </Fragment>
  );
}

export default App;
