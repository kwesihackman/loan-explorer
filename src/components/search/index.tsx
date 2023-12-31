import { FC } from "react";

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox: FC<SearchProps> = ({ onSearch }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
    
  };
  return (
    <div className="flex items-center justify-center mt-4 container mx-auto">
      <div className="contain mx-auto">
        <input
          type="text"
          placeholder="Search loan products..."
          className=" p-3 bg-slate-100 text-sky-900 rounded-full flex-1 w-[20rem] mx-auto"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
