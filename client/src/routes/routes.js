import Admin from "../pages/Admin";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/const";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";
import Shop from "../pages/Shop";
import DevicePage from "../pages/DevicePage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    element: <Admin/>
  },
  {
  path: BASKET_ROUTE,
    element: <Basket/>
  }
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    element: <Auth/>
  },
  {
    path: SHOP_ROUTE,
    element: <Shop/>
  },
  {
    path: REGISTRATION_ROUTE,
    element: <Auth/>
  },
  {
    path: DEVICE_ROUTE + '/:id',
    element: <DevicePage/>
  }
]