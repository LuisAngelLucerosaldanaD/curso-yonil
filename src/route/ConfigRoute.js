import PageNotFount from "../view/404";
import HomeView from "../view/Home";
import AboutView from "../view/About";

export default [
  {
    path: "/",
    exact: true,
    page: HomeView,
  },
  {
    path: "/about",
    exact: true,
    page: AboutView,
  },
  {
    path: "*",
    page: PageNotFount,
  },
];
