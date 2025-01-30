"use client";

import React, { ChangeEvent, useState } from "react";

const categories = ["chair", "sofa", "Bed", "SofaBed"];
const discounts = [10, 12, 18, 15, 20];
const priceRanges = [
  "0-200",
  "200-400",
  "400-600",
  "600-800",
  "800-1000",
  "1000-1200",
  "1200-1400",
];

const filterOptions = [
  {
    id: "category",
    title: "Category",
    options: categories,
  },
  {
    id: "discountPercentage",
    title: "Discount Offers",
    options: discounts,
  },
  {
    id: "priceRange",
    title: "Price Range",
    options: priceRanges,
  },
];

interface FilterSectionProps {
  onFiltersChange: (filters: Record<string, string[]>) => void;
}

const FilterSection = ({ onFiltersChange }: FilterSectionProps) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedFilters = { ...selectedFilters };

    // Toggle the selected filter value
    if (updatedFilters[name]?.includes(value)) {
      updatedFilters[name] = updatedFilters[name].filter((v) => v !== value);
      if (updatedFilters[name].length === 0) delete updatedFilters[name];
    } else {
      updatedFilters[name] = updatedFilters[name] ? [...updatedFilters[name], value] : [value];
    }

    setSelectedFilters(updatedFilters);
    onFiltersChange(updatedFilters); // Pass updated filters to parent
  };

  return (
    <div className="hidden lg:inline p-10 bg-white rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-[30px] font-bold mb-4">Filter Products</h2>
      {filterOptions.map(({ id, title, options }) => (
        <div key={id} className="mb-6">
          <p className="text-[20px] font-semibold mb-2">{title}</p>
          <div className="gap-3">
              {options.map((option) => {
              const displayValue =
                id === "discountPercentage"
                  ? `${option}% Discount`
                  : id === "priceRange"
                  ? `$${String(option).replace("-", " to $")}`
                  : String(option);
              return (
                <label key={option} className="flex items-center gap-2 text-[20px] cursor-pointer group">
                  <input
                    type="checkbox"
                    name={id}
                    value={String(option)} // Send raw value (number or string)
                    onChange={handleFilterChange}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-400 rounded-md focus:ring-2 focus:ring-blue-500 checked:bg-blue-500 checked:border-transparent"
                  />
                  <span className="text-gray-800 text-base group-hover:text-blue-600">{displayValue}</span>
                </label>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterSection;


