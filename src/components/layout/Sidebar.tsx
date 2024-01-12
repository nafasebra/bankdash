import { Link } from "react-router-dom";
import {
  AccountIcon,
  CreditcardIcon,
  HomeIcon,
  InvestmentsIcon,
  LoansIcon,
  ServicesIcon,
  SettingsIcon,
  TransactionIcon,
} from "@/assets/icons";
import { menuLinkType } from "@/types/link";
import { linkEnum } from "@/enums/link";

// eslint-disable-next-line react-refresh/only-export-components
export const menuLinks: menuLinkType[] = [
  {
    id: 1,
    title: linkEnum.Dashboard,
    link: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: linkEnum.Transactions,
    link: "/transactions",
    icon: <TransactionIcon />,
  },
  {
    id: 3,
    title: linkEnum.Accounts,
    link: "/accounts",
    icon: <AccountIcon />,
  },
  {
    id: 4,
    title: linkEnum.Investments,
    link: "/investments",
    icon: <InvestmentsIcon />,
  },
  {
    id: 5,
    title: linkEnum.Credit,
    link: "/cards",
    icon: <CreditcardIcon />,
  },
  {
    id: 6,
    title: linkEnum.Loans,
    link: "/loans",
    icon: <LoansIcon />,
  },
  {
    id: 7,
    title: linkEnum.Services,
    link: "/services",
    icon: <ServicesIcon />,
  },
  {
    id: 8,
    title: linkEnum.Setting,
    link: "/setting",
    icon: <SettingsIcon />,
  },
];

interface SidebarProps {
  active: linkEnum;
}

function Sidebar(props: SidebarProps) {
  const { active } = props;

  return (
    <div className="bg-white flex flex-col gap-10 py-6 w-[300px] border-r border-light">
      <div className="px-6">
        <img src="/logo.png" className="w-[150px]" />
      </div>
      <ul className="flex flex-col gap-2">
        {menuLinks.map((menu) => (
          <li key={menu.id} className="relative">
            <div className={`${menu.title === active ? "block" : "hidden"} absolute bg-primary-100 top-0 bottom-0 left-0 w-2 rounded-r-2xl h-full`}></div>
            <Link
              to={menu.link}
              className={`flex items-center gap-6 py-3 px-6 relative ${menu.title === active ? "text-primary-100" : "text-primary-200/60"} hover:text-primary-100 transition-all`}
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
