import React from 'react';
import Routine from './pages/Routine';
import Credit from './pages/Credit';

const App: React.FC = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col justify-between'>
        <Routine />
        <Credit />
      </div>
    </>
  );
};

export default App;
