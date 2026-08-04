import useQueryStore from "@/store";
import { IconButton, Menu, Portal } from "@chakra-ui/react";
import { BiUserCircle } from "react-icons/bi";
import { Link } from "react-router";

const UserButton = () => {
  const isLoggedIn = useQueryStore(s => s.isLoggedIn);
  const setLoggedIn = useQueryStore(s => s.setLoggedIn);
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
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
          <BiUserCircle />
        </IconButton>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {isLoggedIn && (
              <Menu.Item
                value="sign-out"
                onClick={() => {
                  localStorage.removeItem("token");
                  setLoggedIn();
                }}
              >
                Sign Out
              </Menu.Item>
            )}
            {isLoggedIn === false && (
              <Link to={"/User/SignUp"}>
                <Menu.Item value="sign-up">
                  Sign Up
                </Menu.Item>
              </Link>
            )}
            {isLoggedIn === false && (
              <Link to={"/User/SignIn"}>
                <Menu.Item value="sign-in">
                  Sign In
                </Menu.Item>
              </Link>
            )}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default UserButton;
