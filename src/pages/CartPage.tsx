import OrderSummary from "@/components/OrderSummary";
import SortProductCard from "@/components/SortProductCard";
import useCarts from "@/hooks/useCarts";
import useQueryStore from "@/store";
//import useQueryStore from "@/store";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router";

const CartPage = () => {
  const isLoggedIn = useQueryStore((s) => s.isLoggedIn);
  if (!isLoggedIn)
    return (
      <Flex justify="center">
        <Box
          border="solid 2px"
          borderRadius="5px"
          borderColor="gray.300"
          padding="10px"
        >
          Please{" "}
          <Link
            to={"/User/SignIn"}
            style={{
              color: "#3182CE",
              textDecoration: "underline",
            }}
          >
            Sign In
          </Link>{" "}
          or{" "}
          <Link
            to={"/User/SignUp"}
            style={{
              color: "#3182CE",
              textDecoration: "underline",
            }}
          >
            Sign Up
          </Link>{" "}
          to see the cart
        </Box>
      </Flex>
    );
  const { data: carts, error, isLoading } = useCarts();
  if (isLoading) return <Spinner />;
  if (error) throw error;

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
