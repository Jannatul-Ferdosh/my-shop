import { Heading } from "@chakra-ui/react";
import { Link } from "react-router";

const ShopName = () => {
  return (
    <Link to={"/"}>
      <Heading whiteSpace="nowrap" mr={{ md: "20px" }} fontWeight="extrabold">
        MY SHOP
      </Heading>
    </Link>
  );
};

export default ShopName;
