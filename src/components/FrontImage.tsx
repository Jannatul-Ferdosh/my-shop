import { Image } from "@chakra-ui/react";
import girlsPhoto from "../assets/girls-group.png";

const FrontImage = () => {
  return <Image src={girlsPhoto} objectFit="cover" borderRadius="50px" />;
};

export default FrontImage;
