"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  const t = useTranslations("ClientPage");

  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Heading>ClientPage</Heading>
      <Box>
        {t("count")}: {count}
      </Box>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        {t("increment")}
      </Button>
    </Flex>
  );
};

export default ClientPage;
