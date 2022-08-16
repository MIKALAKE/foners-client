import Pages from 'show/pages';

import * as Paths from './paths.js';

const Admin = {
  element: Pages.Admin,
  path: Paths.ADMIN_PATH
};

const Constructor = {
  element: Pages.Constructor,
  path: Paths.CONSTRUCTOR_PATH
};

const Driver = {
  element: Pages.Driver,
  path: Paths.DRIVER_PATH
};

const Home = {
  element: Pages.Home,
  path: Paths.HOME_PATH
};

const Standings = {
  element: Pages.Standings,
  path: Paths.STANDINGS_PATH
};

const routes = [Admin, Constructor, Driver, Home, Standings];

export default routes;
