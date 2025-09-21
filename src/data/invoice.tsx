import { AccountOIcon, AppleIcon, PlaystationIcon } from "@/assets/icons";
import { Invoice } from "@/types/invoice";

export const invoices: Invoice[] = [
  {
    id: 1,
    title: "Apple Store",
    date: "5h ago",
    amount: "$450",
    icon: <AppleIcon />,
  },
  {
    id: 2,
    title: "Michael",
    date: "2 days ago",
    amount: "+$500",
    icon: <AccountOIcon />,
  },
  {
    id: 3,
    title: "Playstation",
    date: "5 days ago",
    amount: "$1085",
    icon: <PlaystationIcon />,
  },
  {
    id: 4,
    title: "William",
    date: "10 days ago",
    amount: "$90",
    icon: <AccountOIcon />,
  },
];