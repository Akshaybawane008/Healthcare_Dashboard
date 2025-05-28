import React from "react";
import { navLinks } from "../data/navigation";
import * as Icons from "lucide-react";
import "../styles/components/Sidebar.css";

const Sidebar = () => {
  const group1 = navLinks.slice(0, 5);
  const group2 = navLinks.slice(5, 7);
  const setting = navLinks[7];
  const renderNavList = (group) => (
    <ul>
      {group.map((link, index) => {
        const IconComponent = Icons[link.icon] || Icons.Circle;
        return (
          <li key={index} className="nav-item">
            <span className="icon">
              <IconComponent size={16} />
            </span>
            <span>{link.name}</span>
          </li>
        );
      })}
    </ul>
  );

  const SettingIcon = Icons[setting.icon] || Icons.Circle;

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <p className="nav-section">General</p>
        {renderNavList(group1)}
        <p className="nav-section">Other</p>
        {renderNavList(group2)}
      </nav>
      <div className="sidebar-bottom">
        <li className="nav-item">
          <span className="icon">
            <SettingIcon size={16} />
          </span>
          <p className="nav-section">Setting</p>
        </li>
      </div>
    </aside>
  );
};

export default Sidebar;
