import { Box, Heading, Table } from "@chakra-ui/react";

interface Props {
  totalPrice: number;
}

const OrderSummary = ({ totalPrice }: Props) => {
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
