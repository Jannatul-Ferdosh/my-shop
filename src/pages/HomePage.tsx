import { Toaster } from "@/components/ui/toaster";
import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";

const HomePage = () => {
  return (
    <>
      <Header />
      <ProductsGrid />
      <Toaster />
    </>
  );
};

export default HomePage;
