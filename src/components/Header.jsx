import React from "react";
import { Plus, Bell } from "lucide-react";
import avtar from "../../src/assets/avatar.png"
import "../styles/components/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="search" >
        <h2 className="sidebar-title">
        Health<span className="accent">care.</span>
      </h2>
      <div className="search-box">
        <input type="text" placeholder="Search" disabled />
         <Bell size={20} className="icon" />
      </div>
      </div>
      <div className="header-actions">
        <img src={avtar} alt="User" className="avatar" />
        <button className="add-btn">
          <Plus size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
