import ProductsCard from "@/components/ProductsCard";
import useProducts from "@/hooks/useProducts";
import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";

const ProductsGrid = () => {
  const { data, error, isLoading } = useProducts();
  if (error) return null;
  if (isLoading) return <Spinner />;
  if (data) console.log(data);
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="30px" padding="20px">
        {data.map((p: any) => (
          <GridItem>
            <ProductsCard product={p} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsGrid;
