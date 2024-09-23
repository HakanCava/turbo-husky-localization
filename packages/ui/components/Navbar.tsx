"use client";
import React, { ChangeEvent, useTransition } from "react";
import { Flex, Select, Box } from "@chakra-ui/react";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@repo/ui/localization/i18n/config";
import { setUserLocale } from "@repo/ui/localization/service/locale";
import { Link } from "@chakra-ui/next-js";

export const Navbar = () => {
  const [, startTransition] = useTransition();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const locale = event.target.value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  };

  return (
    <Flex
      sx={{
        backgroundColor: "#EDF2F7",
        padding: "12px 15px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Flex sx={{ gap: "20px", backgroundColor: "#CFCFCF", padding: "5px" }}>
        <Link href="/">{t("link-1")}</Link>
        <Link href="/client-page">{t("link-2")}</Link>
      </Flex>
      <Box>
        <Select defaultValue={locale} onChange={onChange}>
          <option label={t("en")} value="en" />
          <option label={t("tr")} value="tr" />
        </Select>
      </Box>
    </Flex>
  );
};
