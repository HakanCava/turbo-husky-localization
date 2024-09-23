import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1 style={{fontSize:"25px"}}>{t("title")}</h1>
    </div>
  );
}
