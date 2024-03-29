import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Paths from 'process/routes/paths';
import { Footer, Navbar } from 'show/components';
import { privateRoutes, publicRoutes } from 'process/routes';

const Application = ({ currentUser }) => {
  return (
    <div className='flex flex-col justify-between items-center h-screen'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {privateRoutes.map(route => (
            <Route
              path={route.path}
              key={route.path}
              element={
                currentUser.isLoggedIn ? (
                  <route.element />
                ) : (
                  <Navigate to={Paths.public.HOME_PATH} replace />
                )
              }
            />
          ))}
          {publicRoutes.map(route => (
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

Application.defaultProps = {
  currentUser: {}
};

Application.propTypes = {
  currentUser: PropTypes.object
};

export default Application;
