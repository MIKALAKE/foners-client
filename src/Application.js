import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Standings } from './show/pages';
import { Footer, Navbar } from './show/components';

const Application = () => {
  return (
    <div className='flex flex-col justify-between items-center h-screen'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/standings' element={<Standings />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Application;
