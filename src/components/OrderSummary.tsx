import type Product from "@/entities/product";
import useCarts from "@/hooks/useCarts";
import useProducts from "@/hooks/useProducts";
import { Box, Heading, Table } from "@chakra-ui/react";

const OrderSummary = () => {
  const { data: allProducts, error: error1 } = useProducts();
  if (error1) throw error1;
  const { data: carts, error: error2 } = useCarts();
  if (error2) throw error2;
  let totalPrice = 0;
  let priceList = new Map<number, number>();

  allProducts?.map((p: Product) => priceList.set(p.id, p.price));
  carts[0].products.map((p: any) => {
    totalPrice += priceList.get(p.id) || 0;
  });

  return (
    <>
      <Box
        border="2px solid"
        borderColor="gray.300"
        borderRadius="10px"
        padding="10px"
        marginY={{ base: "20px" }}
        marginLeft={{ lg: "20px" }}
      >
        <Heading size="2xl">Order Summary</Heading>
        <Table.Root size="sm">
          <Table.Body>
            <Table.Row>
              <Table.Cell borderBottom="none">SubTotal</Table.Cell>
              <Table.Cell borderBottom="none" textAlign="end">
                ${totalPrice}
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Delivery Fee</Table.Cell>
              <Table.Cell textAlign="end">$15</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell borderBottom="none" fontWeight="bold">
                Total
              </Table.Cell>
              <Table.Cell borderBottom="none" textAlign="end" fontWeight="bold">
                ${totalPrice + 15}
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Box>
    </>
  );
};
export default OrderSummary;
