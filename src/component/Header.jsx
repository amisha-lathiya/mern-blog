import React from "react";
import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaMoon ,FaSun} from "react-icons/fa";
import { useSelector,useDispatch } from "react-redux";
import { toggleTheme } from "../features/user/themSlice";

const Header = () => {
  const path = useLocation().pathname;
  const dispatch =useDispatch();
  const currentUser = useSelector((state) => state.user.currentuser);
  const  theme = useSelector((state) => state.theme.theme);
  console.log(theme)
  return (
    <>
      <Navbar className="border-b-2 shadow-sm">
        <Link to="/" className=" whitespace-nowrap text-sm sm:text-xl ">
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
          <Button className="w-12 h-10 hidden sm:inline focus:ring-0" color="gray" onClick={()=>dispatch(toggleTheme())}>
         
            {theme === 'dark' ? <FaSun/> :<FaMoon/>}
          </Button>
          
            { currentUser && Object.keys(currentUser).length > 0  ? (
            
              <Dropdown
                arrowIcon={false}
                inline
                label={
                  <Avatar
                    alt="user"
                    img={currentUser.profilePicture}
                    rounded
                  ></Avatar>
                }
              >
                <Dropdown.Header>
                  <div className="font-semibold">{currentUser.username}</div>
                  <div className="font-semibold truncate">
                    {currentUser.email}
                  </div>
                </Dropdown.Header>
                <div className="flex justify-center">
                  <Link
                    to={"DashBoard/tab=profile"}
                    className="text-center font-semibold"
                  >
                    Profile
                  </Link>
                </div>
                <Dropdown.Divider></Dropdown.Divider>
                <div className="flex justify-center">
                  <Link to="/" className="font-semibold">Sing out</Link>
                </div>
              </Dropdown>
            ) : (
              <Link to="/singup" className="">
              <Button className="bg-gradient-to-r from-purple-400  to-blue-500  focus:ring-0">
                Sing In
              </Button>
              </Link>
            )}
         
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/" className="capitalize">
              home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about" className="capitalize">
              about
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/project"} as={"div"}>
            <Link to="/project" className="capitalize">
              project
            </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
