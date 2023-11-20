import { useRouter } from "next/router";
import { createContext, useContext } from "react";
import { Component } from "types/Component";
import { Resources } from "types/Resources";

const I18nContext = createContext<{ resources: Resources }>({ resources: {} });
const I18nProvider: Component<{ resources: any }> = ({
  children,
  resources,
}) => {
  return (
    <I18nContext.Provider value={{ resources }}>
      {children}
    </I18nContext.Provider>
  );
};
const useI18n = () => {
  const { resources } = useContext(I18nContext);
  const router = useRouter();

  return (key: string) => {
    const path = router.pathname;
    const locale = router.locale || router.defaultLocale || "";

    const page = resources[path];
    if (!page) return "";

    const translations = page[key];
    if (!translations) return "";

    const translation = translations[locale];
    if (!translation) return translations[router.defaultLocale || ""] || "";

    return translation;
  };
};

export { I18nProvider, useI18n };
