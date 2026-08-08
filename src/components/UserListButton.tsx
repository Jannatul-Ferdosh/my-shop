import { IconButton } from "@chakra-ui/react";
import { PiUserListFill } from "react-icons/pi";
import { Link } from "react-router";

const UserListButton = () => {
  return (
    <Link to={"/UserListPage"}>
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
        <PiUserListFill />
      </IconButton>
    </Link>
  );
};

export default UserListButton;
