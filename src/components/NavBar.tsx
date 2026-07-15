import { HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import ShopName from "./ShopName";
import ItemCategory from "./ItemCategory";
import CartButton from "./CartButton";
import UserButton from "./UserButton";
import OnsaleButton from "./OnsaleButton";
import NewArrivalButton from "./NewArrivalButton";

const NavBar = () => {
  return (
    <HStack
      paddingX={{ base: "40px", lg: "100px" }}
      paddingY={{ base: "10px", lg: "20px" }}
    >
      <ShopName />
      <ItemCategory />
      <OnsaleButton />
      <NewArrivalButton />
      <SearchInput />
      <CartButton />
      <UserButton />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
