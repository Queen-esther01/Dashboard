
import { AiOutlineArrowDown } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'
import SalesChart from '../components/pages/Dashboard/SalesChart';
import { data, salesOverview } from '../utils/data/salesData';



function Dashboard() {
    return (
        <div className='px-5 lg:px-10 lg:ml-auto mt-28'>
            <h2 className="text-gray font-medium text-lg">Sales overview</h2>
            <div className='mt-5 grid gap-6 grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-4'>
                {
                    salesOverview.map(value => (
                        <div className={` ${value.theme === 'dark' ? 'bg-black text-white' : ''} border border-black rounded-md p-6`}>
                            {value.date && <p className='text-sm'>24 Aug - 01 Sep 21</p>}
                            {
                                value.chart && 
                                <div>
                                    <img src={value.chart} className='w-full h-full my-5 mx-auto' />
                                </div>
                            }
                            <h4 className='text-sm'>{ value.period }</h4>
                            <p className='text-lg font-semibold mt-2'>&#8358;{ value.total.toLocaleString('en')}</p>
                        </div>
                    ))
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-10 mb-20'>
                <div className='xl:col-span-2'>
                    <div className='flex flex-wrap items-center justify-between gap-4 md:gap-3'>
                        <h2 className="text-gray font-medium text-lg border-r border-lightGray__border pr-4">Sales</h2>
                        <span className='text-pink text-sm'>7 days</span>
                        <span className='font-semibold text-sm'>30 days</span>
                        <div className='border border-gray rounded-lg py-2.5 px-3'>
                            <select className='px-2 font-semibold text-sm'>
                                <option>USD</option>
                            </select>
                        </div>
                        <div className='flex items-center justify-between border border-lightGray__border rounded-lg py-3 px-4 grow'>
                            <span className='text-sm text-lightGray__placeholder'>Email</span>
                            <MdKeyboardArrowDown size={20}/>
                        </div>
                        <div className='flex items-center gap-2 text-sm font-semibold border border-gray rounded-lg py-3 px-4'>
                            <AiOutlineArrowDown size={20}/>
                            <span>Download report</span>
                        </div>
                    </div>
                    <div className='border border-gray mt-1 rounded-lg px-4 pt-5 '>
                        <SalesChart data={data}/>
                    </div>
                </div>
                <div className='wire-card bg-pink p-6 rounded-lg flex flex-col justify-between text-white md:mt-14'>
                    <h3 className='text-xl w-52 leading-relaxed'>KlashaWire - send money to businesses globally from Africa</h3>
                    <button className='bg-gray px-6 py-3 w-fit mt-16 rounded-md text-sm'>Send a Wire</button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard