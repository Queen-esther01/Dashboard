import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { TbError404 } from 'react-icons/tb'

function Error404() {
    const error = useRouteError();

    if(isRouteErrorResponse(error)){
        if(error.status === 404)
        return (
            <div className='text-center flex flex-col h-screen items-center justify-center w-96 md:w-1/2 mx-auto'>
                <TbError404 size={100} className='mx-auto'/>
                <p className='text-xl'>Oops, It appears this page does not exist. Are you sure you have the right link?</p>
                <p className='mt-10 underline text-lilac'>
                    <Link to='/'> Go back to homepage </Link>
                </p>
            </div>
        )
    }

    return (
        <div className='text-center flex flex-col h-screen items-center justify-center w-96 md:w-1/2 mx-auto'>
            <p className='text-xl max-w-md mx-auto'>Oops, Something went wrong. Don't worry, I know what happened and will work on fixing it.</p>
            <p className='mt-10 underline text-lilac'>
                <Link to='/'> Go back to app </Link>
            </p>
        </div>
    )
}

export default Error404