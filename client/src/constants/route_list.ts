import React from "react";
import { IRoute } from "src/types/route";
import { CPath } from "./path";
import DefaultLayout from "src/layouts/default_layout";

const Home = React.lazy(() => import("src/pages/home"));
const Auth = React.lazy(() => import("src/pages/authentication"));
const Profile = React.lazy(() => import("src/pages/profiles"));
const AboutUs = React.lazy(() => import("src/pages/about_us"));
const NewRelease = React.lazy(() => import("src/pages/new-releases"));
const Wishlist = React.lazy(() => import("src/pages/wishlist"));
const UpComingGame = React.lazy(() => import("src/pages/upcoming-games"));
const Bundles = React.lazy(() => import("src/pages/bundles"));
const Search = React.lazy(() => import("src/pages/search"));
const TopSellers = React.lazy(() => import("src/pages/top_seller"));
export const CRouteList: IRoute[] = [
  {
    path: CPath.home,
    name: "Home",
    component: Home,
    layout: DefaultLayout,
  },
  {
    path: CPath.authentication,
    name: "Authen",
    component: Auth,
    layout: DefaultLayout,
  },
  {
    path: CPath.profile,
    name: "Profile",
    component: Profile,
    layout: DefaultLayout,
  },
  {
    path: CPath.aboutUs,
    name: "AboutUs",
    component: AboutUs,
    layout: DefaultLayout,
  },
  {
    path: CPath.newRelease,
    name: "newReleases",
    component: NewRelease,
    layout: DefaultLayout,
  },
  {
    path: CPath.wishlist,
    name: "Wishlist",
    component: Wishlist,
    layout: DefaultLayout,
  },
  {
    path: CPath.upComing,
    name: "Wishlist",
    component: UpComingGame,
    layout: DefaultLayout,
  },
  {
    path: CPath.bundles,
    name: "Bundles",
    component: Bundles,
    layout: DefaultLayout,
  },
  {
    path: CPath.search,
    name: "Search",
    component: Search,
    layout: DefaultLayout,
  },
  {
    path: CPath.topSeller,
    name: "TopSellers",
    component: TopSellers,
    layout: DefaultLayout,
  },
];
