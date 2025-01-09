import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React from "react";
import { useForm } from "react-hook-form";

const LoginUser = () => {
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Welcome back!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet ?
        <Anchor
          href="#"
          size="sm"
          ms={5}
          onClick={(event) => event.preventDefault()}
        >
          Create account
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(onSubmit)}></form>
        <TextInput
          label="Email"
          type="email"
          placeholder="you@mantine.dev"
          {...register("email")}
          required
        />

        <PasswordInput
          label="Password"
          type="password"
          placeholder="Your password"
          {...register("password")}
          required
          mt="md"
        />
        <Group position="apart" mt="md">
          <Checkbox label="Remember me" />
          <Anchor
            onClick={(event) => event.preventDefault()}
            href="#"
            size="sm"
          >
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl">
          Sign in
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginUser;
