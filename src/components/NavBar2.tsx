import { HStack, IconButton, Menu, Portal } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ShopName from "./ShopName";
import CartButton from "./CartButton";
import UserButton from "./UserButton";
import { GiHamburgerMenu } from "react-icons/gi";
import ItemCategory from "./ItemCategory";
import UserListButton from "./UserListButton";
import useQueryStore from "@/store";

const NavBar = () => {
  const role = useQueryStore((s) => s.role);
  return (
    <HStack padding="5px">
      <Menu.Root>
        <Menu.Trigger asChild>
          <IconButton
            variant="ghost"
            p={0}
            m={0}
            minW="auto"
            minH="auto"
            h="auto"
            w="auto"
            size="sm"
          >
            <GiHamburgerMenu />
          </IconButton>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <ItemCategory />
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
      <ShopName />
      <SearchInput />
      {(role === "customer" || role === "") && <CartButton />}
      {role === "admin" && <UserListButton />}
      <UserButton />
    </HStack>
  );
};

export default NavBar;
