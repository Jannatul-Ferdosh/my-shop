import NavBar from "@/components/NavBar";
import NavBar2 from "@/components/NavBar2";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Box hideBelow="md">
        <NavBar />
      </Box>
      <Box hideFrom="md">
        <NavBar2 />
      </Box>
      <Box>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
