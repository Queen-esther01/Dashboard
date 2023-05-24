
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'
import { AppContext } from '../../utils/AppContext'
import { useContext } from 'react'

function DashboardLayout() {

    const { sidebarIsCollapsed } = useContext(AppContext)
    
    return (
        <>
            <div className='flex justify-between'>
                <div className=''>
                    <Sidebar/>
                </div>
                <div className={` w-full ${sidebarIsCollapsed ? 'w-full' : 'lg:w-3/4 xl:w-4/5'}`}>
                    <Header/>
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout