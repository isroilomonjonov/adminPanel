import { NavData } from "../interface";
import Dashboard from "../pages/dashboard/dashboard";
import Main from "../pages/main/main";

export const navData: NavData[] = [
    { id: 1, title: "Dashboard", link: "/", element: <Dashboard /> },
    { id: 2, title: "Main", link: "/main", element: <Main /> },
  ];
  