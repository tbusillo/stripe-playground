import { EyeIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';

type NotFoundProps = {
  errorCode?: number;
  errorMessage?: string;
};

const NotFound = ({
  errorCode = 404,
  errorMessage = 'Page not found'
}: NotFoundProps) => {
  return (
    <div className='grid-rows-12 grid h-full min-h-full gap-0 px-4 py-12 md:place-items-center md:py-24 md:px-0'>
      <div className='mx-auto max-w-max'>
        <div className='flex justify-center'>
          <EyeIcon className='h-40 w-40 -rotate-12 text-gray-700 opacity-80' />
        </div>
        <div>
          <p className='text-2xl font-bold text-gray-700'>{errorCode}</p>
          <h1 className='mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
            {errorMessage}
          </h1>
          <p className='ml-0.5 mt-5 text-base text-gray-500'>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className='mt-4 ml-0.5'>
            <Link
              to='/'
              className='text-base font-medium text-blue-600 underline underline-offset-2 hover:text-indigo-500'
            >
              Go back home<span aria-hidden='true'> &rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
