import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Achievement from "./Achievement";
import Contect from "./Contect";
import Department from "./Department";
import Gallary from "./Gallary";
import Home from "./Home";

const NavBar = () => {
     const [toggle,setToggle]=useState(false)

const NavItem= ()=>{ 
  return (
    <>
      <Link to="/ " className="tw-btn tw-btn-ghost tw-btn-sm tw-rounded-tw-btn tw-px-4">
        Home
      </Link>
      <Link to="/dep" className="tw-btn tw-btn-ghost tw-btn-sm tw-rounded-tw-btn tw-px-4">
        Departments
      </Link>
      <Link to="/gallary" className="tw-btn tw-btn-ghost tw-btn-sm tw-rounded-tw-btn tw-px-4">
        Gallary
      </Link>
      <Link to="/achievement" className="tw-btn tw-btn-ghost tw-btn-sm tw-rounded-tw-btn tw-px-4">
        Achievement
      </Link>
      <Link to="/con" className="tw-btn tw-btn-ghost tw-btn-sm tw-rounded-tw-btn tw-px-4">
        Contect Us
      </Link>
    </>
  );
}



  return (
    <Router className="tw-relative">
      <div className="tw-navbar tw-sticky tw-top-0 tw-mb-2 tw-shadow-lg tw-bg-neutral tw-text-neutral-content tw-z-10">
        {/*  hamberg button */}
        <div className="tw-flex-none  lg:tw-hidden tw-dropdown tw-dropdown-right">
          <button
            onClick={() => setToggle(!toggle)}
            tabIndex="0"
            className="tw-btn tw-btn-square tw-btn-ghost "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="tw-inline-block tw-w-6 tw-h-6 tw-stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <ul
            onClick={() => setToggle(!toggle)}
            tabindex="0"
            class={` tw-p-1 tw-my-12 tw-w-max tw-shadow tw-menu tw-dropdown-content tw-bg-blue-900 tw-rounded-box ${
              toggle ? "tw-hidden" : "tw-p-0"
            }`}
          >
            <NavItem />
          </ul>
        </div>
        {/* logo */}
        <div className="tw-flex-1   tw-px-2 mx-2  lg:tw-flex">
          <span className="tw-text-lg font-bold">GECB</span>
        </div>
        {/* tw-menu link */}
        <div tabIndex="0" className="tw-flex-1 tw-px-2 mx-2">
          <div tabIndex="0" className={`tw-items-stretch lg:tw-flex tw-hidden`}>
            <NavItem />
          </div>
        </div>

        <div className="tw-flex-1  tw-hidden lg:tw-flex-none ">
          <div className="form-control">
            <input
              type="tw-text"
              placeholder="Search"
              className="tw-input tw-input-ghost"
            />
          </div>
        </div>
        <div className="tw-flex-none tw-hidden">
          <button className="tw-btn tw-btn-square tw-btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="tw-inline-block tw-w-6 tw-h-6 tw-stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="tw-flex-none ">
          <button className="tw-btn tw-btn-square tw-btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="tw-inline-block tw-w-6 tw-h-6 tw-stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              ></path>
            </svg>
          </button>
        </div>

        <div className="tw-flex-none ">
          <div className="tw-avatar">
            <div className="tw-rounded-full tw-w-10 tw-h-10 m-1">
              <img src="https://i.pravatar.cc/500?img=32" alt="userimage" />
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/con">
          <Contect />
        </Route>
        <Route path="/dep">
          <Department />
        </Route>
        <Route path="/gallary">
          <Gallary />
        </Route>
        <Route path="/achievement">
          <Achievement />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default NavBar
