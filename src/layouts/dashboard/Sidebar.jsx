// src/components/layout/Sidebar/Sidebar.jsx
import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
import SidebarItems from "./SidebarItems";

import {
  RaiLogo,
  DIcon,
  UIcon,
  CMIcon,
  AIIcon,
  ProductIcon,
  MADIcon,
  UFIcon,
  DMIcon,
  LOIcon,
} from "../../assets/logos/logo";

const Sidebar = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { logout } = useAuth();
  // const menuItems = [
  //   {
  //     name: "Dashboard",
  //     path: "/",
  //     icon: <DIcon width={20} height={20} fill="#4B5563" />,
  //   },
  //   // In your Sidebar component
  //   {
  //     name: "Users",
  //     path: "/users",
  //     icon: <UIcon width={20} height={20} fill="#4B5563" />,
  //   },
  //   {
  //     name: "Content Moderation",
  //     path: "/content-moderation",
  //     icon: <CMIcon width={20} height={20} fill="#4B5563" />,
  //   },
  //   {
  //     name: "Analytics",
  //     path: "/analytics",
  //     icon: <AIIcon width={20} height={20} fill="#4B5563" />,
  //   },
  //   {
  //     name: "Products",
  //     path: "/products",
  //     icon: (
  //       <ProductIcon width={20} height={20} fill="#4B5563" stroke="#4B5563" />
  //     ),
  //   },
  //   {
  //     name: "Affiliated Data",
  //     path: "/affiliated-data",
  //     icon: <MADIcon width={20} height={20} fill="#4B5563" />,
  //   },
  //   {
  //     name: "Feedback",
  //     path: "/feedback",
  //     icon: <UFIcon width={20} height={20} fill="#4B5563" />,
  //   },
  //   {
  //     name: "Data Management",
  //     path: "/data-management",
  //     icon: (
  //       <DMIcon width={20} height={20} fill="#4B5563" centerFill="#5700FE" />
  //     ),
  //   },
  // ];
  // const handleLogout = () => {
  //   logout();
  //   navigate("/login");
  // };
  // return (
  //   <div className="w-64 bg-white h-screen shadow-md flex flex-col">
  //     <div className="pt-5 pb-3 ">
  //       <div className="flex items-center">
  //         <RaiLogo width={200} height={50} />
  //         {/* <h2 className="text-xl font-semibold text-gray-800 ml-3">Admin Panel</h2> */}
  //       </div>
  //     </div>
  //     <nav className="flex-1 p-4 overflow-y-auto">
  //       {menuItems.map((item) => (
  //         <SidebarItems
  //           key={item.name}
  //           item={item}
  //           isActive={
  //             location.pathname === item.path ||
  //             (item.hasView && location.pathname === item.viewPath)
  //           }
  //         />
  //       ))}
  //     </nav>
  //     <div className="p-4 ">
  //       <div
  //         className="flex items-center p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors"
  //         onClick={handleLogout}
  //       >
  //         <LOIcon width={20} height={20} stroke="#4B5563" />
  //         <span className="ml-3 text-sm">Logout</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Sidebar;
