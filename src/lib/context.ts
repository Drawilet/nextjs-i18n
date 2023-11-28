import { Resources } from "types/Resources";
import { createContext } from "react";

export default createContext<{
  resources: Resources;
  pathname: string;
  locale: string;
}>({
  resources: {
    pages: {},
    components: {},
  },
  pathname: "",
  locale: "",
});
