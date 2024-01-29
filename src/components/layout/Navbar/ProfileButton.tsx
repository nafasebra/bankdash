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
import avatar from "@/assets/images/avatar.png";

function ProfileButton() {
  return (
    <Popover>
      <PopoverTrigger>
        <button className="w-[50px] h-[50px] overflow-hidden flex items-center justify-center rounded-full">
          <img
            src={avatar}
            className="w-full h-full object-cover aspect-auto"
            alt="avatar of username"
          />
        </button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent>
          <PopoverArrow />
          <PopoverHeader>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-full">
                <img
                  src={avatar}
                  className="w-full h-full object-cover aspect-auto"
                  alt="avatar of username"
                />
              </div>
              <div className="w-[calc(100%-3rem)] space-y-1">
                <p className="leading-0">Nafas Ebrahimi</p>
                <p className="text-primary-400 leading-0">Online</p>
              </div>
            </div>
          </PopoverHeader>
          <PopoverBody>
            <Button>Button</Button>
          </PopoverBody>
          <PopoverFooter>This is the footer</PopoverFooter>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default ProfileButton;
