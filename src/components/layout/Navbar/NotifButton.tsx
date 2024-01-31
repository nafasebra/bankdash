import { BellIcon, CloseIcon } from "@/assets/icons";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { useState } from "react";

const notifData = [
  {
    id: 1,
    title: "New update",
    date: "16 hours ago",
  },
  {
    id: 2,
    title: "New update",
    date: "20 hours ago",
  },
  {
    id: 3,
    title: "New update",
    date: "1 days ago",
  },
];

function NotifButton() {
  const [notif, setNotif] = useState(notifData);

  const readNotif = (index: number) => {
    setNotif(() => {
      return [...notif.filter((item) => item.id !== index)];
    });
  };

  const readAllNotif = () => {
    setNotif([]);
  };

  return (
    <div className="hidden md:flex">
      <Popover>
        <PopoverTrigger>
          <Button variant="light" color="magenta">
            <BellIcon />
          </Button>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverArrow />
            <PopoverHeader>
              <div className="flex items-center gap-4"></div>
            </PopoverHeader>
            <PopoverBody>
              <ul className="divide-y divide-light-200">
                {notif.length ? (
                  notif.map((notifItem) => (
                    <div
                      className="flex items-center justify-between gap-4 py-3"
                      key={notifItem.id}
                    >
                      <div className="w-[calc(100%-2.5rem)] space-y-1">
                        <p className="leading-0">{notifItem.title}</p>
                        <p className="text-primary-400 text-sm leading-0">
                          {notifItem.date}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="w-6 h-6"
                        onClick={() => readNotif(notifItem.id)}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="py-3 text-center text-primary-400">
                    There aren't notification here
                  </p>
                )}
              </ul>
            </PopoverBody>
            <PopoverFooter>
              <button className="w-full text-center text-primary" onClick={readAllNotif}>View all notification</button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
}

export default NotifButton;
