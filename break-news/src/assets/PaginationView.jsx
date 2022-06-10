/* This example requires Tailwind CSS v2.0+ */

const PaginationView = ({ articles, totalResults, pageNum, page }) => {
	return (
		<div className='bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6'>
			<div className='flex-1 flex justify-between sm:hidden'>
				<a
					href='#'
					className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
				>
					Previous
				</a>
				<a
					href='#'
					className='ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
				>
					Next
				</a>
			</div>
			<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between lg:justify-center'>
				<div>
					<p className='text-sm text-gray-700'>
						Showing <span className='font-medium'>1</span> to <span className='font-medium'>10</span> of{' '}
						<span className='font-medium'>{totalResults}</span> results
					</p>
				</div>
				<div className='ml-10'>
					<nav className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px' aria-label='Pagination'>
						<a
							href='#'
							className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
						>
							<span className='sr-only'>Previous</span>
							<button className='h-5 w-5' aria-hidden='true'>
								{' '}
								{'<'}{' '}
							</button>
						</a>
						{/* Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" */}
						<a
							href='#'
							aria-current='page'
							className='z-10 bg-zinc-200 border-zinc-500 text-zinc-900 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
						>
							1
						</a>
						<a
							href='#'
							className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
						>
							2
						</a>
						<a
							href='#'
							className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
						>
							3
						</a>
						<span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'>
							...
						</span>
						<a
							href='#'
							className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
						>
							8
						</a>
						<a
							href='#'
							className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
						>
							9
						</a>
						<a
							href='#'
							className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
						>
							10
						</a>
						<a
							href='#'
							className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
						>
							<span className='sr-only'>Next</span>
							<button className='h-5 w-5' aria-hidden='true'>
								{' '}
								{'>'}{' '}
							</button>
						</a>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default PaginationView
