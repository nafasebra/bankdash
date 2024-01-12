import SearchInput from "../ui/input/SearchInput";

interface NavbarProps {
  pageName: string;
}

function Navbar(props: NavbarProps) {
  const { pageName } = props;

  const handleSubmit = (value: string) => {
    console.log(value);
  }

  return (
    <nav className="bg-white flex items-center justify-between gap-10 px-8 py-6">
      <p className="text-xl font-bold text-primary-200">{pageName}</p>
      <div className="flex items-center gap-6">
        <SearchInput handleSubmit={handleSubmit} />
        {/* setting button */}
        {/* notification button */}
        {/* profile button */}
      </div>
    </nav>
  )
}

export default Navbar