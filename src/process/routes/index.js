import * as Paths from './paths.js';
import Pages from '../../show/pages';

const Admin = {
  element: Pages.Admin,
  path: Paths.ADMIN_PATH
};
const Home = {
  element: Pages.Home,
  path: Paths.HOME_PATH
};

const Standings = {
  element: Pages.Standings,
  path: Paths.STANDINGS_PATH
};

const routes = [Admin, Home, Standings];

export default routes;
