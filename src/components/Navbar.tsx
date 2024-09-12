import Image from "next/image";
import logoImage from "../assets/images/logosaas.png";
import MenuIcon from "../assets/icons/menu.svg";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4  xl:px-[100px]  ">
        <div className="py-4 flex items-center justify-between">
          <div className="relative ">
            <div className="  w-full top-2 bottom-0 background-navbarlOGO  ">
              <Image
                src={logoImage}
                alt="logo"
                className="w-12 h-12 relative"
              />
            </div>
          </div>

          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden ">
            <MenuIcon className="text-white" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex ">
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Updates
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </Link>
            <Link
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Customer
            </Link>
            <button className="bg-white py-2 px-4 rounded-lg">
              Get for free
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
