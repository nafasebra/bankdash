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
import { linkEnum } from "../enums/link";
import { menuLinkType } from "../link";

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