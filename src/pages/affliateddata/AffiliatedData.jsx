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
import {
  CMIcon,
  EditIcon,
  EyeIcon,
  PlusIcon,
  TrashIcon,
} from "../../assets/logos/logo";
// import ViewAffiliatedData from "./ViewAffiliatedData";
// import CreateAffiliateData from "./CreateAffiliateData";
import { Pagination } from "../../components/pagination/Pagination";
import { product } from "../../constants/product";
import ConfirmationModal from "../../components/modal/ConfirmationModal";

export default function AffiliatedData() {
  // Pagination and state setup
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [products, setProducts] = useState(product);
  const totalPages = Math.ceil(products.length / productsPerPage);
  const paginatedProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const navigate = useNavigate();

  const handleCreateAffiliateData = () =>
    navigate("/dashboard/affiliate-data/create");
  const handleViewProduct = (product) => {
    navigate("/dashboard/affiliate-data/view", { state: { product } });
  };
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    navigate("/dashboard/affiliate-data/create");
  };
  const handleDeleteProduct = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  return (
    <>
      <div className="flex-1  w-full relative min-h-[80vh]">
        <div className="w-full">
          {/* Header */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h1 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Affiliate Data
            </h1>
            <button
              onClick={handleCreateAffiliateData}
              className="h-12 flex items-center px-4 py-2 gap-2 rounded-xl bg-[#5700FE] hover:bg-[#003bfece] text-white"
            >
              <PlusIcon size={24} color="white" />
              <span>Create Affiliate Data</span>
            </button>
          </div>

          {/* MOBILE VIEW: card style */}
          <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {paginatedProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4 flex flex-col justify-between"
              >
                {/* Header: Index + Actions */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-400 font-medium">
                    #
                    {String(
                      (currentPage - 1) * productsPerPage + index + 1
                    ).padStart(2, "0")}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleViewProduct(product)}
                      className="p-1.5 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-600"
                      aria-label="View"
                    >
                      <EyeIcon height={18} width={18} />
                    </button>
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="p-1.5 rounded-full bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 text-yellow-600"
                      aria-label="Edit"
                    >
                      <EditIcon height={18} width={18} />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product)}
                      className="p-1.5 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 text-red-600"
                      aria-label="Delete"
                    >
                      <TrashIcon height={18} width={18} fill="currentColor" />
                    </button>
                  </div>
                </div>

                {/* Body: Product Details */}
                <div className="space-y-1 text-sm text-gray-700">
                  <div>
                    <span className="font-semibold">Title:</span>{" "}
                    {product.title}
                  </div>
                  <div>
                    <span className="font-semibold">Link:</span>{" "}
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline break-words"
                    >
                      {product.link}
                    </a>
                  </div>
                  <div>
                    <span className="font-semibold">ID:</span> {product.id}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP TABLE VIEW */}
          <div className="hidden lg:block bg-white rounded-lg overflow-hidden w-full">
            {/* Table Header */}
            <div className="bg-[#EEE6FF] px-6 py-4">
              <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
                <div className="col-span-1 flex items-center justify-center ">
                  No
                </div>
                <div className="col-span-2 flex items-center justify-center ">
                  ID
                </div>
                <div className="col-span-4 flex items-center justify-center ">
                  Title
                </div>
                <div className="col-span-3 flex items-center justify-center ">
                  Link
                </div>
                <div className="col-span-2 flex items-center justify-center ">
                  Actions
                </div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-gray-200 ">
              {paginatedProducts.map((product, index) => (
                <div key={product.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-1 flex items-center justify-center text-sm text-gray-900">
                      {String(
                        (currentPage - 1) * productsPerPage + index + 1
                      ).padStart(2, "0")}
                    </div>
                    <div className="col-span-2 flex items-center justify-center text-sm font-medium text-gray-900">
                      {product.id}
                    </div>
                    <div className="col-span-4 flex items-center justify-center text-sm text-gray-900">
                      {product.title}
                    </div>
                    <div className="col-span-3 flex items-center justify-center">
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline truncate block max-w-full overflow-hidden overflow-ellipsis"
                        title={product.link}
                      >
                        {product.link}
                      </a>
                    </div>
                    <div className="col-span-2 flex items-center space-x-2 justify-center">
                      <button
                        onClick={() => handleViewProduct(product)}
                        className="p-2 text-purple-500 hover:bg-purple-50 rounded-full border-green-500 border-1"
                      >
                        <EyeIcon height={24} width={24} stroke="green" />
                      </button>
                      <button
                        onClick={handleCreateAffiliateData}
                        className="p-2 text-purple-500 hover:bg-purple-50 rounded-full border-purple-500 border-1"
                      >
                        <EditIcon height={24} width={24} />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full border-[#DD612C] border-1"
                      >
                        <TrashIcon height={24} width={24} fill="#DD2C2C" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            PerPage={productsPerPage}
            totalPages={totalPages}
            totalItems={products.length}
          />

          {showDeleteModal && (
            <ConfirmationModal
              isOpen={showDeleteModal}
              onClose={() => {
                setShowDeleteModal(false);
                setSelectedProduct(null);
              }}
              onConfirm={() => {
                if (selectedProduct) {
                  // Remove user from the users array
                  setProducts((prevProducts) =>
                    prevProducts.filter(
                      (product) => product.id !== selectedProduct.id
                    )
                  );
                  console.log(`Product ${selectedProduct.title} deleted`);
                }
                setShowDeleteModal(false);
                setSelectedProduct(null);
              }}
              title={"Delete Product"}
              option1={"Delete Product"}
              option2={"Cancel"}
            />
          )}
        </div>
      </div>
    </>
  );
}
