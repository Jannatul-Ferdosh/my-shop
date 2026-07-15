import { Button } from "@chakra-ui/react";
import { CgShoppingCart } from "react-icons/cg";

const CartButton = () => {
  return (
    <Button variant="plain">
      <CgShoppingCart />
    </Button>
  );
};

export default CartButton;
