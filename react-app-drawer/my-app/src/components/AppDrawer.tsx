import { Link, Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export type MenuItem = {
  name: string;
  iconUrl: string;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
  menuHeading: string;
};
export function AppDrawer({ menuItems, menuHeading }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex">
      <nav
        className={`pl-2 text-white bg-gray-900 ${isOpen ? 'w-64' : 'w-16'}`}>
        <FaBars onClick={() => setIsOpen(!isOpen)} className="my-5 text-3xl" />
        {isOpen && <h2 className="w-full mb-5 text-2xl">{menuHeading}</h2>}
        <ul>
          {menuItems.map((menu) => (
            <li key={menu.name} className="inline-block py-2 px-2 w-full">
              <Link to={menu.path} className="text-white flex items-center">
                <span>
                  <img src={menu.iconUrl} className="w-4" />
                </span>
                <span className="ml-1">{isOpen && menu.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="grow">
        <Outlet />
      </div>
    </div>
  );
}
