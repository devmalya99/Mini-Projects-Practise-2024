import React from 'react';

const ErrorPage = ({ message }) => {
  return (
    <div className="min-h-screen bg-red-500 flex items-center justify-center text-white px-4 py-12">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Oops! Something went wrong.
          </h2>
          <p className="mt-2 text-center text-sm text-white">
            It seems we are experiencing some issues. Here's the error message for further troubleshooting:
          </p>
        </div>
        <div className="rounded-md bg-red-700 p-4">
          <div className="py-2">
            <p className="text-sm">
              {message}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage;