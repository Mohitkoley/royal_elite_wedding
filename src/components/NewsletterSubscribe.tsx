const NewsLetterSubscribe = () => {
  return (
    <>
      <div className='border-[#B6965B] px-20 py-20'>
        <div className="relative flex flex-col md:flex-row items-center justify-between p-40 md:p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto overflow-hidden border border-[#B6965B]">
          <div
            className="absolute inset-0 bg-cover bg-center blur-[1px]"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1620735692151-26a7e0748429?q=80&w=2787')",
            }}
          >
            <div className="absolute inset-0 bg-[#B6965B]/50" />
          </div>

          {/* Content */}
          <div className='relative px-10 flex flex-col md:flex-row items-center justify-between w-full max-w-3xl mx-auto'>
            <h2 className="text-white text-lg md:text-2xl font-semibold mb-4 md:mb-0">
              SUBSCRIBE NEWSLETTER
            </h2>
            <div className="flex w-full md:w-auto space-x-2">
              <input
                type="email"
                placeholder="Email Address"
                className="px-4 py-2 rounded-md w-full md:w-64 text-black focus:outline-none focus:ring-2 focus:ring-[#3a3a2e]"
              />
              <button className="bg-[#3a3a2e] text-white px-4 py-2 rounded-md hover:bg-[#2a2a1e] transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsLetterSubscribe
