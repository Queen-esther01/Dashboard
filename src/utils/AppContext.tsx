import { createContext } from "react";

// interface AppContext {
//     sidebarIsCollapsed: boolean,
//     setSidebarState: (state:boolean) => {}
// }
export const AppContext = createContext({
    sidebarIsCollapsed: false,
    setSidebarState: (state:boolean) => {}
})