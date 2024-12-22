import { createContext } from "react";

export const AppContext = createContext({
  company: '',
  setCompany: (_val: string) => {},
  setShowChart: (_val: boolean) => {},
});
