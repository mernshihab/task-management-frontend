import React, { Fragment, useRef } from "react";
import { Navbar, Container } from "react-bootstrap";
import {
  FaAlignLeft,
  FaCheckDouble,
  FaHourglassEnd,
  FaUserAlt,
} from "react-icons/fa";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import {
  MdClosedCaptionDisabled,
  MdOutlineCreateNewFolder,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import { getUserDetails, removeSession } from "../../helper/SessionHelper";

const MasterLayout = (props) => {
  let sidebarRef,
    contentRef = useRef();

  const onLogout = () => {
    removeSession();
  };
  const menuCollapes = () => {
    let sideNav = sidebarRef;
    let content = contentRef;
    if (sideNav.classList.contains("sideNavbar")) {
      sideNav.classList.add("sideNavbar-close");
      sideNav.classList.remove("sideNavbar");
      content.classList.add("content-expand");
      content.classList.remove("content");
    } else {
      sideNav.classList.remove("sideNavbar-close");
      sideNav.classList.add("sideNavbar");
      content.classList.remove("content-expand");
      content.classList.add("content");
    }
  };

  return (
    <Fragment>
      <nav>
        <Container fluid={true}>
          <div className="row">
            <div className="col">
              <div className="logo__section">
                <BiMenuAltLeft onClick={menuCollapes} />
                <Navbar.Brand as={Link} to={"/"}>
                  {" "}
                  <img src={logo} alt="logo" className="img-fluid" />
                </Navbar.Brand>
              </div>
              <div className="user__section">
                <div className="user__display">
                  <div className="img__file">
                    <img src={getUserDetails()["photo"]} alt="" />
                  </div>
                </div>
                <div className="user__dropdown">
                  <div className="item__container">
                    <div className="img__file">
                      <img
                        className="mb-10"
                        src={getUserDetails()["photo"]}
                        alt=""
                      />
                      <h6>
                        {getUserDetails()["fastName"]}{" "}
                        {getUserDetails()["lastName"]}
                      </h6>
                    </div>
                    <hr />
                    <div className="text__items">
                      <div>
                        <Link to={"/profile"}>
                          <FaUserAlt className="mr-10" />
                          <span>Profile</span>
                        </Link>
                      </div>
                      <div>
                        <Link to={"/"} onClick={onLogout}>
                          <FiLogOut className="mr-10" />
                          <span>Logout</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      {/* Side Navbar */}
      <div
        ref={(div) => {
          sidebarRef = div;
        }}
        className="sideNavbar"
      >
        <NavLink
          to={"/"}
          className={(navData) =>
            navData.isActive ? "sideItemActive navItems" : "navItems"
          }
        >
          <span>
            <MdOutlineDashboardCustomize className="mr-5" />
          </span>
          Dashbord
        </NavLink>
        <NavLink
          to={"/create"}
          className={(navData) =>
            navData.isActive ? "sideItemActive navItems" : "navItems"
          }
        >
          <span>
            <MdOutlineCreateNewFolder className="mr-5" />
          </span>
          Create New
        </NavLink>
        <NavLink
          to={"/new"}
          className={(navData) =>
            navData.isActive ? "sideItemActive navItems" : "navItems"
          }
        >
          <span>
            <FaAlignLeft className="mr-5" />
          </span>
          New Task
        </NavLink>
        <NavLink
          to={"/progress"}
          className={(navData) =>
            navData.isActive ? "sideItemActive navItems" : "navItems"
          }
        >
          <span>
            <MdOutlineCreateNewFolder className="mr-5" />
          </span>
          In Progress
        </NavLink>
        <NavLink
          to={"/completed"}
          className={(navData) =>
            navData.isActive ? "sideItemActive navItems" : "navItems"
          }
        >
          <span>
            <FaHourglassEnd className="mr-5" />
          </span>
          Completed
        </NavLink>
        <NavLink
          to={"/canceled"}
          className={(navData) =>
            navData.isActive ? "sideItemActive navItems" : "navItems"
          }
        >
          <span>
            <MdClosedCaptionDisabled className="mr-5" />
          </span>
          Canceled
        </NavLink>
      </div>

      {/* Layout Child */}

      <div
        ref={(div) => {
          contentRef = div;
        }}
        className="content"
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default MasterLayout;
