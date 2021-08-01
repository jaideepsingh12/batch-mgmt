import { createContext } from "react";
import { User } from "./modals/User";

interface AppContextData {
  user?: User;
  setUser: (u: User) => void;
}
const AppContext = createContext<AppContextData>({
  user: undefined,
  setUser: () => {}, //this is compatible with above setUser. you can always pass nothing to functions that take some input. But not he other way around.
});

export default AppContext;
