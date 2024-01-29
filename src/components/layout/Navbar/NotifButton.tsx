import { BellIcon } from "@/assets/icons";
import LightButton from "@/components/ui/button/LightButton";
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

function SettingButton() {
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <LightButton className="text-magenta">
            <BellIcon />
          </LightButton>
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

export default SettingButton;
