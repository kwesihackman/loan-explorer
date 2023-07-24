import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between p-5 bg-sky-950 text-white">
      <h1 className="text-2xl">AgriLoan Explorer</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:underline">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
