import { RouterProvider, createBrowserRouter } from "react-router-dom"
import DashboardLayout from "./components/layout/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Error404 from "./components/global/ErrorBoundary"
import { useState } from "react"
import { AppContext } from "./utils/AppContext"


function App() {

    const [sidebarIsCollapsed, setsidebarIsCollapsed] = useState<boolean>(false)


    const data = {
        sidebarIsCollapsed,
        setSidebarState: (state: boolean) => {
            setsidebarIsCollapsed(state)
        }
    }


    const router = createBrowserRouter([
        {
			path: "/",
			element: <DashboardLayout />,
			errorElement: <Error404/>,
            children: [
                {
                    path: '/',
                    index: true,
                    element: <Dashboard/>         
                },
                {
                    path: '/transactions',
                    element: <Transactions/>         
                },
            ]
		},
    ])


    return (
        <AppContext.Provider value={data}>
            <RouterProvider
                router={router}
            />
        </AppContext.Provider>
    )
}

export default App
