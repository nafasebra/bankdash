import LightButton from "@/components/ui/button/LightButton";
import SearchInput from "@/components/ui/input/SearchInput";
import { BellIcon, SettingOIcon } from "@/assets/icons";
import avatar from '@/assets/images/avatar.png'

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
      <p className="text-xl font-bold text-primary-200">{pageName}</p>
      <div className="flex items-center gap-4">
        <SearchInput handleSubmit={handleSubmit} />
        {/* setting button */}
        <LightButton className="text-primary-400">
          <SettingOIcon />
        </LightButton>
        {/* notification button */}
        <LightButton className="text-magenta">
          <BellIcon />
        </LightButton>
        {/* profile button */}
        <button className="w-[50px] h-[50px] overflow-hidden flex items-center justify-center rounded-full">
          <img src={avatar} className="w-full h-full object-cover aspect-auto" alt="avatar of username" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar