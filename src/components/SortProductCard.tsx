import {
  Box,
  Flex,
  HStack,
  IconButton,
  Image,
  Separator,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { RiDeleteBinLine } from "react-icons/ri";
import ExpandableText from "./ExpandableText";
import useQueryStore from "@/store";
import useProduct from "@/hooks/useProduct";
interface Props {
  id: number;
}

const SortProductCard = ({ id }: Props) => {
  const removeFromCart = useQueryStore((s) => s.removeFromCart);
  const { data: cart, isLoading, error } = useProduct(id);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <HStack align="flex-start" gap={4}>
        <Image
          src={cart.image}
          fit="contain"
          w={{ base: "70px", md: "90px" }}
          h={{ base: "100px", md: "130px" }}
          p={2}
          bg="#ede7e2"
          borderRadius="md"
        />

        <Box flex="1">
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            {cart.category}
          </Text>

          <ExpandableText>{cart.description}</ExpandableText>

          <Text mt={2} fontSize="xl" fontWeight="medium">
            ${cart.price}
          </Text>
        </Box>

        <Flex>
          <IconButton
            variant="ghost"
            colorPalette="red"
            onClick={() => removeFromCart(cart.id)}
          >
            <RiDeleteBinLine size={22} />
          </IconButton>
        </Flex>
      </HStack>

      <Separator my={4} />
    </>
  );
};

export default SortProductCard;
