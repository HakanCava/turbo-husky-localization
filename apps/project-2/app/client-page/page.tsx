"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  const t = useTranslations();

  return (
    <Flex
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Heading>{t("Navbar.link-2")}</Heading>
      <Box>
        {t("ClientPage.count")}: {count}
      </Box>
      <Button onClick={() => setCount((prev) => prev + 1)}>
        {t("ClientPage.increment")}
      </Button>
    </Flex>
  );
};

export default ClientPage;
