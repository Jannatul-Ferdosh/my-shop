import { toaster } from "@/components/ui/toaster";
import type loginUser from "@/entities/loginUser";
import useLogIn from "@/hooks/useLogIn";
import { Box, Button, Field, Flex, Input, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useForm } from "react-hook-form";

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginUser>();

  const mutateLogIn = useLogIn();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await mutateLogIn.mutateAsync(data);
      console.log(response);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toaster.create({
          description: err.response?.data.message,
          type: "error",
        });
      } else {
        toaster.create({
          description: "Something happened",
          type: "error",
        });
      }
    }
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
            <Field.Root required invalid={!!errors.username}>
              <Field.Label>
                UserName
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("username")} />
              <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root required invalid={!!errors.password}>
              <Field.Label>
                Password
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("password")} />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            <Button type="submit">Sign In</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default SignInPage;
