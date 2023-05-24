import TransactionTable from '../components/pages/Transactions/TransactionTable'

function Transactions() {
    return (
        <div className='px-5 lg:px-10 lg:ml-auto mt-10 lg:mt-28 mb-20'>
            <div className='rounded-lg border border-lightGray__border'>
                <h1 className="text-gray text-lg py-3 px-4 font-semibold">Transaction history</h1>
                <TransactionTable/>
            </div>
        </div>
    )
}

export default Transactions