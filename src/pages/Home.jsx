import React from "react";
import {  Container, Button } from "../components/index";
import home from "../image/Home.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const authStatus = useSelector((state) => state.auth.status);
  
  return (
    <div className="w-full py-2 bg-white">
      <Container>
        <div className="flex  flex-col lg:flex-row gap-8 p-5 md:p-15">
          <div className="text-slate-800 w-2/3 flex  flex-col gap-9 mx-auto my-auto">
           <div className=" text-4xl lg:text-7xl">
             <h1>Welcome to Blogify</h1>
           </div>
           <div className="text-xl">
           <h3 >
              Don't let your thoughts stay silent.Write freely,express yourself fully.
            </h3>
           </div>
           <div>
            <Link to={authStatus ? "/all-posts" : "/login"}>
            <Button  bgColor={"bg-secondary-color"} textColor="text-white" hover="hover:bg-hover-color hover:text-white"
            >{authStatus ? "View All Posts" : "Get Started" } </Button>
            </Link>
           </div>
          </div>
          <div className="rounded-xl w-64 h-64  md:w-112 md:h-112 overflow-hidden lg:w-128 lg:h-128 mx-auto my-auto"> 
            <img src={home} alt="Home" className="w-full h-full object-cover" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;