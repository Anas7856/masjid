"use client";
import React from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import "./navbar.scss";
import { ChevronDown, Menu, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div dir="rtl">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image height={35} width={160} src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler br-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <Menu className="navbar-toggler-icon" color="white" size={16} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle gap-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  سرورق
                  <ChevronDown size={16} />
                </a>
                <ul className="dropdown-menu text-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      ایکشن
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      دوسرا ایکشن
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      اور کچھ
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle gap-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  دارالافتاء
                  <ChevronDown size={16} />
                </a>
                <ul className="dropdown-menu text-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      ایکشن
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle gap-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  بینات
                  <ChevronDown size={16} />
                </a>
                <ul className="dropdown-menu text-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      کتابیں
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle gap-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  کتابیں <ChevronDown size={16} />
                </a>
                <ul className="dropdown-menu text-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      ایکشن
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle gap-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  دعائیں
                  <ChevronDown size={16} />
                </a>
                <ul className="dropdown-menu text-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      ایکشن
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle gap-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  آن لائین داخلہ
                  <ChevronDown size={16} />
                </a>
                <ul className="dropdown-menu text-end">
                  <li>
                    <a className="dropdown-item" href="#">
                      ایکشن
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-box">
                <input className="form-control ms-2" placeholder="تلاش کریں" />
                <Search size={16} className="search-icon" />
              </div>
              <h3 className="navbar-end-text">
                13 شوال 1446 ھ 12 اپریل 2025 ء
              </h3>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
