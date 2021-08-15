import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as GiIcons from 'react-icons/gi';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text-component',
  },
  {
    title: 'About',
    path: '/about',
    icon: <SiIcons.SiAboutDotMe />,
    cName: 'nav-text-component',
  },
  {
    title: 'Experience',
    path: '/work-experience',
    icon: <GiIcons.GiNetworkBars />,
    cName: 'nav-text-component',
  },
  {
    title: 'Social',
    path: '/social',
    icon: <FaIcons.FaUserPlus />,
    cName: 'nav-text-component',
  },
];
