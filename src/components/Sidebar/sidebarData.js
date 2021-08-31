import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
    private: false,
  },
  {
    title: "Favorite Videos",
    path: "/favorite",
    icon: <BsIcons.BsMusicNoteList />,
    cName: "nav-text",
    private: true,
  },
];

export const filterRoutes = (isAuthenticated) => {
  if (!isAuthenticated) {
    return sidebarData.filter((route) => !route.private);
  }
  return sidebarData;
};
