"use client";

import { useRouter } from "next/navigation";
// import { ArrowSqureLeft } from "@phosphor-icons/react";
import { ArrowSquareLeft } from "phosphor-react";
const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <div className="flex justify-between items-center">
      <button onClick={handleBack} className="text-color-primary">
        <ArrowSquareLeft size={32} />
      </button>
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  );
};

export default Header;
