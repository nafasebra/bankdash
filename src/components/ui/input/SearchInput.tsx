import { SearchIcon } from "@/assets/icons";
import { FormEvent, useState } from "react";

interface SearchProps {
  handleSubmit: (value: string) => void;
}

function SearchInput(props: SearchProps) {
  const { handleSubmit } = props;
  const [value, setValue] = useState<string>("");

  const handleSubmitMain = (event: FormEvent) => {
    event.preventDefault();
    console.log(event);
    handleSubmit(value);
  };

  return (
    <form onSubmit={handleSubmitMain} className="relative">
      <input
        type="text"
        className="w-[250px] h-[50px] rounded-full bg-light py-3 pl-14 pr-4 text-dark-blue outline-none focus:bg-white focus-visible:bg-white transition-colors"
        placeholder="Search for something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="bg-transparent rounded-full absolute top-0 left-0 bottom-0 h-full w-14 flex items-center justify-center text-dark-blue">
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchInput;
