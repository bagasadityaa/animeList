import Link from "next/link";
import InputSearch from "./InputSearch";
import UserActionButton from "./UserActionButton";

const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="justify-between flex p-4 md:flex-row md:items-center flex-col gap-2">
        <Link className="text-white font-bold text-2xl" href="/">
          Anime
        </Link>
        <InputSearch />
        {/* <UserActionButton /> */}
      </div>
    </header>
  );
};

export default Navbar;
