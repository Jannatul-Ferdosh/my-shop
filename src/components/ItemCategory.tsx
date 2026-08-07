import useAllCategories from "@/hooks/useAllCategories";
import useQueryStore from "@/store";
import { Menu, Button, Portal, Spinner } from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router";

const ItemCategory = () => {
  const Category = useQueryStore((s) => s.category);
  const setCategory = useQueryStore((s) => s.setCategory);
  const { data, isLoading, error } = useAllCategories();
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="plain">
          {Category || "All Products"}
          <IoChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content bgColor="#fbf0e1">
            <Link to={"/AllProducts"}>
              <Menu.Item
                value="All Products"
                onClick={() => setCategory("All Products")}
              >
                All Products
              </Menu.Item>
            </Link>
            {data.map((c: string) => (
              <Link to={`/category/${encodeURIComponent(c)}`}>
                <Menu.Item value={c} onClick={() => setCategory(c)}>
                  {c}
                </Menu.Item>
              </Link>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default ItemCategory;
