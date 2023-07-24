import SearchBox from "@components/search";
import { FC } from "react";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
}

const Hero: FC<HeroProps> = ({ title, subtitle, ctaText }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-sky-950 text-white h-screen">
      <h1 className="text-5xl mb-4 text-center">{title}</h1>
      <h2 className="text-xl mb-8 text-center">{subtitle}</h2>
      <SearchBox />
    </div>
  );
};

export default Hero;
