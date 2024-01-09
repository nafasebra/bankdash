interface NavbarProps {
  pageName: string;
}

function Navbar(props: NavbarProps) {
  const { pageName } = props;

  return (
    <nav className="bg-white flex items-center justify-between gap-10 px-8 py-6">
      <p className="text-xl font-bold">{pageName}</p>
      <div className="flex items-center gap-6">
        {/* search */}
        {/* setting button */}
        {/* notification button */}
        {/* profile button */}
      </div>
    </nav>
  )
}

export default Navbar