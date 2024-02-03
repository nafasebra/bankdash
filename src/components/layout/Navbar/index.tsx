import SearchInput from "@/components/ui/input/SearchInput";
import ProfileButton from "./ProfileButton";
import NotifButton from "./NotifButton";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { SettingOIcon } from "@/assets/icons";
import { MenuIcon } from "@/assets/icons";
import MobileSidebar from "./MobileSidebar";
import { useState } from "react";
import { menuLinks } from "@/types/data/link";

function Navbar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const locate = useLocation();

  const handleSubmit = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <nav className="bg-white px-8 py-4 space-y-4">
        <div className="flex items-center justify-between gap-10">
          <button
            onClick={() => setShowMenu(true)}
            className="w-10 h-10 flex md:hidden items-center justify-center text-black"
          >
            <MenuIcon />
          </button>
          <p className="text-xl font-semibold text-primary-200">
            {menuLinks.filter((item) => item.link === locate.pathname)[0].title}
          </p>
          <div className="flex items-center gap-4">
            <SearchInput
              className="hidden md:flex w-[250px]"
              handleSubmit={handleSubmit}
            />
            <div className="hidden md:flex">
              <Button variant="light" onClick={() => navigate("/settings")}>
                <SettingOIcon />
              </Button>
            </div>
            <NotifButton />
            <ProfileButton />
          </div>
        </div>
        <div className="block md:hidden">
          <SearchInput className="w-full" handleSubmit={handleSubmit} />
        </div>
      </nav>
      <MobileSidebar show={showMenu} handleClose={() => setShowMenu(false)} />
    </>
  );
}

Navbar.displayName = "Navbar";

export default Navbar;
