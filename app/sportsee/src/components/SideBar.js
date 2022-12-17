import React from 'react';
import SideNavigation from '../components/SideNavigation';

/**
 * @description sidebar navigation menu
 */
const SideBar = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="sidebar">
      <SideNavigation />
      <div className="copyright">Copyright, SportSee {year}</div>
    </div>
  );
};

export default SideBar;
