
// SIDEBAR 
export type Links = {
    link: string
    label: string
    icon: string
    activeIcon: string | null
}
export type SidebarLinkTypes = {
    group: string,
    links: Links[]
}


// DASHBOARD
export type DashboardChartType = {
    date: string
    purchase: number
}


//TRANSACTIONS
export type TransactionDataType = {
    id: string
    source: string
    customer: string
    email: string
    amount: string
    date: string
    status: string
}