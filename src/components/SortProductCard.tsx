import type Product from "@/entities/product";
import {
  GridItem,
  IconButton,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import ExpandableText from "./ExpandableText";

interface Props {
  cart: Product;
}

const SortProductCard = ({ cart }: Props) => {
  return (
    <SimpleGrid columns={3}>
      <GridItem>
        <Image
          src={cart.image}
          fit="contain"
          boxSize="100px"
          padding="5px"
          bgColor="#ede7e2"
          borderRadius="5px"
        />
      </GridItem>
      <GridItem>
        <Text fontWeight="bold" marginBottom="5px">
          {cart.category}
        </Text>
        <ExpandableText children={cart.description}></ExpandableText>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${cart.price}
        </Text>
      </GridItem>
      <GridItem>
        <IconButton variant="ghost">
          <RiDeleteBinLine style={{ color: "red", fontSize: "24px" }} />
        </IconButton>
      </GridItem>
    </SimpleGrid>
  );
};

export default SortProductCard;
