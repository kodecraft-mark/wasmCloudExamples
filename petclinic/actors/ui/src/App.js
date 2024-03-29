import React, { useState } from 'react';

import ErrorBoundary from './ErrorBoundary';
import Nav from './Nav';
import Owners from './Owners';
import PetTypes from './PetTypes';
import Vets from './Vets';

function App() {
  const [page, setPage] = useState('owners')

  const renderPage = () => {
    switch (page) {
      case 'owners':
        return <Owners />;
      case 'vets':
        return <Vets />;
      case 'petTypes':
        return <PetTypes />;
      default:
        return <Owners />;
    }
  }

  return (
    <div className="overflow-x-hidden h-screen overflow-y-scroll">
      <Nav changePage={(page) => setPage(page)} />
      <div className="container mx-auto px-8 pt-8 relative">
        <ErrorBoundary>
          <img src="/images/cat.png" className="absolute top-0 sm:-left-[30%] -left-[38%] opacity-75 -z-10" />
          <img src="/images/dog.png" className="absolute top-1/2 sm:-right-[30%] -right-[35%] opacity-75 -z-10" />
          {renderPage()}
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
