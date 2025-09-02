import { useNavigate } from "react-router-dom";
import { EyeIcon, PlusIcon } from "../../assets/logos/logo";

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900">
        Products
      </h1>
      {/* Row 1 */}
      <div className="flex gap-4">
        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow basis-2/6 flex items-center">
          Category
        </div>
        <div
          onClick={() => navigate("/dashboard/products/create-category")}
          className="flex-1 gap-2 bg-[#5700FE] text-white p-3 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
        >
          <PlusIcon />
          <button>Create</button>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow basis-2/6 flex items-center">
          Category View
        </div>
        <div
          onClick={() => navigate("/dashboard/products/view-category")}
          className="flex-1 bg-[#5700FE] text-white p-3 gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
        >
          <EyeIcon stroke="white" />
          <button>View</button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow basis-2/6 flex items-center">
          Material
        </div>
        <div
          onClick={() => navigate("/dashboard/products/create-material")}
          className="flex-1 bg-[#5700FE] text-white gap-2 p-3 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
        >
          <PlusIcon />
          <button>Create</button>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow basis-2/6 flex items-center">
          Material View
        </div>
        <div
          onClick={() => navigate("/dashboard/products/view-material")}
          className="flex-1 bg-[#5700FE] text-white gap-2 p-3 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
        >
          <EyeIcon stroke="white" />
          <button>View</button>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow basis-2/6 flex items-center">
          Style
        </div>
        <div
          onClick={() => navigate("/dashboard/products/create-style")}
          className="flex-1 bg-[#5700FE] text-white p-3 gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
        >
          <PlusIcon />
          <button>Create</button>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow basis-2/6 flex items-center">
          Style View
        </div>
        <div
          onClick={() => navigate("/dashboard/products/view-style")}
          className="flex-1 bg-[#5700FE] text-white p-3 gap-2 rounded-lg shadow-md flex items-center justify-center cursor-pointer"
        >
          <EyeIcon stroke="white" />
          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
