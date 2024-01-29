import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
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
              <div className="w-8 h-8 flex items-center justify-center rounded-full overflow-hidden">
                <img
                  src={avatar}
                  className="w-full h-full object-cover aspect-auto"
                  alt="avatar of username"
                />
              </div>
              <div className="w-[calc(100%-3rem)]">
                <p className="leading-0">Nafas Ebrahimi</p>
                <p className="text-primary-400 text-sm leading-0">Online</p>
              </div>
            </div>
          </PopoverHeader>
          <PopoverBody>
            <button type="button" className="w-full py-3 px-4 text-magenta hover:bg-light">
              Sign out
            </button>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

export default ProfileButton;
