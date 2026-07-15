import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form>
      <InputGroup startElement={<BsSearch />}>
        <Input
          ref={ref}
          placeholder="Search for products..."
          variant="subtle"
          borderRadius="20px"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
