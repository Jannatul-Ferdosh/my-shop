import type activeUserVariable from "@/entities/activeUservariable";
import type User from "@/entities/user";
import useActiveUser from "@/hooks/useActiveUser";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => {
  const mutateActiveUser = useActiveUser();
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
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
        {user.active && (
          <Button
            m={5}
            bgColor="green"
            onClick={() => {
              const activeUserVariable: activeUserVariable = {
                id: user.id,
                status: {
                  active: false,
                },
              };
              return mutateActiveUser.mutate(activeUserVariable);
            }}
          >
            Deactivate
          </Button>
        )}
        {!user.active && (
          <Button
            m={5}
            bgColor="red"
            onClick={() => {
              const activeUserVariable: activeUserVariable = {
                id: user.id,
                status: {
                  active: true,
                },
              };
              mutateActiveUser.mutate(activeUserVariable);
            }}
          >
            Activate
          </Button>
        )}
      </Flex>
    </>
  );
};

export default UserCard;
