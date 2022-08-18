const ADMIN_PATH = '/admin';
const CONSTRUCTOR_PATH = '/constructor/:id';
const DRIVER_PATH = '/driver/:id';
const HOME_PATH = '/';
const LOGIN_PATH = '/login';
const REGISTER_PATH = '/register';
const STANDINGS_PATH = '/standings';

const privatePaths = { ADMIN_PATH };

const publicPaths = {
  CONSTRUCTOR_PATH,
  DRIVER_PATH,
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
  STANDINGS_PATH
};

const paths = { public: publicPaths, private: privatePaths };

export default paths;
