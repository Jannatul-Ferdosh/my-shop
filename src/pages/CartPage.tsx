import useQueryStore from "@/store";
import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router";
import CartDetailspage from "./CartDetailspage";

const CartPage = () => {
  const isLoggedIn = useQueryStore((s) => s.isLoggedIn);
  if (!isLoggedIn) {
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
  }
  return(
    <CartDetailspage/>
  );
};

export default CartPage;
