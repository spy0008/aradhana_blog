

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-orange-300">
      <div className="flex flex-col items-center">
        <svg
          className="animate-spin h-16 w-16 text-orange-500 mb-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
        <h2 className="text-2xl font-bold text-orange-600 mb-2">Loading...</h2>
        <p className="text-gray-600">Please wait while we prepare your experience.</p>
      </div>
    </div>
  )
}

export default LoadingPage