import { FC } from "react";

const SearchBox: FC = () => {
  return (
    <div className="flex items-center justify-center mt-4 container">
      <div className="contain mx-auto">
        <input
          type="text"
          placeholder="Search loan products..."
          className="mr-2 p-3 bg-slate-100 text-sky-900 rounded-full flex-1 w-[20rem]"
        />
      </div>
      
    </div>
  );
};

export default SearchBox;
