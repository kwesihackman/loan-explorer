import { FC } from "react";

const Footer: FC = () => {
  const year = new Date().getFullYear(); // Get the current year

  return (
    <footer className="flex items-center justify-center p-4 bg-sky-900 text-white">
      <p>{`© ${year} AgriLoan Explorer`}</p>
    </footer>
  );
};

export default Footer;
