import ProductsCard from "@/components/ProductsCard";
import useProducts from "@/hooks/useProducts";
import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";

const ProductsGrid = () => {
  const { data, error, isLoading } = useProducts();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 4 }}
        gap="30px"
        paddingY="20px"
        paddingX={{ base: "40px", lg: "100px" }}
      >
        {data.map((p: any) => (
          <GridItem key={p.id}>
            <ProductsCard product={p} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductsGrid;
