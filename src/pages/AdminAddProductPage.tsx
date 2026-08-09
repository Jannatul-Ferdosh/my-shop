import type Product from "@/entities/product";
import useAdminAddProduct from "@/hooks/useAdminAddProduct";
import { Box, Button, Field, Flex, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const AdminAddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const mutateAdminAddProduct = useAdminAddProduct();

  const onSubmit = handleSubmit(async (data) => {
    mutateAdminAddProduct.mutateAsync(data);
  });

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
              <Input {...register("title")} />
            </Field.Root>

            <Field.Root required invalid={!!errors.price}>
              <Field.Label>
                Price
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("price")} />
            </Field.Root>

            <Field.Root required invalid={!!errors.description}>
              <Field.Label>
                Description
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("description")} />
            </Field.Root>

            <Field.Root required invalid={!!errors.category}>
              <Field.Label>
                Category
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("category")} />
            </Field.Root>

            <Field.Root required invalid={!!errors.image}>
              <Field.Label>
                Image
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("image")} />
            </Field.Root>

            <Button type="submit">Add</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default AdminAddProductPage;
