import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CMIcon, EyeIcon, TrashIcon } from "../../assets/logos/logo";
import ConfirmationModal from "../../components/modal/ConfirmationModal";
import { user } from "../../constants/users"; // Importing users data
import { Pagination } from "../../components/pagination/Pagination";

export default function Users() {
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showBanModal, setShowBanModal] = useState(false);
  const [userToAction, setUserToAction] = useState(null); // Track which user is being acted upon
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [users, setUsers] = useState(user);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.id.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / usersPerPage);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );

  // Handle viewing user profile
  const handleViewUser = (user) => {
    navigate(`/dashboard/users/${user.id}`);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h1 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Users
        </h1>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
          <div className="relative">
            {/* <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" /> */}
            <input
              type="text"
              placeholder={"Search"}
              className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative">
            <select
              className="w-full sm:w-auto appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All</option>
              <option>Active</option>
              <option>Banned</option>
            </select>
            {/* <ChevronUp className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-180 w-4 h-4 text-gray-400" /> */}
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="bg-[#EEE6FF] px-6 py-4">
          <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
            <div className="col-span-1">{"No"}</div>
            <div className="col-span-2">{"ID"}</div>
            <div className="col-span-2">{"User Name"}</div>
            <div className="col-span-3">{"Email"}</div>
            <div className="col-span-2">{"Status"}</div>
            <div className="col-span-2">{"Actions"}</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-gray-200">
          {paginatedUsers.map((user, index) => (
            <div
              key={user.id}
              className="px-6 py-4 hover:bg-gray-50 transition-colors"
            >
              <div className="grid grid-cols-12 gap-4 items-center">
                <div className="col-span-1 text-sm text-gray-900">
                  {String(
                    (currentPage - 1) * usersPerPage + index + 1
                  ).padStart(2, "0")}
                </div>
                <div className="col-span-2 text-sm font-medium text-gray-900">
                  {user.id}
                </div>
                <div className="col-span-2 text-sm text-gray-900">
                  {user.name}
                </div>
                <div className="col-span-3 text-sm text-gray-900 truncate">
                  {user.email}
                </div>
                <div className="col-span-2">
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
                <div className="col-span-2 flex items-center space-x-2">
                  <button
                    onClick={() => {
                      setUserToAction(user);
                      setShowBanModal(true);
                    }}
                    className={`${
                      user.status === "Active" ? "" : "bg-red-100 text-red-800"
                    } p-2 text-orange-500 hover:bg-orange-50  rounded-full border border-orange-200 transition-colors`}
                    aria-label={
                      user.status === "Active" ? "Ban User" : "Unban User"
                    }
                  >
                    <CMIcon fill="#DD612C" height={20} width={20} />
                  </button>
                  <button
                    onClick={() => handleViewUser(user)}
                    className="p-2 text-purple-500 hover:bg-purple-50 rounded-full border border-purple-200 transition-colors"
                  >
                    <EyeIcon height={20} width={20} />
                  </button>
                  <button
                    onClick={() => {
                      setUserToAction(user);
                      setShowDeleteModal(true);
                    }}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full border border-red-200 transition-colors"
                  >
                    <TrashIcon height={20} width={20} fill="#DD2C2C" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View: Card-style layout like Affiliate Product view */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {paginatedUsers.map((user, index) => (
          <div
            key={user.id}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex flex-col justify-between"
          >
            {/* Header: Index + Actions */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs text-gray-400 font-medium">
                #
                {String((currentPage - 1) * usersPerPage + index + 1).padStart(
                  2,
                  "0"
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    setUserToAction(user);
                    setShowBanModal(true);
                  }}
                  className={`${
                    user.status === "Active" ? "" : "bg-red-100 text-red-800"
                  } p-2 text-orange-500 hover:bg-orange-50  rounded-full border border-orange-200 transition-colors`}
                  aria-label={
                    user.status === "Active" ? "Ban User" : "Unban User"
                  }
                >
                  <CMIcon fill="#DD612C" height={18} width={18} />
                </button>
                <button
                  onClick={() => handleViewUser(user)}
                  className="p-1.5 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200"
                  aria-label="View"
                >
                  <EyeIcon height={18} width={18} />
                </button>
                <button
                  onClick={() => {
                    setUserToAction(user);
                    setShowDeleteModal(true);
                  }}
                  className="p-1.5 rounded-full bg-red-50 hover:bg-red-100 border border-red-200"
                  aria-label="Delete"
                >
                  <TrashIcon height={18} width={18} fill="#DD2C2C" />
                </button>
              </div>
            </div>

            {/* Body: User Details */}
            <div className="space-y-1 text-sm text-gray-700">
              <div>
                <span className="font-semibold">Name:</span> {user.name}
              </div>
              <div>
                <span className="font-semibold">Email:</span> {user.email}
              </div>
              <div>
                <span className="font-semibold">ID:</span> {user.id}
              </div>
              <div className="flex items-center">
                <span className="font-semibold">Status:</span>
                <span
                  className={`ml-1 flex items-center text-xs font-medium rounded-full px-2 py-0.5 ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-1 ${
                      user.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
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
        PerPage={usersPerPage}
        totalPages={totalPages}
        totalItems={totalUsers}
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
          title={"Delete User"}
          option1={"Delete User"}
          option2={"Cancel"}
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
                        status: user.status === "Active" ? "Banned" : "Active",
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
          title={userToAction?.status === "Active" ? "Ban User" : "Unban User"}
          option1={
            userToAction?.status === "Active" ? "Ban User" : "Unban User"
          }
          option2={"Cancel"}
        />
      )}
    </div>
  );
}
