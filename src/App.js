import React from 'react';
import Header from './components/Header';
import Catalog from './components/Catalog';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <main>
        <Catalog />
      </main>
    </div>
  );
}
