import { SearchIcon } from "@/assets/icons";
import { FormEvent, useState } from "react";

interface SearchProps {
  className?: string;
  handleSubmit: (value: string) => void;
}

function SearchInput(props: SearchProps) {
  const { handleSubmit, className } = props;
  const [value, setValue] = useState<string>("");

  const handleSubmitMain = (event: FormEvent) => {
    event.preventDefault();
    handleSubmit(value);
  };

  return (
    <form onSubmit={handleSubmitMain} className={`relative ${className || ""}`}>
      <input
        type="text"
        className="w-full h-[50px] rounded-full bg-light py-3 pl-14 pr-4 text-primary-400 outline-none focus:bg-white focus-visible:bg-white transition-colors"
        placeholder="Search for something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="bg-transparent rounded-full absolute top-0 left-0 bottom-0 h-full w-14 flex items-center justify-center text-primary-400">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchInput;
