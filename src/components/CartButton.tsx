import { IconButton } from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router";

const CartButton = () => {
  return (
    <Link to={"/Cart"}>
      <IconButton
        variant="ghost"
        p={0}
        m={0}
        minW="auto"
        minH="auto"
        h="auto"
        w="auto"
        size={{ base: "sm", md: "lg" }}
      >
        <CgShoppingCart />
      </IconButton>
    </Link>
  );
};

export default CartButton;
