import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from 'process/routes';
import { Footer, Navbar } from 'show/components';

const Application = () => {
  return (
    <div className='flex flex-col justify-between items-center h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map(route => (
            <Route
              path={route.path}
              key={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default Application;
