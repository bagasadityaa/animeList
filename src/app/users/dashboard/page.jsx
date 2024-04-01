import { authUserSession } from "@/libs/auth-libs";
import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Link from "next/link";
const page = async () => {
  const user = await authUserSession();
  // if (!user) redirect("/");
  return (
    <div className=" text-color-primary flex justify-center items-center mt-8 flex-col">
      <h3>Dashboard</h3>
      <h3 className="text-2xl font-bold">welcome {user?.name}</h3>
      <Image
        src={user?.image}
        alt="...."
        width={250}
        height={250}
        className="rounded-full"
      />
      <div className="flex flex-wrap gap-4 py-8">
        <Link
          className="bg-color-accent text-color-dark font-bold px-4 py-2 text-xl"
          href="/users/dashboard/collection"
        >
          My Collection
        </Link>
        <Link
          className="bg-color-accent text-color-dark font-bold px-4 py-2 text-xl"
          href="/users/dashboard/comment"
        >
          My Coment
        </Link>
      </div>
    </div>
  );
};
export default page;
