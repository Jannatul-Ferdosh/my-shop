import useQueryStore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current){
          setSearchText(parseInt(ref.current.value));
        }
      }}
    >
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
