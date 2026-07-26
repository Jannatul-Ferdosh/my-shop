import SortProductCard from "@/components/SortProductCard";
import useQueryStore from "@/store";
import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";

const CartPage = () => {
  const carts = useQueryStore((s) => s.cart);
  return (
    <Box paddingX={{ base: "40px", lg: "100px" }}>
      <Heading paddingY="20px" size="3xl" fontWeight="bold">
        Your Cart
      </Heading>
      <SimpleGrid
        gap="10px"
        border="2px solid"
        borderColor="gray.300"
        borderRadius="10px"
        padding="10px"
      >
        {carts.map((cart) => (
          <GridItem>
            <SortProductCard cart={cart} />
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default CartPage;
