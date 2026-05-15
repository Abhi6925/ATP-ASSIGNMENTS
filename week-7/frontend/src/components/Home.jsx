import React from "react";
import { NavLink } from "react-router";
import { primaryBtn, secondaryBtn, pageWrapper } from "../styles/common";

function Home() {
  return (
    <div className={pageWrapper}>
      <div className="flex flex-col items-center justify-center text-center py-20">
        <h1 className="text-5xl font-bold text-[#1d1d1f] mb-6 tracking-tight">
          Welcome to MyBlog
        </h1>
        <p className="text-lg text-[#6e6e73] max-w-2xl mb-10 leading-relaxed">
          A simple and clean platform to read, write, and share your thoughts
          with the world. Join our community of writers and readers today.
        </p>
        <div className="flex gap-4">
          <NavLink to="/register" className={primaryBtn}>
            Get Started
          </NavLink>
          <NavLink to="/login" className={secondaryBtn}>
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
