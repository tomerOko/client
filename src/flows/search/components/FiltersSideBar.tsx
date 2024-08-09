import React from "react";
import { useForm } from "react-hook-form";

interface FiltersSideBarProps {
  onFilterChange: (filters: Filters) => void;
}

interface Filters {
  priceRange: [number, number];
  minimalRating: number;
  ageRange: [number, number];
  gender: string;
  language: string;
}

export const FiltersSideBar: React.FC<FiltersSideBarProps> = ({
  onFilterChange,
}) => {
  const { register, handleSubmit } = useForm<Filters>();

  const handleFilterChange = handleSubmit((filters) => {
    onFilterChange(filters);
  });

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <label>Price Range:</label>
        <input type="number" {...register("priceRange.0")} />
        <input type="number" {...register("priceRange.1")} />
      </div>
      <div>
        <label>Minimal Rating:</label>
        <input type="number" {...register("minimalRating")} />
      </div>
      <div>
        <label>Age Range:</label>
        <input type="number" {...register("ageRange.0")} />
        <input type="number" {...register("ageRange.1")} />
      </div>
      <div>
        <label>Gender:</label>
        <input type="text" {...register("gender")} />
      </div>
      <div>
        <label>Language:</label>
        <input type="text" {...register("language")} />
      </div>
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};
