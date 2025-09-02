import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "lucide-react";
import { CMIcon, TrashIcon } from "../../../icons/Logo";
import ConfirmationModal from "../../../modal/ConfirmationModal";
import ReportedProfile from "./ReportedProfile";
import ReportedPost from "./ReportedPost";

const ContentModerationUser = ({
  user,
  onBack,
  onDeleteUser,
  onBanUser,
  contentType,
}) => {
  const { t } = useTranslation();
  // Initialize ban status from user prop
  const [isBanned, setIsBanned] = useState(user?.status === "Banned");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showBanModal, setShowBanModal] = useState(false);
  // Use passed user data or fallback to default
  const userInfo = user
    ? {
        name: user.name || t('contentModeration.user.anonymous', 'Anonymous User'),
        username: user.id || 'N/A',
        email: user.email || t('contentModeration.user.noEmail', 'No email provided'),
        bio: t('contentModeration.user.bio', 'Hey, I am {{name}} known as great outfit collector', { name: user.name || t('contentModeration.user.thisUser', 'this user') }),
        dateOfBirth: user.dateOfBirth || t('contentModeration.user.unknownDate', 'Unknown'),
        gender: user.gender || t('contentModeration.user.unspecified', 'Unspecified'),
        location: user.location || t('contentModeration.user.locationNotSet', 'Location not set'),
        avatar: user.avatar || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        isActive: user.status === "Active",
      }
    : {
        name: t('contentModeration.user.defaultName', 'Timur Romanenko'),
        username: 'timur1234',
        email: 'frontbuy.rute@gmail.com',
        bio: t('contentModeration.user.defaultBio', 'Hey, I am Timur known as great outfit collector'),
        dateOfBirth: t('contentModeration.user.defaultDob', 'Jan 1, 2000'),
        gender: t('contentModeration.user.male', 'Male'),
        location: t('contentModeration.user.defaultLocation', 'Moscow, Russia'),
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        isActive: true,
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
  
  // Loading state for better user experience
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-[200px] w-full">
        <div className="animate-pulse text-gray-500">
          {t('common.loading', 'Loading user data...')}
        </div>
      </div>
    );
  }

  console.log(contentType);

  if (contentType === "Post") {
    return (
      <ReportedPost
        user={user}
        onBack={onBack}
        onDeleteUser={onDeleteUser}
        onBanUser={onBanUser}
      />
    );
  }

  return (
    <ReportedProfile
      user={user}
      onBack={onBack}
      onDeleteUser={onDeleteUser}
      onBanUser={onBanUser}
    />
  );
};

export default ContentModerationUser;
