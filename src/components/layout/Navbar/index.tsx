import SearchInput from "@/components/ui/input/SearchInput";
import ProfileButton from "./ProfileButton";
import NotifButton from "./NotifButton";
import SettingButton from "./SettingButton";

interface NavbarProps {
  pageName: string;
}

function Navbar(props: NavbarProps) {
  const { pageName } = props;

  const handleSubmit = (value: string) => {
    console.log(value);
  }

  return (
    <nav className="bg-white flex items-center justify-between gap-10 px-8 py-4">
      <p className="text-xl font-semibold text-primary-200">{pageName}</p>
      <div className="flex items-center gap-4">
        <SearchInput handleSubmit={handleSubmit} />
        {/* setting button */}
       <SettingButton /> 
        {/* notification button */}
        <NotifButton />
        {/* profile button */}
        <ProfileButton />
      </div>
    </nav>
  )
}

Navbar.displayName = "Navbar";

export default Navbar