import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-sky-950 text-white">
      <h1 className="text-2xl">AgriLoan Explorer</h1>
      
    </header>
  );
};

export default Header;
