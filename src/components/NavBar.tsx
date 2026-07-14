import { HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="50px">
      <ColorModeButton />
      <SearchInput />
    </HStack>
  );
};

export default NavBar;
