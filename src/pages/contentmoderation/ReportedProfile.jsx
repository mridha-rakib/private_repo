import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { CMIcon, TrashIcon } from "../../../icons/Logo";
import ConfirmationModal from "../../../modal/ConfirmationModal";

const ReportedProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isBanned, setIsBanned] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showBanModal, setShowBanModal] = useState(false);

  // Fetch user data based on userId
  useEffect(() => {
    const mockUser = {
      id: userId,
      name: "Guy Hawkins",
      email: "ckcirn12@gmail.com",
      status: "Active",
      bio: "Hey, I am Guy Hawkins known as great outfit collector",
      dateOfBirth: "Jan 1, 2000",
      gender: "Male",
      location: "Moscow, Russia",
      totalItems: 25,
      totalOutfits: 15,
      totalLookbooks: 8,
      totalPosts: 42,
      totalFollowers: 150,
      totalFollowing: 200,
    };
    setUser(mockUser);
    setIsBanned(mockUser.status === "Banned");
  }, [userId]);

  const handleBack = () => {
    navigate("/dashboard/content-moderation");
  };

  const handleDeleteUser = (userToDelete) => {
    console.log(`User ${userToDelete.name} deleted`);
    navigate("/dashboard/content-moderation");
  };

  const handleBanUser = (userToBan, newBanStatus) => {
    setIsBanned(newBanStatus);
    console.log(
      `User ${userToBan.name} status changed to ${
        newBanStatus ? "Banned" : "Active"
      }`
    );
  };

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  const userInfo = {
    name: user.name,
    username: user.id, // Using ID as username for now
    email: user.email,
    bio: user.bio,
    dateOfBirth: user.dateOfBirth,
    gender: user.gender,
    location: user.location,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    isActive: user.status === "Active",
  };

  const accountStats = {
    totalItems: 50,
    totalOutfits: 50,
    totalLookbooks: 50,
  };

  const communityStats = {
    totalPosts: 50,
    totalFollowers: 50,
    totalFollowing: 50,
  };

  return (
    <div className=" ">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ChevronRight size={20} />
          <span>Content Moderation</span>
        </button>
        <span className="text-gray-600">
          <ChevronRight size={20} />
        </span>
        <span className="text-gray-900 font-medium">Report Details</span>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg">
        {/* Profile Header */}
        <h1 className="text-[32px] font-bold">Reported Profile</h1>
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={userInfo.avatar}
                  alt={userInfo.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                  {userInfo.name}
                </h1>
                <div className="flex items-center gap-3">
                  <span className="text-[16px] font-medium">
                    {userInfo.username}
                  </span>
                  <div>
                    <span
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        isBanned === true
                          ? "bg-red-200 text-gray-800"
                          : "bg-green-200 text-gray-800"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                          isBanned === true ? "bg-red-500" : "bg-green-500"
                        }`}
                      ></span>
                      {isBanned ? "Banned" : "Active"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => setShowBanModal(true)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 cursor-pointer text-base w-full sm:w-auto ${
                  isBanned
                    ? "bg-[#FCEFEA] text-[#DD612C] border-red-500 hover:bg-red-100"
                    : "border-[#DD612C] text-[#DD612C] hover:bg-red-50"
                }`}
              >
                <CMIcon fill="#DD612C" height={24} width={24} />
                {isBanned ? "Unban" : "Ban"}
              </button>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-pointer text-base w-full sm:w-auto"
              >
                <TrashIcon fill="#DD612C" height={24} width={24} />
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
    <div className="space-y-6">
      <div>
        <label className="block text-[18px] font-semibold text-gray-700 mb-1">
          Email
        </label>
        <div className="text-[16px] font-medium text-gray-900 border-b border-[#D8D4E0] py-3">
          john.doe@example.com
        </div>
      </div>
      <div>
        <label className="block text-[18px] font-semibold text-gray-700 mb-1">
          Date Of Birth
        </label>
        <div className="text-[16px] font-medium text-gray-900 border-b border-[#D8D4E0] py-3">
          1990-01-01
        </div>
      </div>
      <div>
        <label className="block text-[18px] font-semibold text-gray-700 mb-1">
          Location
        </label>
        <div className="text-[16px] font-medium text-gray-900 border-b border-[#D8D4E0] py-3">
          New York, USA
        </div>
      </div>
    </div>

    <div className="space-y-6">
      <div>
        <label className="block text-[18px] font-semibold text-gray-700 mb-1">
          Username
        </label>
        <div className="text-[16px] font-medium text-gray-900 border-b border-[#D8D4E0] py-3">
          johndoe
        </div>
      </div>
      <div>
        <label className="block text-[18px] font-semibold text-gray-700 mb-1">
          Bio
        </label>
        <div className="text-[16px] font-medium text-gray-900 border-b border-[#D8D4E0] py-3">
          Passionate about tech and design.
        </div>
      </div>
      <div>
        <label className="block text-[18px] font-semibold text-gray-700 mb-1">
          Gender
        </label>
        <div className="text-[16px] font-medium text-gray-900 border-b border-[#D8D4E0] py-3">
          Male
        </div>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* Confirmation Modals */}
      {showDeleteModal && (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false);
          }}
          onConfirm={() => {
            handleDeleteUser(user);
            setShowDeleteModal(false);
          }}
          title={`Are you sure you want to delete ${user?.name}?`}
          option1="Yes, delete it"
          option2="Cancel"
        />
      )}

      {showBanModal && (
        <ConfirmationModal
          isOpen={showBanModal}
          onClose={() => {
            setShowBanModal(false);
          }}
          onConfirm={() => {
            const newBanStatus = !isBanned;
            handleBanUser(user, newBanStatus);
            setShowBanModal(false);
          }}
          title={`Are you sure you want to ${isBanned ? "unban" : "ban"} ${
            user?.name
          }?`}
          option1={`Yes, ${isBanned ? "unban" : "ban"} user`}
          option2="Cancel"
        />
      )}
    </div>
  );
};

export default ReportedProfile;
