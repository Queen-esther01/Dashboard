import {NavLink} from 'react-router-dom'
import Klasha__Logo from '../../assets/images/klasha__logo.png'
import { BsQuestionCircle } from 'react-icons/bs'
import { BiChevronLeft } from 'react-icons/bi'
import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../utils/AppContext'
import { sidebarLinks } from '../../utils/data/sidebarLinks'
import { Links, SidebarLinkTypes } from '../../types/global'

function Sidebar() {
    

    const [showSidebar, setShowSidebar] = useState<boolean>(false)
    const { sidebarIsCollapsed, setSidebarState } = useContext(AppContext)


    const handleSidebar = () => {
        setShowSidebar(!showSidebar)
        setSidebarState(!showSidebar)
    }


    useEffect(() => {
        if(sidebarIsCollapsed !== showSidebar){
            setShowSidebar(!showSidebar)
        }
    }, [sidebarIsCollapsed])
    

    
    return (
        <div className=''>
            <div className={`${showSidebar ? 'block lg:hidden' : 'hidden lg:block'}  fixed z-50 sm:w-2/5 lg:w-1/4 xl:w-1/5 bg-lightPink h-screen overflow-auto  pl-10 pr-24 pt-5 pb-20`}>
                <img src={Klasha__Logo} className={`py-3`}/>
                <div className='mt-8'>
                    {
                        sidebarLinks.map((value: SidebarLinkTypes) => (
                            <div key={value.group} className='mb-10'>
                                <h2 className='text-lightGray__heading text-sm'>{ value.group }</h2>
                                <div className={` ${'w-36'}`}>
                                    {
                                        value.links.map((data: Links) => (
                                            <NavLink to={data.link}>
                                                {
                                                    ({ isActive }) => (
                                                        <span className={`${isActive ? 'text-pink font-bold' : ''} + ' flex items-center gap-2 my-5 text-gray'`}>
                                                            <img src={isActive ? data.activeIcon! : data.icon} title={data.label} />
                                                            { data.label }
                                                        </span>
                                                    )
                                                }
                                                
                                            </NavLink>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='mt-28'>
                    <div className='flex items-center gap-2 bg-pink w-fit rounded-full text-white p-2 px-3'>
                        <BsQuestionCircle size={25}/>
                        <span className='text-xs pr-3 pl-2'>Support</span>
                    </div>
                    <button onClick={handleSidebar} className={`hidden mt-4 border border-gray rounded-md lg:flex items-center gap-1 p-2 py-1.5`}>
                        <BiChevronLeft size={25}/>
                        <span className='text-xs font-bold pr-3'> Hide panel </span>
                    </button>
                </div>
            </div>
            {/* <button onClick={handleSidebar} className='lg:hidden border border-gray bg-white z-50 rounded-md flex items-center gap-1 p-2 py-1.5 ml-10 mx-5 fixed bottom-8'>
                <BiChevronLeft size={25}/>
                <span className='text-xs font-bold pr-3'> { !showSidebar ? 'Show' : 'Hide'} panel </span>
            </button> */}
            {
                showSidebar && 
                <button onClick={handleSidebar} className='hidden lg:flex border border-gray bg-white z-50 rounded-md items-center gap-1 p-2 py-1.5 ml-10 mx-5 fixed bottom-5 -left-6'>
                    <BiChevronLeft size={25}/>
                    {/* <span className='text-xs font-bold pr-3'> { showSidebar ? 'Show' : 'Hide'} panel </span> */}
                </button>
            }
        </div>
    )
}

export default Sidebar