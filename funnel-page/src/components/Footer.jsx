import logo from "../assets/hoteach/hotlogo.png";

export function Footer() {

    return (
        <footer className="p-4 bg-white md:p-8 lg:p-10flex flex-col justify-center items-center">
            <div className="border-t-4 border-gray-200 border-dotted m-5"></div>
        <div className="mx-auto max-w-screen-xl text-center flex flex-col justify-center items-center">
            <a href="#" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-6 sm:h-24"
                alt="Flowbite Logo"
              />
            </a>
            <ul className="flex flex-wrap justify-center items-center mb-3 text-gray-900">
                <li>
                    <a className="mr-4 cursor-pointer hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a className="mr-4 hover:underline md:mr-6 cursor-pointer">Web App</a>
                </li>
                <li>
                    <a className="mr-4 hover:underline cursor-pointer md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a className="mr-4 hover:underline cursor-pointer md:mr-6">Terms of Service</a>
                </li>
            </ul>
            <span className="text-sm text-gray-400 sm:text-center">Hoteach © 2024 All Rights Reserved</span>
        </div>
        </footer>
    );
}