import { Button } from "@chakra-ui/react";
import { Link } from "react-router";

const OnsaleButton = () => {
  return (
    <Link to={"/AllProducts"}>
      <Button variant="plain">On Sale</Button>
    </Link>
  );
};

export default OnsaleButton;
