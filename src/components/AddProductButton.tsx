import { Button } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router";

const AddProductButton = () => {
  return (
    <Link to={"/AdminAddProductPage"}>
      <Button ml={5}>
        Add Product
        <MdAdd />
      </Button>
    </Link>
  );
};

export default AddProductButton;
