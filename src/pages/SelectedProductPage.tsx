import ProductsCard from "@/components/ProductsCard";
import useSelectedProduct from "@/hooks/useSelectedProduct";
import useQueryStore from "@/store";
import {
  Button,
  Flex,
  GridItem,
  Menu,
  Portal,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { IoChevronDown } from "react-icons/io5";
import { useParams } from "react-router";

const SelectedProductPage = () => {
  const setSort = useQueryStore((s) => s.setSort);
  const setSortby = useQueryStore((s) => s.setSorby);
  const sorted = useQueryStore((s) => s.sorted);
  const setSorted = useQueryStore((s) => s.setSorted);
  const { category } = useParams<{ category: string }>();
  if (category === undefined) return null;
  const { data, error, isLoading } = useSelectedProduct(category);
  console.log(data);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Flex justify="flex-end" paddingX={{ base: "40px", lg: "100px" }}>
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button bgColor="gray.200" variant="outline">
              {sorted || "Sort by"}
              <IoChevronDown />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item
                  value="price-asc"
                  onClick={() => {
                    setSort("asc");
                    setSortby("price");
                    setSorted("Price (Low to High)");
                  }}
                >
                  Price (Low to High)
                </Menu.Item>
                <Menu.Item
                  value="price-desc"
                  onClick={() => {
                    setSort("desc");
                    setSortby("price");
                    setSorted("Price (High to Low)");
                  }}
                >
                  Price (High to Low)
                </Menu.Item>
                <Menu.Item
                  value="name-asc"
                  onClick={() => {
                    setSort("asc");
                    setSortby("name");
                    setSorted("Name (A to Z)");
                  }}
                >
                  Name (A to Z)
                </Menu.Item>
                <Menu.Item
                  value="name-desc"
                  onClick={() => {
                    setSort("desc");
                    setSortby("name");
                    setSorted("Name (Z to A)");
                  }}
                >
                  Name (Z to A)
                </Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Flex>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        gap="30px"
        paddingY="20px"
        paddingX={{ base: "40px", lg: "100px" }}
      >
        {data.map((p: any) => (
          <GridItem key={p.id}>
            <ProductsCard product={p} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default SelectedProductPage;
