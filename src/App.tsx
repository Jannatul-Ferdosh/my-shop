import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import NavBar2 from "./components/NavBar2";
import ProductsGrid from "./components/ProductsGrid";

const App = () => {
  return (
    <>
      <Box hideBelow="md">
        <NavBar />
      </Box>
      <Box hideFrom="md">
        <NavBar2 />
      </Box>
      <Header />
      <ProductsGrid />
    </>
  );
};

export default App;
