import React from "react";
import { CloseIcon } from "@/assets/icons";
import { menuLinks } from "@/types/data/link";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  show: boolean;
  handleClose: () => void;
}

function MobileSidebar(props: SidebarProps) {
  const { handleClose, show } = props;
  const locate = useLocation();

  return (
    <>
      <div
        onClick={handleClose}
        className={`${
          show ? "visible opacity-100" : "invisible opacity-0"
        } fixed inset-0 bg-black/10`}
      ></div>
      <aside
        className={`${
          show ? "translate-x-0" : "-translate-x-[100%]"
        } bg-white fixed left-0 top-0 bottom-0 transition-transform flex md:hidden flex-col gap-10 py-7 w-[300px] h-dvh overflow-y-auto`}
      >
        <button
          className="absolute top-0 right-0 w-20 h-20 flex items-center justify-center"
          onClick={handleClose}
        >
          <div className="w-8 h-8 flex items-center">
            <CloseIcon />
          </div>
        </button>
        <div className="px-6">
          <img src="/logo.png" className="w-[150px]" />
        </div>
        <ul className="flex flex-col gap-2">
          {menuLinks.map((menu) => (
            <li key={menu.id} className="relative">
              <div
                className={`${
                  menu.title ===
                  menuLinks.filter((item) => item.link === locate.pathname)[0]
                    .title
                    ? "block"
                    : "hidden"
                } absolute bg-primary-100 top-0 bottom-0 left-0 w-2 rounded-r-2xl h-full`}
              ></div>
              <Link
                to={menu.link}
                className={`flex items-center gap-6 py-3 px-6 relative ${
                  menu.title ===
                  menuLinks.filter((item) => item.link === locate.pathname)[0]
                    .title
                    ? "text-primary-100"
                    : "text-primary-200/60"
                } hover:text-primary-100 transition-all`}
              >
                <div className="w-5 h-5 flex items-center">{menu.icon}</div>
                <p>{menu.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}

export default MobileSidebar;
