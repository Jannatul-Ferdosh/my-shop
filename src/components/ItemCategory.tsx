import { Menu, Button, Portal } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

const ItemCategory = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="plain">
          Shop
          <IoChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="Men">Men</Menu.Item>
            <Menu.Item value="Women">Women</Menu.Item>
            <Menu.Item value="Kids">Kids</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default ItemCategory;
