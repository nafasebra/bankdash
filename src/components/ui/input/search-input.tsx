import { SearchIcon } from "@/assets/icons";
import { Button, Input } from "@chakra-ui/react";
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
      <Input
        type="text"
        variant={'search'}
        placeholder="Search for something"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <span className="bg-transparent rounded-full absolute top-0 left-0 bottom-0 h-full w-14 flex items-center justify-center text-primary-400">
        <SearchIcon />
      </span>
    </form>
  );
}

export default SearchInput;
