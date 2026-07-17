import { IconButton } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";

const UserButton = () => {
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
          <BiUserCircle />
        </IconButton>
    //<Icon as={BiUserCircle} p={0} m={0} />
  );
};

export default UserButton;
