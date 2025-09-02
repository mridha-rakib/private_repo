// src/components/layout/Topbar/Topbar.jsx
// import React, { useState } from "react";
// import { useAuth } from "../../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";

const Topbar = () => {
  // const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  // const [isProfileOpen, setIsProfileOpen] = useState(false);
  // const { currentUser, logout } = useAuth();
  // const navigate = useNavigate();
  // const notifications = [
  //   {
  //     id: 1,
  //     message: "New user registered",
  //     time: "2 hours ago",
  //     read: false,
  //     type: "user",
  //   },
  //   {
  //     id: 2,
  //     message: "Content needs approval",
  //     time: "5 hours ago",
  //     read: false,
  //     type: "content",
  //   },
  //   {
  //     id: 3,
  //     message: "Server maintenance scheduled",
  //     time: "1 day ago",
  //     read: true,
  //     type: "system",
  //   },
  //   {
  //     id: 4,
  //     message: "New feedback received",
  //     time: "2 days ago",
  //     read: true,
  //     type: "feedback",
  //   },
  // ];
  // const unreadCount = notifications.filter((n) => !n.read).length;
  // const handleLogout = () => {
  //   logout();
  //   navigate("/login");
  // };
  // const getNotificationIcon = (type) => {
  //   switch (type) {
  //     case "user":
  //       return (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5 text-blue-500"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
  //           />
  //         </svg>
  //       );
  //     case "content":
  //       return (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5 text-yellow-500"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  //           />
  //         </svg>
  //       );
  //     case "system":
  //       return (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5 text-red-500"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
  //           />
  //         </svg>
  //       );
  //     case "feedback":
  //       return (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5 text-green-500"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
  //           />
  //         </svg>
  //       );
  //     default:
  //       return (
  //         <svg
  //           xmlns="http://www.w3.org/2000/svg"
  //           className="h-5 w-5 text-gray-500"
  //           fill="none"
  //           viewBox="0 0 24 24"
  //           stroke="currentColor"
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  //           />
  //         </svg>
  //       );
  //   }
  // };
  // return (
  //   <div className="bg-white  py-6 px-6 relative">
  //     <div className="flex items-center justify-end">
  //       {" "}
  //       {/* Changed from justify-between to justify-end */}
  //       <div className="flex items-center space-x-4">
  //         {" "}
  //         {/* Removed self-end class */}
  //         {/* Notifications */}
  //         <div className="relative">
  //           <button
  //             className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none relative"
  //             onClick={() => {
  //               setIsNotificationOpen(!isNotificationOpen);
  //               setIsProfileOpen(false);
  //             }}
  //           >
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-5 w-5"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
  //               />
  //             </svg>
  //             {unreadCount > 0 && (
  //               <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
  //                 {unreadCount}
  //               </span>
  //             )}
  //           </button>
  //           {isNotificationOpen && (
  //             <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg overflow-hidden z-10 border border-gray-200">
  //               <div className="py-2 px-4 bg-gray-100 border-b flex justify-between items-center">
  //                 <h3 className="text-sm font-medium text-gray-700">
  //                   Notifications
  //                 </h3>
  //                 <button className="text-xs text-blue-600 hover:text-blue-800">
  //                   Mark all as read
  //                 </button>
  //               </div>
  //               <div className="max-h-60 overflow-y-auto">
  //                 {notifications.length === 0 ? (
  //                   <div className="py-4 px-4 text-center text-sm text-gray-500">
  //                     No notifications
  //                   </div>
  //                 ) : (
  //                   notifications.map((notification) => (
  //                     <div
  //                       key={notification.id}
  //                       className={`border-b border-gray-100 ${
  //                         notification.read ? "bg-white" : "bg-blue-50"
  //                       }`}
  //                     >
  //                       <div className="py-3 px-4 flex items-start">
  //                         <div className="flex-shrink-0">
  //                           {getNotificationIcon(notification.type)}
  //                         </div>
  //                         <div className="ml-3 flex-1">
  //                           <p className="text-sm font-medium text-gray-900">
  //                             {notification.message}
  //                           </p>
  //                           <p className="text-xs text-gray-500 mt-1">
  //                             {notification.time}
  //                           </p>
  //                         </div>
  //                         {!notification.read && (
  //                           <div className="flex-shrink-0">
  //                             <span className="h-2 w-2 rounded-full bg-blue-500"></span>
  //                           </div>
  //                         )}
  //                       </div>
  //                     </div>
  //                   ))
  //                 )}
  //               </div>
  //               <div className="py-2 px-4 bg-gray-100 border-t text-center">
  //                 <button className="text-xs text-blue-600 hover:text-blue-800">
  //                   View all notifications
  //                 </button>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //         {/* User profile dropdown */}
  //         <div className="relative">
  //           <button
  //             className="flex items-center space-x-2 focus:outline-none"
  //             onClick={() => {
  //               setIsProfileOpen(!isProfileOpen);
  //               setIsNotificationOpen(false);
  //             }}
  //           >
  //             <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
  //               {currentUser?.name?.charAt(0) || "U"}
  //             </div>
  //             <div className="hidden md:block text-left">
  //               <p className="text-sm font-medium text-gray-900">
  //                 {currentUser?.name || "User"}
  //               </p>
  //               <p className="text-xs text-gray-500">
  //                 {currentUser?.role || "Admin"}
  //               </p>
  //             </div>
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="h-4 w-4 text-gray-500"
  //               fill="none"
  //               viewBox="0 0 24 24"
  //               stroke="currentColor"
  //             >
  //               <path
  //                 strokeLinecap="round"
  //                 strokeLinejoin="round"
  //                 strokeWidth={2}
  //                 d="M19 9l-7 7-7-7"
  //               />
  //             </svg>
  //           </button>
  //           {isProfileOpen && (
  //             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
  //               <div className="px-4 py-2 border-b border-gray-100">
  //                 <p className="text-sm font-medium text-gray-900">
  //                   {currentUser?.name || "User"}
  //                 </p>
  //                 <p className="text-xs text-gray-500 truncate">
  //                   {currentUser?.email || "user@example.com"}
  //                 </p>
  //               </div>
  //               <a
  //                 href="#"
  //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className="h-4 w-4 inline mr-2"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
  //                   />
  //                 </svg>
  //                 Profile
  //               </a>
  //               <a
  //                 href="#"
  //                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className="h-4 w-4 inline mr-2"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  //                   />
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
  //                   />
  //                 </svg>
  //                 Settings
  //               </a>
  //               <div className="border-t border-gray-100"></div>
  //               <button
  //                 onClick={handleLogout}
  //                 className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  //               >
  //                 <svg
  //                   xmlns="http://www.w3.org/2000/svg"
  //                   className="h-4 w-4 inline mr-2"
  //                   fill="none"
  //                   viewBox="0 0 24 24"
  //                   stroke="currentColor"
  //                 >
  //                   <path
  //                     strokeLinecap="round"
  //                     strokeLinejoin="round"
  //                     strokeWidth={2}
  //                     d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
  //                   />
  //                 </svg>
  //                 Sign out
  //               </button>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Topbar;
