import { useContext } from "react";
import I18nContext from "./context";

const useI18n = (type = "pages", customPath?: string) => {
  const { resources, locale, pathname } = useContext(I18nContext);
  if(customPath && !customPath.startsWith("/")) customPath = `/${customPath}`;

  return (key: string) => {
    try {
      return resources[type][customPath || pathname][locale][key];
    } catch (e) {
      return key;
    }
  };
};

export default useI18n;
