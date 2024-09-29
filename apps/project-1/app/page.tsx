import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1 style={{ fontSize: "45px" }}>{t("project_1")}</h1>
      <h3 style={{ fontSize: "25px" }}>{t("title")}</h3>
    </div>
  );
}
