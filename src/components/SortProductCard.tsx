import {
  Box,
  Button,
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
import { LuMinus, LuPlus } from "react-icons/lu";
import useUpdateProduct from "@/hooks/useUpdateProduct";
import type { UpdateProductVariables } from "@/entities/updateProduct";
interface Props {
  id: number;
  qn: number;
}

const SortProductCard = ({ id, qn }: Props) => {
  const mutateDeleteProduct = useDeleteProduct();
  const mutateUpdateProduct = useUpdateProduct();
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
          <Box w="125px" mt="10px">
            <HStack
              border="1px solid"
              borderColor="gray.200"
              borderRadius="md"
              p={1}
              gap={1}
            >
              <Button
                size="xs"
                variant="ghost"
                onClick={() => {
                  if (qn === 1) return;
                  qn--;
                  const updateVariable: UpdateProductVariables = {
                    id: id,
                    qn: {
                      quantity: qn,
                    },
                  };
                  mutateUpdateProduct.mutate(updateVariable);
                }}
              >
                <LuMinus />
              </Button>

              <Text minW="32px" textAlign="center" fontWeight="bold">
                {qn}
              </Text>

              <Button
                size="xs"
                variant="ghost"
                onClick={() => {
                  qn++;
                  const updateVariable: UpdateProductVariables = {
                    id: id,
                    qn: {
                      quantity: qn,
                    },
                  };
                  mutateUpdateProduct.mutate(updateVariable);
                }}
              >
                <LuPlus />
              </Button>
            </HStack>
          </Box>
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
