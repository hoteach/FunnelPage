import logo from "../assets/hoteach/hotlogo.png";

export function Header() {

    return (
      <header className="flex flex-col justify-center items-center mt-10">
        <nav className="bg-white w-full border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a className="flex cursor-pointer items-center">
              <img
                src={logo}
                className="mr-3 h-6 sm:h-24"
                alt="Flowbite Logo"
              />
            </a>
            <div className="flex items-center lg:order-2 cursor-pointer">
              <a
                className="text-black bg-maincol border-2 border-black focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
                Get started
              </a>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <a
                    className="block py-2 pr-4 pl-3 cursor-pointer rounded bg-maincol lg:bg-transparent text-gray-700 lg:p-0 hover:text-secondary"

                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 cursor-pointer pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary lg:p-0 "
                  >
                    Tutorial
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 pr-4 pl-3 cursor-pointer text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary lg:p-0"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 pr-4 pl-3 cursor-pointer text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-secondary lg:p-0"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
  