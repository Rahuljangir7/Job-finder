import {
  Anchor,
  Button,
  Container,
  FileInput,
  Group,
  MultiSelect,
  Paper,
  PasswordInput,
  Radio,
  TagsInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const skillsData = [
  { label: "HTML", value: "HTML" },
  { label: "CSS", value: "CSS" },
  { label: "JavaScript", value: "JavaScript" },
  { label: "React JS", value: "React JS" },
  { label: "Node JS", value: "Node JS" },
  { label: "Express JS", value: "Express JS" },
  { label: "MongoDB", value: "MongoDB" },
];

const Register = () => {
  const [skillValue, setSkillValue] = useState([]);

  const { register, handleSubmit, watch } = useForm();
  const selectRoleField = watch("role");
  const onSubmit = (data) => {
    console.log({ ...data, skills: skillValue });
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
        Do you have an account ?
        <Anchor
          href="#"
          size="sm"
          ms={5}
          onClick={(event) => event.preventDefault()}
        >
          Login now
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            label="Name"
            type="text"
            placeholder="Your name"
            {...register("name", { required: true, maxLength: 20 })}
            required
          />
          <TextInput
            label="Email"
            type="email"
            placeholder="you@mantine.dev"
            {...register("email", { required: true })}
            required
          />
          <PasswordInput
            label="Password"
            type="password"
            placeholder="Your password"
            {...register("password", { required: true })}
            required
            mt="md"
          />
          <TextInput
            label="Number"
            type="number"
            placeholder="Your phone number"
            {...register("phoneNumber", { required: true })}
            required
          />
          <Radio.Group
            name="favoriteFramework"
            label="Select your role"
            description="are you a ?"
            required
            withAsterisk
          >
            <Group mt="xs">
              <Radio
                value="jobseeker"
                label="Jobseeker"
                {...register("role")}
              />
              <Radio value="recruiter" label="Rcruiter" {...register("role")} />
            </Group>
          </Radio.Group>

          {selectRoleField === "recruiter" ? (
            <Paper withBorder shadow="md" p={15} mt={30} radius="md">
              <TextInput
                label="Company Name"
                type="text"
                placeholder="Enter Company Name"
                {...register("companyName", { required: true })}
                required
              />
              <TextInput
                label="Company Website"
                type="text"
                placeholder="Enter Company Website url"
                {...register("companyWebsite", { required: true })}
                required
              />
            </Paper>
          ) : selectRoleField === "jobseeker" ? (
            <Paper withBorder shadow="md" p={15} mt={30} radius="md">
              <Title order={4}>Education :</Title>
              <TextInput
                label="Degree"
                type="text"
                placeholder="Enter Education"
                {...register("degree")}
              />
              <TextInput
                label="Institution Name"
                type="text"
                placeholder="Enter institution name"
                {...register("institution")}
              />
              <Title order={4} pt={20}>
                Experience :
              </Title>
              <TextInput
                label="Company Name"
                type="text"
                placeholder="Enter Company Name"
                {...register("companyName")}
              />
              <TextInput
                label="Designation"
                type="text"
                placeholder="Enter Designation"
                {...register("designation")}
              />
              <TextInput
                label="Duration"
                type="text"
                placeholder="Enter Duration"
                {...register("duration")}
              />

              <MultiSelect
                label="Your Skills"
                placeholder="Enter your skills html, css,..."
                name="skills"
                data={skillsData}
                value={skillValue}
                onChange={setSkillValue}
                hidePickedOptions
              />
              <FileInput
                label="Attach Your CV or Resume"
                placeholder="Input placeholder"
                {...register("resume")}
                withAsterisk
              />
            </Paper>
          ) : (
            ""
          )}

          <Button fullWidth mt="xl" type="submit">
            Sign up
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Register;
