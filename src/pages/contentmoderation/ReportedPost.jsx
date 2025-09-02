import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CMIcon, TrashIcon } from "../../../icons/Logo";
import ConfirmationModal from "../../../modal/ConfirmationModal";

export default function ReportedPost() {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isBanned, setIsBanned] = useState(false);
  const [showBanModal, setShowBanModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const mockUser = {
      reportid: reportId,
      name: "Fashion Post",
      email: "user@example.com",
      username: "fashionuser",
      avatar: "../shirt.png",
      dateOfBirth: "1995-05-15",
      location: "Los Angeles, USA",
      bio: "Fashion enthusiast",
      gender: "Female",
    };
    setUser(mockUser);
  }, [reportId]);

  const handleBack = () => {
    navigate("/dashboard/content-moderation");
  };

  const handleDeleteUser = (userToDelete) => {
    console.log(`Post by ${userToDelete.name} deleted`);
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

  return (
    <div className="min-h-screen">
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
        <span className="text-gray-900 font-medium">Reported Details</span>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6 ">
          {/* Title & Status */}
          <div className="flex items-center gap-4">
            <h1 className="text-[32px] font-bold">Reported Post</h1>
            <div
              className={`flex items-center gap-2 px-2 rounded-full py-1 ${
                isBanned ? "bg-red-100" : "bg-green-100"
              }`}
            >
              <span className="text-sm text-gray-600">
                {isBanned ? "Banned" : "Active"}
              </span>
              <div
                className={`w-2 h-2 rounded-full ${
                  isBanned ? "bg-red-500" : "bg-green-500"
                }`}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-2 self-start md:self-auto">
            <button
              onClick={() => setShowBanModal(true)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-200 cursor-pointer ${
                isBanned
                  ? "bg-[#FCEFEA] text-[#DD612C] border-red-500 hover:bg-red-100"
                  : "border-[#DD612C] text-[#DD612C] hover:bg-red-50"
              }`}
            >
              <CMIcon
                fill={isBanned ? "#DD612C" : "#DD612C"}
                height={24}
                width={24}
              />
            </button>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
            >
              <TrashIcon fill="#DD612C" height={24} width={24} />
            </button>
          </div>
        </div>

        {/* Image and any other content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              className="w-full max-w-xs h-auto md:w-[280px] md:h-[220px] object-contain"
              src="/shirt.png"
              alt={user.name}
            />
            {/* Additional content can go here */}
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[18px] font-semibold text-gray-700 mb-1">
                Reported ID
              </label>
              <div className="text-gray-900 text-[16px] font-medium border-b border-[#D8D4E0] py-[12px]">
                #123456
              </div>
            </div>
            <div>
              <label className="block text-[18px] font-semibold text-gray-700 mb-1">
                Post Title
              </label>
              <div className="text-gray-900 text-[16px] font-medium border-b border-[#D8D4E0] py-[12px]">
                Offensive Comment on Product
              </div>
            </div>
            <div>
              <label className="block text-[18px] font-semibold text-gray-700 mb-1">
                Reported Date
              </label>
              <div className="text-gray-900 text-[16px] font-medium border-b border-[#D8D4E0] py-[12px]">
                July 29, 2025
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[18px] font-semibold text-gray-700 mb-1">
                Reported By
              </label>
              <div className="text-gray-900 text-[16px] font-medium border-b border-[#D8D4E0] py-[12px]">
                johndoe@example.com
              </div>
            </div>
            <div>
              <label className="block text-[18px] font-semibold text-gray-700 mb-1">
                Reason
              </label>
              <div className="text-gray-900 text-[16px] font-medium border-b border-[#D8D4E0] py-[12px]">
                Hate speech / abusive content
              </div>
            </div>
            <div>
              <label className="block text-[18px] font-semibold text-gray-700 mb-1">
                Creation Date
              </label>
              <div className="text-gray-900 text-[16px] font-medium border-b border-[#D8D4E0] py-[12px]">
                July 27, 2025
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
}
