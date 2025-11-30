"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Card, TextField, Text, Heading, Flex, Box } from "@radix-ui/themes";
import { EnvelopeClosedIcon, PersonIcon, CheckCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <Card size="4" className="w-full max-w-md">
        <Flex direction="column" gap="4">
          <Heading size="6" className="text-center">
            Next.js Static App Demo
          </Heading>
          <Text size="2" color="gray" className="text-center">
            Powered by Radix UI, Tailwind CSS, React Hook Form & Zod
          </Text>

          {submitted ? (
            <Flex direction="column" align="center" gap="3" className="py-8">
              <CheckCircledIcon width="48" height="48" color="green" />
              <Text size="4" weight="bold" color="green">
                Form submitted successfully!
              </Text>
            </Flex>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Flex direction="column" gap="4">
                <Box>
                  <Text size="2" weight="medium" mb="1">
                    <Flex gap="1" align="center">
                      <PersonIcon />
                      Name
                    </Flex>
                  </Text>
                  <TextField.Root
                    {...register("name")}
                    placeholder="Enter your name"
                    size="3"
                  />
                  {errors.name && (
                    <Text size="1" color="red" mt="1">
                      {errors.name.message}
                    </Text>
                  )}
                </Box>

                <Box>
                  <Text size="2" weight="medium" mb="1">
                    <Flex gap="1" align="center">
                      <EnvelopeClosedIcon />
                      Email
                    </Flex>
                  </Text>
                  <TextField.Root
                    {...register("email")}
                    placeholder="Enter your email"
                    size="3"
                  />
                  {errors.email && (
                    <Text size="1" color="red" mt="1">
                      {errors.email.message}
                    </Text>
                  )}
                </Box>

                <Button type="submit" size="3">
                  Submit Form
                </Button>
              </Flex>
            </form>
          )}
        </Flex>
      </Card>
    </div>
  );
}
