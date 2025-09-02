import React, { useState } from "react";
import { EditIcon, TrashIcon } from "../../../icons/Logo";
import { styles } from "../../../data/styles";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { Pagination } from "../../../components/Pagination";

export default function ViewStyle({onBack}) {
  const [currentPage, setCurrentPage] = useState(1);
  const stylesPerPage = 8;
  const [data, setData] = useState(styles);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const totalPages = Math.ceil(data.length / stylesPerPage);
  const paginatedCategories = data.slice(
    (currentPage - 1) * stylesPerPage,
    currentPage * stylesPerPage
  );

  // ✅ Save edited style
  const handleSaveEdit = (index) => {
    if (editValue.trim() === "") return; // prevent empty
    const newData = [...data];
    newData[(currentPage - 1) * stylesPerPage + index].style = editValue;
    setData(newData);
    setEditingIndex(null);
    setEditValue("");
  };

  // ✅ Delete style
  const handleDelete = (index) => {
    const globalIndex = (currentPage - 1) * stylesPerPage + index;
    setData((prev) => prev.filter((_, i) => i !== globalIndex));
  };

  return (
    <div className="flex-1 w-full relative min-h-[80vh]">
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm">
          <li className="flex items-center">
            <button
              type="button"
              onClick={onBack}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft size={16} className="flex-shrink-0" />
              <span className="truncate max-w-[120px] sm:max-w-none">
Products              </span>
            </button>
          </li>
          <li className="text-gray-400">
            <ChevronRight size={16} />
          </li>
          <li>Style List</li>
        </ol>
      </nav>
      <div className="w-full">
        {/* Header */}
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Styles
          </h1>
        </div>

        {/* MOBILE VIEW */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {paginatedCategories.map((sty, index) => {
            const displayNo = String(
              (currentPage - 1) * stylesPerPage + index + 1
            ).padStart(2, "0");
            return (
              <div
                key={`${sty.style}-${index}`}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm p-4"
              >
                {/* Top: No + Actions */}
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xs text-gray-400 font-medium">
                    #{displayNo}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setEditingIndex(index);
                        setEditValue(sty.style);
                      }}
                      className="p-1.5 rounded-full bg-yellow-50 hover:bg-yellow-100 border border-yellow-200 text-yellow-600"
                    >
                      <EditIcon height={18} width={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="p-1.5 rounded-full bg-red-50 hover:bg-red-100 border border-red-200 text-red-600"
                    >
                      <TrashIcon height={18} width={18} fill="currentColor" />
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="text-sm text-gray-700">
                  {editingIndex === index ? (
                    <input
                      type="text"
                      className="border border-gray-300 rounded px-2 py-1 w-full"
                      value={editValue}
                      autoFocus
                      onChange={(e) => setEditValue(e.target.value)}
                      onBlur={() => handleSaveEdit(index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSaveEdit(index);
                      }}
                    />
                  ) : (
                    <div>
                      <span className="font-semibold">Category:</span>{" "}
                      {sty.style}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW */}
        <div className="hidden lg:block bg-white rounded-lg overflow-hidden w-full">
          {/* Table Header */}
          <div className="bg-[#EEE6FF] px-6 py-4">
            <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-700">
              <div className="col-span-2 flex items-center justify-center">No</div>
              <div className="col-span-8 flex items-center justify-center">
                Category
              </div>
              <div className="col-span-2 flex items-center justify-center">
                Actions
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {paginatedCategories.map((sty, index) => (
              <div
                key={`${sty.style}-${index}`}
                className="px-6 py-4 hover:bg-gray-50"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-2 flex items-center justify-center text-sm text-gray-900">
                    {String(
                      (currentPage - 1) * stylesPerPage + index + 1
                    ).padStart(2, "0")}
                  </div>

                  <div className="col-span-8 flex items-center justify-center text-sm text-gray-900">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        value={editValue}
                        autoFocus
                        onChange={(e) => setEditValue(e.target.value)}
                        onBlur={() => handleSaveEdit(index)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") handleSaveEdit(index);
                        }}
                      />
                    ) : (
                      sty.style
                    )}
                  </div>

                  <div className="col-span-2 flex items-center space-x-2 justify-center">
                    <button
                      onClick={() => {
                        setEditingIndex(index);
                        setEditValue(sty.style);
                      }}
                      className="p-2 text-purple-500 hover:bg-purple-50 rounded-full border-purple-500 border-1"
                    >
                      <EditIcon height={24} width={24} />
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
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
          PerPage={stylesPerPage}
          totalPages={totalPages}
          totalItems={data.length}
        />
      </div>
    </div>
  );
}
