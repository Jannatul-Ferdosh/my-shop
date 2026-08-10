import { PasswordInput } from "@/components/ui/password-input";
import { toaster } from "@/components/ui/toaster";
import type SignUpUser from "@/entities/SignUpUser";
import useSignUp from "@/hooks/useSignUp";
import { Box, Button, Field, Flex, Input, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpUser>();

  const mutateSignUp = useSignUp();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await mutateSignUp.mutateAsync(data);
      if (response.status) {
        toaster.create({
          description: response.message,
          type: "error",
        });
      } else {
        navigate("/User/SignIn");
      }
    } catch (err) {
      toaster.create({
        description: "Something happened",
        type: "error",
      });
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
            <Field.Root required invalid={!!errors.name?.firstname}>
              <Field.Label>
                First Name
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("name.firstname")} />
              <Field.ErrorText>
                {errors.name?.firstname?.message}
              </Field.ErrorText>
            </Field.Root>

            <Field.Root required invalid={!!errors.name?.lastname}>
              <Field.Label>
                Last Name
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("name.lastname")} />
              <Field.ErrorText>
                {errors.name?.lastname?.message}
              </Field.ErrorText>
            </Field.Root>

            <Field.Root required invalid={!!errors.username}>
              <Field.Label>
                User Name
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("username")} />
              <Field.ErrorText>{errors.username?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root required invalid={!!errors.email}>
              <Field.Label>
                Email
                <Field.RequiredIndicator />
              </Field.Label>
              <Input {...register("email")} />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root required invalid={!!errors.password}>
              <Field.Label>
                Password
                <Field.RequiredIndicator />
              </Field.Label>
              <PasswordInput
                type="password"
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  },
                })}
              />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            <Button type="submit">Sign Up</Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default SignUpPage;
