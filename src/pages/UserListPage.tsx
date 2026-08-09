import UserCard from "@/components/UserCard";
import type User from "@/entities/user";
import useAllUsers from "@/hooks/useAllUsers";
import { Heading, SimpleGrid, GridItem, Spinner, Box } from "@chakra-ui/react";

const UserListPage = () => {
  const { data: users, isLoading, error } = useAllUsers();
  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <Box paddingX={{ base: "20px", lg: "100px" }}>
      <Heading paddingY="20px" size="3xl" fontWeight="bold">
        User List
      </Heading>
      <SimpleGrid padding="10px" marginRight={{ lg: "20px" }}>
        {users.map((user: User) => {
          return (
            <GridItem key={user.id}>
              <UserCard user={user} />
            </GridItem>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default UserListPage;
