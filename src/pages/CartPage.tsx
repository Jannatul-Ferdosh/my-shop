import OrderSummary from "@/components/OrderSummary";
import SortProductCard from "@/components/SortProductCard";
import useCarts from "@/hooks/useCarts";
//import useQueryStore from "@/store";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

const CartPage = () => {
  //const carts = useQueryStore((s) => s.cart);
  const { data: carts, error, isLoading } = useCarts();
  if (isLoading) return <Spinner />;
  if (error) throw error;
  //if (carts) console.log(carts);
  //let total: number = 0;

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
            {carts.map((cart: any) => {
              return cart.products.map((c: any) => {
                return (
                  <GridItem key={c.productId}>
                    <SortProductCard id={c.productId} />
                  </GridItem>
                );
              });
            })}
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <OrderSummary />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default CartPage;
