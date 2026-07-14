import { Input } from "@chakra-ui/react";
import { useRef } from "react";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form>
      <Input ref={ref} placeholder="Search a product..."></Input>
    </form>
  );
};

export default SearchInput;
