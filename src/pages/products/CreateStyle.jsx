import { ArrowLeft, ChevronRight } from "lucide-react";
import React from "react";

function CreateCategory({ onBack }) {
  return (
    <div className="sm:p-6">
      {/* Breadcrumb */}
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
          <li>Create Style</li>
        </ol>
      </nav>

     <div className="space-y-2">
  <label className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900">
    Add New Style
  </label>

  <div className="mt-1">
    <input
      id="title"
      type="text"
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm"
      placeholder={"Enter Style"}
      aria-required="true"
    />
  </div>

  <div className="flex justify-end">
    <button className="bg-[#5700FE] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#4500c2] transition text-sm">
      Save
    </button>
  </div>
</div>

    </div>
  );
}

export default CreateCategory;
