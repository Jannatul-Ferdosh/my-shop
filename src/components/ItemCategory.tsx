import useAllCategories from "@/hooks/useAllCategories";
import { Menu, Button, Portal, Spinner } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";

const ItemCategory = () => {
  const { data, isLoading, error } = useAllCategories();
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="plain">
          Category
          <IoChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content bgColor="#fbf0e1">
            {data.map((c: string) => (
              <Menu.Item key={c} value={c}>
                {c}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default ItemCategory;
