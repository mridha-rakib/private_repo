import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Users,
  BarChart3,
  Database,
  MessageSquare,
  Settings,
  Search,
  ChevronUp,
} from "lucide-react";
import { CMIcon, EyeIcon, TrashIcon } from "../../assets/logos/logo";
// import DeleteConfirmationModal from "../../components/modal/ConfirmationModal";
import ConfirmationModal from "../../components/modal/ConfirmationModal";
import { Pagination } from "../../components/pagination/Pagination";

export default function DataManagement() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showBanModal, setShowBanModal] = useState(false);
  const [userToAction, setUserToAction] = useState(null); // Track which user is being acted upon

  const [users, setUsers] = useState([
    {
      id: "LS8 3DN",
      name: "Guy Hawkins",
      email: "ckcirn12@gmail.com",
      status: "Active",
    },
    {
      id: "CH66 2RD",
      name: "Cameron Williamson",
      email: "tranthuy.nute@gmail.com",
      status: "Active",
    },
    {
      id: "FK6 6NA",
      name: "Kathryn Murphy",
      email: "vuhaithuongnute@gmail.com",
      status: "Active",
    },
    {
      id: "RM10 9DG",
      name: "Darrell Steward",
      email: "binhan628@gmail.com",
      status: "Banned",
    },
    {
      id: "G72 7ND",
      name: "Marvin McKinney",
      email: "tienlapspkind@gmail.com",
      status: "Banned",
    },
    {
      id: "AL5 2TR",
      name: "Cody Fisher",
      email: "manhhachkl08@gmail.com",
      status: "Active",
    },
    {
      id: "KY10 3AU",
      name: "Arlene McCoy",
      email: "danghoang87hi@gmail.com",
      status: "Active",
    },
    {
      id: "LL13 9AE",
      name: "Ronald Richards",
      email: "nvt.issi.nute@gmail.com",
      status: "Active",
    },
    {
      id: "SE18 6WF",
      name: "Theresa Webb",
      email: "thuhang.nute@gmail.com",
      status: "Active",
    },
    {
      id: "AB1 2CD",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      status: "Active",
    },
    {
      id: "EF3 4GH",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      status: "Banned",
    },
    {
      id: "IJ5 6KL",
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      status: "Active",
    },
    {
      id: "MN7 8OP",
      name: "Diana Prince",
      email: "diana.prince@example.com",
      status: "Active",
    },
    {
      id: "QR9 0ST",
      name: "Eve Adams",
      email: "eve.adams@example.com",
      status: "Banned",
    },
    {
      id: "UV1 2WX",
      name: "Frank Miller",
      email: "frank.miller@example.com",
      status: "Active",
    },
    {
      id: "YZ3 4AB",
      name: "Grace Lee",
      email: "grace.lee@example.com",
      status: "Active",
    },
    {
      id: "CD5 6EF",
      name: "Henry Ford",
      email: "henry.ford@example.com",
      status: "Banned",
    },
    {
      id: "GH7 8IJ",
      name: "Ivy Green",
      email: "ivy.green@example.com",
      status: "Active",
    },
    {
      id: "KL9 0MN",
      name: "Jack Black",
      email: "jack.black@example.com",
      status: "Active",
    },
    {
      id: "OP1 2QR",
      name: "Karen White",
      email: "karen.white@example.com",
      status: "Active",
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 9;
  const totalPages = Math.ceil(users.length / usersPerPage);
  const paginatedUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Handle viewing user profile
  const handleViewUser = (user) => {
    navigate(`/dashboard/users/${user.id}`);
  };

  return (
    <>
      <div className="w-full">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h1 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900">
            User Account Delete Request
          </h1>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="bg-[#EEE6FF] px-4 sm:px-6 py-3">
            <div className="grid grid-cols-10 gap-2 sm:gap-4 text-xs sm:text-sm font-medium text-gray-700">
              <div className="col-span-1">
                No
              </div>
              <div className="col-span-2">
                ID
              </div>
              <div className="col-span-3">
                User Name
              </div>
              <div className="col-span-3">
                Email
              </div>
              <div className="col-span-1 text-right pr-12">
                Actions
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {paginatedUsers.map((user, index) => (
              <div
                key={user.id}
                className="px-4 sm:px-6 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-10 gap-2 sm:gap-4 items-center">
                  <div className="col-span-1 text-xs sm:text-sm text-gray-900">
                    {String(
                      (currentPage - 1) * usersPerPage + index + 1
                    ).padStart(2, "0")}
                  </div>
                  <div className="col-span-2 text-xs sm:text-sm font-medium text-gray-900 truncate">
                    {user.id}
                  </div>
                  <div className="col-span-3 text-xs sm:text-sm text-gray-900 truncate">
                    {user.name}
                  </div>
                  <div className="col-span-3 text-xs sm:text-sm text-gray-600 truncate">
                    {user.email}
                  </div>
                  <div className="col-span-1 flex justify-end pr-12">
                    <button
                      onClick={() => {
                        setUserToAction(user);
                        setShowDeleteModal(true);
                      }}
                      className="p-1.5 sm:p-2 text-red-500 hover:bg-red-50 rounded-full border border-red-200 transition-colors"
                      title="Delete"
                    >
                      <TrashIcon
                        height={16}
                        width={16}
                        className="sm:h-5 sm:w-5"
                        fill="#DD2C2C"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {paginatedUsers.map((user, index) => (
            <div
              key={user.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex space-x-2 pt-3 w-full  border-gray-100 ">
                      <div className="flex  w-full">
                        <span className="text-xs text-gray-500">
                          #
                          {String(
                            (currentPage - 1) * usersPerPage + index + 1
                          ).padStart(2, "0")}
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          {user.id}
                        </span>
                      </div>
                      <div className="flex justify-end">
                        <button
                          onClick={() => {
                            setUserToAction(user);
                            setShowDeleteModal(true);
                          }}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full border border-red-200 transition-colors"
                        >
                          <TrashIcon height={18} width={18} fill="#DD2C2C" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {user.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{user.email}</p>
                  <span
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                        user.status === "Active" ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></span>
                    {user.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
        PerPage={usersPerPage}
        totalItems={users.length}
        />

        {/* Confirmation Modal */}
        {showDeleteModal && (
          <ConfirmationModal
            isOpen={showDeleteModal}
            onClose={() => {
              setShowDeleteModal(false);
              setUserToAction(null);
            }}
            onConfirm={() => {
              if (userToAction) {
                // Remove user from the users array
                setUsers((prevUsers) =>
                  prevUsers.filter((user) => user.id !== userToAction.id)
                );
                console.log(`User ${userToAction.name} deleted`);
              }
              setShowDeleteModal(false);
              setUserToAction(null);
            }}
            title={`Delete ${userToAction?.name || "this user"}`}
            option1="Delete"
            option2="Cancel"
          />
        )}
        {showBanModal && (
          <ConfirmationModal
            isOpen={showBanModal}
            onClose={() => {
              setShowBanModal(false);
              setUserToAction(null);
            }}
            onConfirm={() => {
              if (userToAction) {
                // Toggle user status between Active and Banned
                setUsers((prevUsers) =>
                  prevUsers.map((user) =>
                    user.id === userToAction.id
                      ? {
                          ...user,
                          status:
                            user.status === "Active" ? "Banned" : "Active",
                        }
                      : user
                  )
                );
                const newStatus =
                  userToAction.status === "Active" ? "Banned" : "Active";
                console.log(
                  `User ${userToAction.name} status changed to ${newStatus}`
                );
              }
              setShowBanModal(false);
              setUserToAction(null);
            }}
            title={
              userToAction?.status === "Active"
                ? "Ban User"
                : "Unban User"
            }
            option1={
              userToAction?.status === "Active"
                ? "Ban"
                : "Unban"
            }
            option2={"Cancel"}
          />
        )}
      </div>
    </>
  );
}
