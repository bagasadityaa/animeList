"use client";

import { useRouter } from "next/navigation";
import { MagnifyingGlass } from "phosphor-react";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="flex">
      <input
        placeholder="Cari Anime"
        className="rounded-l-md"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button
        className="rounded-r-md bg-blue-500 text-white px-4"
        onClick={handleSearch}
      >
        <MagnifyingGlass width={24} />
      </button>
    </div>
  );
};
export default InputSearch;
