import ProductsCard from "@/components/ProductsCard";
import useSelectedProduct from "@/hooks/useSelectedProduct";
import { GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router";

const SelectedProductPage = () => {
  const { category } = useParams<{ category: string }>();
  if(category === undefined) return null;
  const { data, error, isLoading } = useSelectedProduct(category);
  console.log(data)
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

export default SelectedProductPage;
