import OrderSummary from "@/components/OrderSummary";
import SortProductCard from "@/components/SortProductCard";
import useQueryStore from "@/store";
import { Box, GridItem, Heading, SimpleGrid } from "@chakra-ui/react";

const CartPage = () => {
  const carts = useQueryStore((s) => s.cart);
  let total: number = 0;
  return (
    <Box paddingX={{ base: "20px", lg: "100px" }}>
      <Heading paddingY="20px" size="3xl" fontWeight="bold">
        Your Cart
      </Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }}>
        <GridItem>
          <SimpleGrid
            border="2px solid"
            borderColor="gray.300"
            borderRadius="10px"
            padding="10px"
            marginRight={{ lg: "20px" }}
          >
            {carts.map((cart) => {
              total += cart.price;
              return (
                <GridItem>
                  <SortProductCard cart={cart} />
                </GridItem>
              );
            })}
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <OrderSummary totalPrice={total} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default CartPage;
