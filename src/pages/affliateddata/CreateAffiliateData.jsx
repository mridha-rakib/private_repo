import React, { useRef, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ArrowLeft, ChevronRight } from "lucide-react";

const CreateAffiliateData = ({ onBack }) => {
  const { id } = useParams(); // If editing
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    link: "",
    description: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef(null);

  // Fetch data if editing
  useEffect(() => {
    if (id) {
      // TODO: Replace with your actual API endpoint for fetching affiliate data
      fetch(`https://api.yourservice.com/affiliate/${id}`)
        .then((res) => {
          if (!res.ok) throw new Error("fetchFailed");
          return res.json();
        })
        .then((data) => {
          setFormData({
            title: data.title || "",
            link: data.link || "",
            description: data.description || "",
            image: null,
          });
          if (data.imageUrl) setImagePreview(data.imageUrl);
        })
        .catch((err) => {
          console.error("Failed to fetch data:", err);
          toast.error("An error occurred while fetching data");
        });
    }
  }, [id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Invalid image format. Please upload an image file.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }

    if (!formData.link.trim()) {
      toast.error("Affiliate link is required");
      return;
    }

    if (!id && !formData.image) {
      toast.error("Image is required");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("link", formData.link);
      submitData.append("description", formData.description);
      if (formData.image) {
        submitData.append("image", formData.image);
      }

      const method = id ? "PUT" : "POST";
      const endpoint = id
        ? `https://api.yourservice.com/affiliate/${id}`
        : "https://api.yourservice.com/affiliate";

      const response = await fetch(endpoint, {
        method,
        body: submitData,
        // Add authentication headers if needed
        // headers: {
        //   'Authorization': `Bearer ${user.token}`
        // }
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "saveFailed");
      }

      // const result = await response.json();

      toast.success(id ? "Update Success" : "Create Success");
      navigate("/dashboard/affiliated-data");
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("common.errorOccurred");
    } finally {
      setIsSubmitting(false);
    }
  };

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
                Affiliate Data
              </span>
            </button>
          </li>
          <li className="text-gray-400">
            <ChevronRight size={16} />
          </li>
          <li className="text-gray-900 font-medium truncate max-w-[120px] sm:max-w-none">
            {id ? "Edit" : "Create New"}
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <form onSubmit={handleSubmit} className=" rounded-lg sm:p-6 w-full">
        <h1 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
          {id ? "Edit Affiliate Data" : "Create New Affiliate Data"}
        </h1>

        <div className="space-y-6">
          {/* Title Field */}
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                id="title"
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5700FE] focus:border-[#5700FE] sm:text-sm"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                placeholder={"Enter title"}
                aria-required="true"
                aria-invalid={!formData.title.trim() ? "true" : "false"}
              />
            </div>
          </div>

          {/* Link Field */}
          <div className="space-y-2">
            <label
              htmlFor="link"
              className="block text-sm font-medium text-gray-700"
            >
              Affiliate Link <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                id="link"
                type="url"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5700FE] focus:border-[#5700FE] sm:text-sm"
                value={formData.link}
                onChange={(e) =>
                  setFormData({ ...formData, link: e.target.value })
                }
                placeholder={"https://example.com/affiliate-link"}
                aria-required="true"
                aria-invalid={!formData.link.trim() ? "true" : "false"}
              />
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {"Make sure to include the full URL including https://"}
            </p>
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Image {!id && <span className="text-red-500">*</span>}
            </label>
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && triggerFileInput()}
              className={`group relative text-center border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer overflow-hidden transition-colors hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5700FE] focus:ring-offset-2 ${
                imagePreview ? 'mx-auto w-full max-w-2xl aspect-video' : 'w-full h-40'
              }`}
              onClick={triggerFileInput}
              aria-label={"Upload product image"}
            >
              {imagePreview ? (
                <div className="w-full h-full flex flex-col items-center justify-center overflow-hidden">
                  <div className="relative w-full h-full">
                    <img
                      src={imagePreview}
                      alt={"Preview of uploaded image"}
                      className="w-full h-full object-contain"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200 flex items-center justify-center">
                      <span className="bg-white bg-opacity-90 text-gray-800 text-sm font-medium px-3 py-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Change Image
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center p-4">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="mt-1 text-sm text-gray-600">
                    <span className="font-medium text-[#5700FE] hover:text-[#5700FE]">
                      {'Upload a file'}
                    </span>{' '}
                    {'or drag and drop'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {"PNG, JPG, GIF up to 5MB"}
                  </p>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                ref={fileInputRef}
                className="hidden"
                aria-describedby="file-upload-description"
              />
            </div>
            <p
              id="file-upload-description"
              className="text-xs text-gray-500 mt-1"
            >
              {"Recommended size: 1200×630 pixels"}
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                {"Description"}
              </label>
              <span className="text-xs text-gray-500">{"Optional"}</span>
            </div>
            <div className="mt-1">
              <textarea
                id="description"
                rows={4}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5700FE] focus:border-[#5700FE] sm:text-sm"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder={"Enter a detailed description of the product"}
                aria-describedby="description-helper"
              />
            </div>
            <p id="description-helper" className="text-xs text-gray-500">
              {
                "Provide a detailed description to help users understand the product better"
              }
            </p>
          </div>

          {/* Form Actions */}
          <div className="pt-6">
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
              <button
                type="button"
                onClick={onBack}
                className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                disabled={isSubmitting}
              >
                {"Cancel"}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex justify-center items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                  isSubmitting
                    ? 'bg-[#5700FE] cursor-not-allowed'
                    : 'bg-[#5700FE] hover:bg-[#5700FE] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5700FE]'
                }`}
                aria-busy={isSubmitting}
                aria-live="polite"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    {"Saving..."}
                  </>
                ) : id ? (
                  "Update"
                ) : (
                  "Create"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateAffiliateData;
