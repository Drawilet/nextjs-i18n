import { NextRouter } from "next/router";
import React, { createContext, useContext } from "react";
import { Component } from "types/Component";
import { Resources } from "types/Resources";

const I18nContext = createContext<{
  resources: Resources;
  pathname: string;
  locale: string;
}>({
  resources: {},
  pathname: "",
  locale: "",
});
const I18nProvider: Component<{ resources: any; router: NextRouter }> = ({
  children,
  resources,
  router,
}) => {
  return (
    <I18nContext.Provider
      value={{
        resources,
        pathname: router.pathname,
        locale: router.locale || router.defaultLocale || "",
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};
const useI18n = () => {
  const { resources, locale, pathname } = useContext(I18nContext);

  return (key: string) => {
    const page = resources[pathname];
    if (!page) return "";

    const translations = page[key];
    if (!translations) return "";

    const translation = translations[locale];

    return translation;
  };
};

export { I18nProvider, useI18n };
