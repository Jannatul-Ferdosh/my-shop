import { HStack } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";
import ShopName from "./ShopName";
import ItemCategory from "./ItemCategory";
import CartButton from "./CartButton";
import UserButton from "./UserButton";
import UserListButton from "./UserListButton";
import useQueryStore from "@/store";

const NavBar = () => {
  const isAdmin = useQueryStore((s) => s.isAdmin);
  return (
    <HStack
      paddingX={{ base: "40px", lg: "100px" }}
      paddingY={{ base: "10px", lg: "20px" }}
    >
      <ShopName />
      <ItemCategory />
      <SearchInput />
      {isAdmin === false && <CartButton />}
      {isAdmin && <UserListButton />}
      <UserButton />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
