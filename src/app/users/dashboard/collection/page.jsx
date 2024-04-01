import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/dashboard/Header";
const page = () => {
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collection"} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="w-full bg-color-accent flex justify-center items-center h-16 absolute bottom-0">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="w-full bg-color-accent flex justify-center items-center h-16 absolute bottom-0">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="w-full bg-color-accent flex justify-center items-center h-16 absolute bottom-0">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="/" className="border-2 border-color-accent relative">
          <Image src="" alt="" width={350} height={350} className="w-full" />
          <div className="w-full bg-color-accent flex justify-center items-center h-16 absolute bottom-0">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default page;
