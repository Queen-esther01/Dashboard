import { createContext } from "react";


export const AppContext = createContext({
    sidebarIsCollapsed: false,
    setSidebarState: (_state:boolean) => {}
})