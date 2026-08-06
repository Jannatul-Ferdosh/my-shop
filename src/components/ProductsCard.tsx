import type Product from "@/entities/product";
import { Button, Card, Image, Text } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import useAddProduct from "@/hooks/useAddProduct";
import type addProduct from "@/entities/addProduct";

interface Props {
  product: Product;
}

const ProductsCard = ({ product }: Props) => {
  
  const mutateAddProduct = useAddProduct();

  const pId : addProduct = {productId: product.id};
  
  return (
    <Card.Root overflow="hidden">
      <Image
        src={product.image}
        bgColor="gray.200"
        border="2px"
        rounded="md"
        paddingY="20px"
        h="300px"
        fit="contain"
      />
      <Card.Body gap="2">
        <Card.Title>{product.category}</Card.Title>
        <ExpandableText children={product.description}></ExpandableText>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${product.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button
          variant="ghost"
          onClick={() => {
            mutateAddProduct.mutate(pId);
          }}
        >
          Add to cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductsCard;
