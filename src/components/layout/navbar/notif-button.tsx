import { BellIcon, CloseIcon } from '@/assets/icons';
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
} from '@chakra-ui/react';
import { useState } from 'react';
import { Notification } from '@/types/notification';
import { notificationData } from '@/data/notification';

function NotificationButton() {
  const [notification, setNotification] =
    useState<Notification[]>(notificationData);

  const readNotification = (index: number) => {
    setNotification(() => {
      return [...notification.filter(item => item.id !== index)];
    });
  };

  const readAllNotification = () => {
    setNotification([]);
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
                {notification.length ? (
                  notification.map((notificationItem: Notification) => (
                    <div
                      className="flex items-center justify-between gap-4 py-3"
                      key={notificationItem.id}
                    >
                      <div className="w-[calc(100%-2.5rem)] space-y-1">
                        <p className="leading-none">{notificationItem.title}</p>
                        <p className="text-primary-400 text-sm leading-none">
                          {notificationItem.date}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="w-6 h-6"
                        onClick={() => readNotification(notificationItem.id)}
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
              <button
                className="w-full text-center text-primary"
                onClick={readAllNotification}
              >
                View all notification
              </button>
            </PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </div>
  );
}

export default NotificationButton;
