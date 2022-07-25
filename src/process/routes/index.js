import * as Paths from './paths.js';
import Pages from '../../show/pages';

const Home = {
  element: Pages.Home,
  path: Paths.HOME_PATH
};

const Standings = {
  element: Pages.Standings,
  path: Paths.STANDINGS_PATH
};

const Admin = {
  element: Pages.Admin,
  path: Paths.ADMIN_PATH
};

const routes = [Home, Standings, Admin];

export default routes;
