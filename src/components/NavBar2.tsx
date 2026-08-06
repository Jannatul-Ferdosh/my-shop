import { HStack, IconButton, Menu, Portal } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ShopName from "./ShopName";
import CartButton from "./CartButton";
import UserButton from "./UserButton";
import OnsaleButton from "./OnsaleButton";
import NewArrivalButton from "./NewArrivalButton";
import { GiHamburgerMenu } from "react-icons/gi";
import ItemCategory from "./ItemCategory";

const NavBar = () => {
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
              <Menu.Item value="OnSaleButton">
                <OnsaleButton />
              </Menu.Item>
              <Menu.Item value="NewArrivalButton">
                <NewArrivalButton />
              </Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
      <ShopName />
      <SearchInput />
      <CartButton />
      <UserButton />
    </HStack>
  );
};

export default NavBar;
