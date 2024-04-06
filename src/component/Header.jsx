import React from "react";
import { Button, Navbar, TextInput } from "flowbite-react";
import { Link,useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className="border-b-2 shadow-sm">
        <Link to="/" className=" whitespace-nowrap text-sm sm:text-xl ">
          {" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 p-2 rounded-lg text-white">
            Sahand's
          </span>
          blog
        </Link>
        <form>
          <TextInput
            id="search"
            type="search"
            placeholder="search..."
            rightIcon={IoSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className="w-12 h-10 lg:hidden" color="gray">
          <IoSearch />
        </Button>
        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray">
            <FaMoon />
          </Button>
          <Link to="/sing-in" className="">
            <Button className="bg-gradient-to-r from-purple-400  to-blue-500 " outline>
              Sing In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={'div'}>
            <Link to="/" className="capitalize">home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={'div'}>
            <Link to="/about" className="capitalize">about</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/project"} as={'div'}>
            <Link to="/project" className="capitalize">project</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
