import { SimpleGrid } from "@chakra-ui/react";
import HeadingText from "./HeadingText";
import FrontImage from "./FrontImage";

const Header = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      paddingX={{ base: "40px", lg: "100px" }}
      paddingY={{ base: "10px", lg: "20px" }}
    >
      <HeadingText />
      <FrontImage />
    </SimpleGrid>
  );
};

export default Header;
