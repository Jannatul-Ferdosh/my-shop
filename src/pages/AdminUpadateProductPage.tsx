import type Product from "@/entities/product";
import useAdminUpdateProduct from "@/hooks/useAdminUpdateProduct";
import useProduct from "@/hooks/useProduct";
import {
  Box,
  Button,
  Field,
  Flex,
  Input,
  Spinner,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const AdminUpdateProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const mutateAdminUpdateProduct = useAdminUpdateProduct();
  const { productId } = useParams<{ productId: string }>();
  const pid = Number(productId);
  const { data: prd, isLoading, error } = useProduct(pid);

  const onSubmit = handleSubmit(async (data) => {
    mutateAdminUpdateProduct.mutateAsync(data);
  });

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <Flex justify="center">
      <Box
        border="2px solid"
        borderColor="gray.300"
        borderRadius="10px"
        p="10px"
        width={{ base: "xs", md: "sm" }}
      >
        <form onSubmit={onSubmit}>
          <Stack gap="4" align="flex-start" maxW="sm">
            <Field.Root required invalid={!!errors.title}>
              <Field.Label>
                Title
                <Field.RequiredIndicator />
              </Field.Label>
              <Input defaultValue={prd.title} {...register("title")} />
            </Field.Root>

            <Field.Root required invalid={!!errors.price}>
              <Field.Label>
                Price
                <Field.RequiredIndicator />
              </Field.Label>
              <Input defaultValue={prd.price} {...register("price")} />
            </Field.Root>

            <Field.Root required invalid={!!errors.description}>
              <Field.Label>
                Description
                <Field.RequiredIndicator />
              </Field.Label>
              <Textarea
                defaultValue={prd.description}
                {...register("description")}
              />
            </Field.Root>

            <Field.Root required invalid={!!errors.category}>
              <Field.Label>
                Category
                <Field.RequiredIndicator />
              </Field.Label>
              <Input defaultValue={prd.category} {...register("category")} />
            </Field.Root>

            <Field.Root required invalid={!!errors.image}>
              <Field.Label>
                Image
                <Field.RequiredIndicator />
              </Field.Label>
              <Input defaultValue={prd.image} {...register("image")} />
            </Field.Root>

            <Button type="submit">Update</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default AdminUpdateProductPage;
