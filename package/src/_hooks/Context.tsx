import { useState, createContext, useContext, Dispatch, SetStateAction, ReactNode } from "react";

import baseTheme from "../_theme/defultTheme";

type ContextData = {
  drawerWidth: number;
  setDrawerWidth: Dispatch<SetStateAction<number>>;
  theme: any;
  setTheme: Dispatch<SetStateAction<any>>;
  menuMode: Number;
  setMenuMode: Dispatch<SetStateAction<any>>;
  recentTabs: Array<any>;
  setRecentTabs: Dispatch<SetStateAction<any>>;
  currentSelectedMenu: string;
  setCurrentSelectedMenu: Dispatch<SetStateAction<any>>;
};

export const Context = createContext<ContextData>({} as ContextData);

export const CharactersContext = ({ children }: { children: ReactNode }) => {
  const [drawerWidth, setDrawerWidth] = useState(62);
  const [theme, setTheme] = useState(baseTheme);
  const [menuMode, setMenuMode] = useState(0);
  const [recentTabs, setRecentTabs] = useState<any>([]);
  const [currentSelectedMenu, setCurrentSelectedMenu] = useState('');

  return (
    <Context.Provider value={{ drawerWidth, setDrawerWidth,theme,setTheme,menuMode,setMenuMode,recentTabs,setRecentTabs,currentSelectedMenu, setCurrentSelectedMenu }}>
      {children}
    </Context.Provider>
  );
};

export const useCharactersContext = () => useContext(Context);
