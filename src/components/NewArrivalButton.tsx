import { Button } from "@chakra-ui/react";
import { Link } from "react-router";

const NewArrivalButton = () => {
  return (
    <Link to={"/AllProducts"}>
      <Button variant="plain">New Arrivals</Button>
    </Link>
  );
};

export default NewArrivalButton;
