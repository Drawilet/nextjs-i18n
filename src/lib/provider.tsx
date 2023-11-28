import { Component } from "types/Component";
import { Resources } from "types/Resources";

import { NextRouter } from "next/router";
import React from "react";

import I18nContext from "./context";

const I18nProvider: Component<{
  resources: Resources
  router: NextRouter;
}> = ({ children, resources, router }) => {
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

export default I18nProvider;
