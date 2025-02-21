const Header = () => {
  return (
    <header className="bg-[#a48244] text-white">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center gap-2">
              {/* <Phone className="w-5 h-5" /> */}
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase">Call Us</span>
                <span className="text-base">+16465262336 - +15166054010</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {/* <Mail className="w-5 h-5" /> */}
              <div className="flex flex-col">
                <span className="text-sm font-medium uppercase">Mail Us</span>
                <span className="text-base">info@royaleliteevents.com</span>
              </div>
            </div>
          </div>
          <button className="border-2 border-white px-8 py-2.5 hover:bg-white hover:text-[#a48244] transition-colors text-sm font-medium">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
