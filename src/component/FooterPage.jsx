import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const FooterPage = () => {
  return (
    <div>
      <Footer container className="border border-t-8 border-teal-500 mt-2">
        <div className="w-full max-w-7xl  m-auto">
     
            <div>
              <Link to="/" className=" whitespace-nowrap  text-xs sm:text-xl min-280px:text-sm">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-700 to-pink-500 p-2 rounded-lg text-white">
                  Sahand's
                </span>
                blog
              </Link>
            </div>
            <div className="grid  gap-1 grid-cols-3 my-4  sm:gap-3 min-280px:gap-1 ">
             
            
            <div className="">
             <Footer.Title title="About"  />
             <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                >
                  100 js projects
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/"
                  target="_blank"
                  className="mt-2"
                >
                    Sahand's Blog
                </Footer.Link>
              </Footer.LinkGroup>
             </div>
             <div>
             <Footer.Title title="Fllows us" />
             <Footer.LinkGroup col >
                <Footer.Link 
                  href="https://www.github.com"
                  target="_blank"
                >
                 github
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  target="_blank"
                  className="mt-2"
                >
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
             </div>
             <div>
             <Footer.Title title="Legal" />
             <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  target="_blank"
                >
                  privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="#"
                  target="_blank"
                  className="mt-2"
                >
                 Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
             </div>
            </div>
        <Footer.Divider></Footer.Divider>
        <div className="flex  justify-between">
        <div className="">
         <Footer.Copyright href="#" by="shand's blog" year={new Date().getFullYear}></Footer.Copyright></div>
        <div className="grid grid-cols-4 gap-3 sm:gap-6 min-280px:gap-3">
        <Footer.Icon href="#" icon={BsFacebook}></Footer.Icon>
        <Footer.Icon href="#" icon={BsInstagram}></Footer.Icon>
        <Footer.Icon href="#" icon={BsTwitter}></Footer.Icon>
        <Footer.Icon href="#" icon={BsGithub}></Footer.Icon>
        </div>
      </div>
        </div>
      </Footer>
    </div>
  );
};

export default FooterPage;
