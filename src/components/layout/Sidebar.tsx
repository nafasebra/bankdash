import { Link, useLocation } from "react-router-dom";
import { menuLinks } from "@/types/data/link";

function Sidebar() {
  const locate = useLocation();

  return (
    <div className="bg-white hidden md:flex flex-col gap-10 py-7 w-[300px] border-r border-light">
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
    </div>
  );
}

export default Sidebar;
