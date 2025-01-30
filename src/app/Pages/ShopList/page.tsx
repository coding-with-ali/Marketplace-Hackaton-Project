import Link from "next/link";
import ProductSection from "@/app/Components/ProductSection";

const Home: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="w-full h-[286px] bg-[#F6F5FF] relative">
        <div className="absolute top-48 left-10 md:top-20 md:left-60">
          <h2 className="text-[#101750] font-[Josefin Sans] text-[26px] md:text-[36px] font-[700]">
            Product Details
          </h2>
          <Link href="/" className="px-2">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link href="/products" className="px-2">
            Page
          </Link>
          <span className="text-[#FB2E86] text-[16px] font-[500] px-2">
            Shop Lists
          </span>
        </div>
      </div>
      {/* filter Section */}
      <div className="flex flex-wrap items-center justify-around gap-4 p-4 border-b border-purple-500 bg-white">
      <h1 className="text-lg font-bold text-purple-700">
        Ecommerce Accessories & Fashion Item
      </h1>
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="perPage" className="text-sm font-medium text-gray-700">
            Per Page:
          </label>
          <input
            id="perPage"
            type="number"
            className="w-16 px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="10"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
            Sort By:
          </label>
          <select
            id="sortBy"
            className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Best Match</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="view" className="text-sm font-medium text-gray-700">
            View:
          </label>
          <div className="flex gap-1">
            <button className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <span className="grid grid-cols-2 gap-1 w-4 h-4 bg-gray-200" />
            </button>
            <button className="px-2 py-1 text-sm border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500">
              <span className="w-4 h-4 bg-gray-200" />
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Sidebar and Product List */}
    <div >
      <main >
        <div className="p-4">
          <ProductSection  />
        </div>
      </main>
    </div>
    </div>
  );
};

export default Home;
