import OrderSummary from "@/components/OrderSummary";
import SortProductCard from "@/components/SortProductCard";
import useCarts from "@/hooks/useCarts";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

const CartDetailspage = () => {
  const { data: carts, error, isLoading } = useCarts();
  if (isLoading) return <Spinner />;
  if (error) {
    console.log(error);
    if (axios.isAxiosError(error))
      return (
        <Flex justify="center">
          <Box
            border="solid 2px"
            borderRadius="5px"
            borderColor="gray.300"
            padding="10px"
            bgColor="#ffe19c"
          >
            <Heading>{error.response?.data.message}</Heading>
          </Box>
        </Flex>
      );
    else throw error;
  }

  if (carts[0].products.length === 0)
    return (
      <Flex justify="center">
        <Box
          border="solid 2px"
          borderRadius="5px"
          borderColor="gray.300"
          bgColor="#ffe19c"
          padding="10px"
        >
          No Product is added to the Cart
        </Box>
      </Flex>
    );

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
                    <SortProductCard id={c.productId} qn={c.quantity} />
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

export default CartDetailspage;
