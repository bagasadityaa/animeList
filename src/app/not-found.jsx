"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FileSearch } from "phosphor-react";
import React from "react";

const Page = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <FileSearch size={44} className="text-color-accent" />
        <h3 className="text-color-accent text-4xl font-bold ">Not Found</h3>
        <button
          onClick={() => router.back()}
          className="text-color-primary hover:text-color-accent transition-all underline"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default Page;
