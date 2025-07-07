import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import github from "../../image/github.png";

import linkedin from "../../image/linkedIn.png";
import Icon from "../Icon";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: linkedin,
      link: "https://www.linkedin.com/in/riya-banerjee29/",
    },
    { name: "GitHub", icon: github, link: "https://github.com/RiyaBanerjee29" },
    
  ];

  return (
    <footer className="mt-auto text-black relative overflow-hidden bg-primary-color px-10  py-6 flex flex-wrap justify-between items-center">
      <div className="flex items-center">
        <div className="mb-4 inline-flex items-center">
          <Link to="/">
            <Logo width="100px" />
          </Link>
        </div>
      </div>

      <nav className=" lg:mt-0 flex  flex-col sm:flex-row md:space-x-10">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-header-hover-color hover:text-white p-2 rounded-2xl
            transition duration-300 ease-in-out flex items-center justify-content-center"
          >
            <div className="relative">
            <Icon image={link.icon} height={8} width={8} 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <span className="ml-2 lg:inline">{link.name}</span>
          </a>
        ))}
      </nav>

      <p className="text-center mt-4 lg:mt-0 text-sm">
        &copy; Copyright 2025. All Rights Reserved by Avishkar Pawar.
      </p>
    </footer>
  );
};

export default Footer;