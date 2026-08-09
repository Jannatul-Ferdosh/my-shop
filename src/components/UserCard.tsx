import type User from "@/entities/user";
import { Box, Flex, Heading, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  return (
    <>
      <HStack
        align="flex-start"
        border="2px solid"
        borderColor="gray.300"
        borderRadius="10px"
        mb={5}
      >
        <Box flex="1" p={6}>
          <Heading size="lg">
            {user.name.firstname} {user.name.lastname}
          </Heading>
          <Text color="gray.500" mb={5}>
            @{user.username}
          </Text>
          <Text>
            <b>User ID</b>: {user.id}
          </Text>
          <Text>
            <b>Email</b>: {user.email}
          </Text>
          <Text>
            <b>Username</b>: {user.username}
          </Text>
          <Text>
            <b>Password</b>: {user.password}
          </Text>
        </Box>

        <Flex direction="column" justify="flex-end">
          <IconButton variant="ghost">
            <FaUserEdit size={22} />
          </IconButton>
          <IconButton variant="ghost" colorPalette="red">
            <RiDeleteBinLine size={22} />
          </IconButton>
        </Flex>
      </HStack>
    </>
  );
};

export default UserCard;
