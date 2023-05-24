import { useContext } from 'react'
import Klasha__Logo from '../../assets/images/klasha__logo.png'
import UserIcon from '../../assets/icons/user.png'
import ChevronIcon from '../../assets/icons/chevron_down.png'
import { AppContext } from '../../utils/AppContext'

function Header() {


    const { sidebarIsCollapsed } = useContext(AppContext)


    return (
        <div className='w-full px-5 lg:px-10 py-3 flex items-center justify-between border-b border-lightGray__border'>
            <img src={Klasha__Logo} className={`${sidebarIsCollapsed ? 'block' : 'lg:hidden'}`}/>
            <div className='flex items-center gap-4 lg:ml-auto'>
                <div className='flex items-center gap-2'>
                    <img src={UserIcon}/>
                    <img src={ChevronIcon}/>
                </div>
                <div className='flex items-center gap-2'>
                    <span>En</span>
                    <img src={ChevronIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Header