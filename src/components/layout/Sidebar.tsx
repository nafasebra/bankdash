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

export const menuLinks: menuLinkType[] = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Transactions",
    link: "/transactions",
    icon: <TransactionIcon />,
  },
  {
    id: 3,
    title: "Accounts",
    link: "/accounts",
    icon: <AccountIcon />,
  },
  {
    id: 4,
    title: "Investments",
    link: "/investments",
    icon: <InvestmentsIcon />,
  },
  {
    id: 5,
    title: "Credit Cards",
    link: "/cards",
    icon: <CreditcardIcon />,
  },
  {
    id: 6,
    title: "Loans",
    link: "/loans",
    icon: <LoansIcon />,
  },
  {
    id: 7,
    title: "Services",
    link: "/services",
    icon: <ServicesIcon />,
  },
  {
    id: 8,
    title: "Setting",
    link: "/setting",
    icon: <SettingsIcon />,
  },
];

function Sidebar() {
  return (
    <div className="bg-white flex flex-col gap-16 py-10 px-6 w-[300px]">
      <img src="/logo.png" className="w-full" />
      <ul className="flex flex-col gap-2">
        {menuLinks.map((menu) => (
          <li key={menu.id}>
            <Link
              to={menu.link}
              className="flex items-center gap-6 py-2 relative px-4"
            >
              <div className="w-7 h-7 flex items-center">{menu.icon}</div>
              <p>{menu.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
