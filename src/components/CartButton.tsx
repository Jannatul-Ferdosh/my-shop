import {IconButton } from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";

const CartButton = () => {
  return (
    <IconButton
      variant="ghost"
      p={0}
      m={0}
      minW="auto"
      minH="auto"
      h="auto"
      w="auto"
      size={{base:"sm", md:"lg"}}
    >
      <CgShoppingCart />
    </IconButton>
  );
};

export default CartButton;
