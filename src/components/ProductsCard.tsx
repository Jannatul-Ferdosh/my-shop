import type Product from "@/entities/product";
import { Button, Card, IconButton, Image, Text } from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import useAddProduct from "@/hooks/useAddProduct";
import type addProduct from "@/entities/addProduct";
import useQueryStore from "@/store";
import { Link } from "react-router";
import { RiDeleteBinLine } from "react-icons/ri";
import useAdminDeleteProduct from "@/hooks/useAdminDeleteProducts";

interface Props {
  product: Product;
}

const ProductsCard = ({ product }: Props) => {
  const isAdmin = useQueryStore((s) => s.isAdmin);
  const mutateAddProduct = useAddProduct();
  const mutateAdminDeleteProduct = useAdminDeleteProduct();

  const pId: addProduct = { productId: product.id };

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
        <Card.Title>{product.title}</Card.Title>
        <Text fontWeight="bold">({product.category})</Text>
        <ExpandableText children={product.description}></ExpandableText>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          ${product.price}
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        {!isAdmin && (
          <Link to={"/Cart"}>
            <Button variant="solid">Buy now</Button>
          </Link>
        )}
        {!isAdmin && (
          <Button
            variant="ghost"
            onClick={() => {
              mutateAddProduct.mutate(pId);
            }}
          >
            Add to cart
          </Button>
        )}
        {isAdmin && (
          <Link
            to={`/AdminUpdateProductPage/${encodeURIComponent(product.id)}`}
          >
            <Button variant="solid">Update</Button>
          </Link>
        )}
        {isAdmin && (
          <IconButton
            variant="ghost"
            colorPalette="red"
            onClick={() => mutateAdminDeleteProduct.mutate(product.id)}
          >
            <RiDeleteBinLine size={22} />
          </IconButton>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductsCard;
