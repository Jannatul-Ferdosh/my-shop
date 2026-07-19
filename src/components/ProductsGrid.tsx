import useProducts from "@/hooks/useProducts";
import { Image, Spinner } from "@chakra-ui/react";

const ProductsGrid = () => {
  const { data, error, isLoading } = useProducts();
  if (error) return null;
  if (isLoading) return <Spinner />;
  if (data) console.log(data);
  return (
    <>
      <Image src={data[0].image} />
    </>
  );
};

export default ProductsGrid;
