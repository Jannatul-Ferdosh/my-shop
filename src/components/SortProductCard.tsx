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
import useProduct from "@/hooks/useProduct";
import useDeleteProduct from "@/hooks/useDeleteProduct";
interface Props {
  id: number;
}

const SortProductCard = ({ id }: Props) => {
  const mutateDeleteProduct = useDeleteProduct();
  const { data: product, isLoading, error } = useProduct(id);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <HStack align="flex-start" gap={4}>
        <Image
          src={product.image}
          fit="contain"
          w={{ base: "70px", md: "90px" }}
          h={{ base: "100px", md: "130px" }}
          p={2}
          bg="#ede7e2"
          borderRadius="md"
        />

        <Box flex="1">
          <Text fontSize="xl" fontWeight="bold" mb={2}>
            {product.category}
          </Text>

          <ExpandableText>{product.description}</ExpandableText>

          <Text mt={2} fontSize="xl" fontWeight="medium">
            ${product.price}
          </Text>
        </Box>

        <Flex>
          <IconButton
            variant="ghost"
            colorPalette="red"
            onClick={() => mutateDeleteProduct.mutate(product.id)}
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
