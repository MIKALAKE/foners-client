import Pages from 'show/pages';
import Paths from 'process/routes/paths';

const Admin = {
  element: Pages.Admin,
  path: Paths.private.ADMIN_PATH
};

const Constructor = {
  element: Pages.Constructor,
  path: Paths.public.CONSTRUCTOR_PATH
};

const Driver = {
  element: Pages.Driver,
  path: Paths.public.DRIVER_PATH
};

const Home = {
  element: Pages.Home,
  path: Paths.public.HOME_PATH
};

const LogIn = {
  element: Pages.LogIn,
  path: Paths.public.LOGIN_PATH
};

const Register = {
  element: Pages.Register,
  path: Paths.public.REGISTER_PATH
};

const Standings = {
  element: Pages.Standings,
  path: Paths.public.STANDINGS_PATH
};

const privateRoutes = [Admin];
const publicRoutes = [Constructor, Driver, Home, LogIn, Register, Standings];

export { publicRoutes, privateRoutes };
