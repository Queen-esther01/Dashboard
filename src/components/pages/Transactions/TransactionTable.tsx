
import { AiOutlineSearch } from 'react-icons/ai'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { IoFilter } from 'react-icons/io5'
import { transactionData } from '../../../utils/data/transactions'
import { TransactionDataType } from '../../../types/global'

function TransactionTable() {
    return (
        <div>
            <div className='flex flex-wrap justify-between items-center gap-4 md:gap-0 px-4 py-2 border-t border-b border-lightGray__border'>
                <div className='relative w-full md:w-48'>
                    <input placeholder='Search' className='w-full  pl-4 rounded-lg border border-lightGray__border py-2 placeholder:text-sm placeholder:text-lightGray__placeholder'/>
                    <AiOutlineSearch className='absolute right-3 top-2 font-bold' size={25}/>
                </div>
                <div className='flex items-center gap-3 font-semibold'>
                    <div className='flex items-center gap-3 border-2 border-gray rounded-lg py-2 px-4'>
                        <span className='text-sm'>Filter</span>
                        <IoFilter size={22}/>
                    </div>
                    <div className='border-2 border-gray rounded-lg py-[6.5px] px-4'>
                        <span className='text-sm'>Export</span>
                    </div>
                </div>
            </div>
            <div className='mt-5 overflow-x-auto w-full'>
                <table className='table-auto w-full text-left border-spacing-0 border-collapse'>
                    <thead>
                        <tr className='text-gray__tablehead'>
                            <th className='pl-8'>Transaction ID</th>
                            <th>Source</th>
                            <th>Customer name</th>
                            <th>Customer email</th>
                            <th>Amount</th>
                            <th>Request date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            transactionData.map((data:TransactionDataType, index) => (
                                <tr key={data.id} className={` ${index === 1 && 'bg-gray__tablehighlight'} text-sm text-gray__cell border-b border-lightGray__border`}>
                                    <td className='pl-8'>{ data.id }</td>
                                    <td>{ data.source }</td>
                                    <td>{ data.customer }</td>
                                    <td>{ data.email }</td>
                                    <td>{ data.amount }</td>
                                    <td>{ data.date }</td>
                                    <td>{ data.status }</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className='flex items-center gap-6 py-2 rounded-lg px-4 w-fit text-gray__pagination text-sm my-3 mx-4 ml-auto border border-lightGray__border'>
                <BiChevronLeft size={17}/>
                {
                    [1,2,3].map(value => (
                        <span className={`${value === 1 && 'font-bold text-gray bg-lightGray__paginationhighlight px-2 rounded-full'} cursor-pointer`}>{ value }</span>
                    ))
                }
                <span className='cursor-pointer'>...</span>
                {
                    [8,9,10].map(value => (
                        <span className='cursor-pointer'>{ value }</span>
                    ))
                }
                <BiChevronRight size={17} />
            </div>
        </div>
    )
}

export default TransactionTable