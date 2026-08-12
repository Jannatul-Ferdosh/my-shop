import type Product from "@/entities/product";
import {
  Button,
  Card,
  CloseButton,
  Dialog,
  IconButton,
  Image,
  Portal,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "./ExpandableText";
import useAddProduct from "@/hooks/useAddProduct";
import type addProduct from "@/entities/addProduct";
import useQueryStore from "@/store";
import { Link, useNavigate } from "react-router";
import { RiDeleteBinLine } from "react-icons/ri";
import useAdminDeleteProduct from "@/hooks/useAdminDeleteProducts";

interface Props {
  product: Product;
}

const ProductsCard = ({ product }: Props) => {
  const isAdmin = useQueryStore((s) => s.isAdmin);
  const isLoggedIn = useQueryStore((s) => s.isLoggedIn);
  const navigate = useNavigate();
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
          <Button
            variant="solid"
            onClick={() => {
              if (!isLoggedIn) navigate("/User/SignIn");
              else navigate("/Cart");
            }}
          >
            Buy now
          </Button>
        )}
        {!isAdmin && (
          <Button
            variant="ghost"
            onClick={() => {
              if (!isLoggedIn) navigate("/User/SignIn");
              else mutateAddProduct.mutate(pId);
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
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <IconButton variant="ghost" colorPalette="red">
                <RiDeleteBinLine size={22} />
              </IconButton>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Delete</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <p>Delete the Product</p>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button
                      bgColor="red"
                      onClick={() =>
                        mutateAdminDeleteProduct.mutate(product.id)
                      }
                    >
                      Delete
                    </Button>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        )}
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductsCard;
