import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { TrashIcon } from "../../../icons/Logo";
import ConfirmationModal from "../../../modal/ConfirmationModal";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
// Use product?.image, product?.title, etc.

export default function ViewAffiliatedData({ user, onBack, onDelete }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const location = useLocation();
  // Prefer user prop, fallback to product from route state
  const product = user || location.state?.product || {};
  const navigate = useNavigate();

  const imageUrl =
    product.image || "https://via.placeholder.com/600x400?text=No+Image";

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      if (onDelete) onDelete(product);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
        >
          <ChevronRight size={20} />
          <span>Affliated Data</span>
        </button>
        <span className="text-gray-600">
          <ChevronRight size={20} />
        </span>
        <span className="text-gray-900 font-medium">View Product</span>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-lg">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between p-6">
          {/* Title & Status */}
          <div className="flex items-center gap-4">
            <h1 className="text-[32px] font-bold">
              {product.title || "No Title"}
            </h1>
            <div className="text-gray-900 text-[16px] font-medium">
              {product.id || "No ID"}
            </div>
          </div>

          {/* Desktop Delete Button */}
          <div className="hidden md:flex flex-row gap-2 self-start md:self-auto">
            <button
              onClick={() => setShowDeleteModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors cursor-pointer"
            >
              <TrashIcon fill="#DD612C" height={24} width={24} />
            </button>
          </div>
        </div>

        {/* Image and Details */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image + Mobile Delete Button */}
            <div className="flex flex-col gap-4 items-start">
              <img
                className="w-full max-w-xs h-auto md:w-[280px] md:h-[220px] object-contain"
                src={imageUrl}
                alt={product.title || "No Title"}
              />

              {/* Mobile Delete Button */}
              <div className="flex md:hidden w-full">
                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <TrashIcon fill="#DD612C" height={24} width={24} />
                  <span>Delete</span>
                </button>
              </div>
            </div>

            {/* Placeholder for additional content */}
            <div className="flex-1" />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-[18px] font-semibold text-gray-700 mb-1">
                Product Title
              </label>
              <div className="text-gray-900 text-[16px] font-medium border-b border-[#D8D4E0] py-[12px]">
                {product.title || "No Title"}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-[18px] font-semibold text-gray-700 mb-1">
                Product Link
              </label>
              <div className="text-gray-900 text-[16px] font-medium border-b border-[#D8D4E0] py-[12px]">
                {product.link || "No Link"}
              </div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-[18px] font-semibold mt-5 text-gray-700 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={product.description || "No Description"}
            className="border-[#D8D4E0] border-[1px] rounded-[8px] w-full h-[100px] p-2"
            disabled
          />
        </div>
      </div>

      {/* Confirmation Modal */}
      {showDeleteModal && (
        <ConfirmationModal
          isOpen={showDeleteModal}
          onClose={() => {
            setShowDeleteModal(false);
          }}
          onConfirm={() => {
            onBack();
            setShowDeleteModal(false);
          }}
          title={`Are you sure you want to delete ${
            product?.title || "this product"
          }?`}
          option1="Yes, delete it"
          option2="Cancel"
        />
      )}
    </div>
  );
}
