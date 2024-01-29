import { BellIcon } from "@/assets/icons";
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

function NotifButton() {
  return (
    <>
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
              <Button>Button</Button>
            </PopoverBody>
            <PopoverFooter>This is the footer</PopoverFooter>
          </PopoverContent>
        </Portal>
      </Popover>
    </>
  );
}

export default NotifButton;
